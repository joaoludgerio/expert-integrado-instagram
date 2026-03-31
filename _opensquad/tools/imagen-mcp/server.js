#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import fs from "fs";
import path from "path";
import { GoogleAuth } from "google-auth-library";

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT;
const LOCATION = "us-central1";
const MODEL = "imagen-3.0-generate-001";

const server = new McpServer({
  name: "imagen",
  version: "1.0.0",
});

server.tool(
  "generate_image",
  "Generate an image using Google Imagen 3. Saves the result to disk and returns the file path.",
  {
    prompt: z.string().describe("Text description of the image to generate"),
    output_path: z
      .string()
      .describe(
        "File path to save the image (e.g., squads/my-squad/output/image.png)"
      ),
    aspect_ratio: z
      .enum(["1:1", "16:9", "9:16", "4:3", "3:4"])
      .optional()
      .default("1:1")
      .describe("Image aspect ratio (default: 1:1)"),
    count: z
      .number()
      .min(1)
      .max(4)
      .optional()
      .default(1)
      .describe("Number of images to generate, 1–4 (default: 1)"),
  },
  async ({ prompt, output_path, aspect_ratio = "1:1", count = 1 }) => {
    if (!PROJECT_ID) {
      throw new Error(
        "GOOGLE_CLOUD_PROJECT environment variable is not set."
      );
    }

    const auth = new GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });

    const client = await auth.getClient();
    const tokenResponse = await client.getAccessToken();
    const accessToken = tokenResponse.token;

    const url = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/publishers/google/models/${MODEL}:predict`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        instances: [{ prompt }],
        parameters: {
          sampleCount: count,
          aspectRatio: aspect_ratio,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      const msg = data?.error?.message || JSON.stringify(data);
      throw new Error(`Imagen API error (${response.status}): ${msg}`);
    }

    const predictions = data.predictions ?? [];
    if (predictions.length === 0) {
      throw new Error("Imagen returned no images. Try a different prompt.");
    }

    const ext = path.extname(output_path) || ".png";
    const base = output_path.slice(0, output_path.length - ext.length);
    const savedPaths = [];

    for (let i = 0; i < predictions.length; i++) {
      const imageData = predictions[i].bytesBase64Encoded;
      if (!imageData) {
        throw new Error(`Prediction ${i + 1} has no image data.`);
      }

      const filePath =
        predictions.length === 1 ? output_path : `${base}_${i + 1}${ext}`;

      fs.mkdirSync(path.dirname(path.resolve(filePath)), { recursive: true });
      fs.writeFileSync(filePath, Buffer.from(imageData, "base64"));
      savedPaths.push(filePath);
    }

    return {
      content: [
        {
          type: "text",
          text:
            `✅ Generated ${savedPaths.length} image(s):\n` +
            savedPaths.map((p) => `  • ${p}`).join("\n"),
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
