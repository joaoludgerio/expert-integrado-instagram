# Memórias do Squad — conteudo-instagram

## Histórico de Execuções

### 2026-03-25 — Run 2026-03-25-083529
- **Tema:** Super SDR em ação
- **Formato:** Carrossel 7 slides (Problema → Solução)
- **Score final:** 9/10
- **Status:** Aprovado para publicação
- **Checkpoints:** Todos aprovados sem revisão
- **Nota:** API Imagen atingiu rate limit ao gerar 7 imagens em paralelo — sequenciar com sleep 5-15s entre calls

### 2026-03-25 — Run 2026-03-25-185522
- **Tema:** IA no comercial — SDR com IA vs. prospecção manual
- **Formato:** Carrossel 7 slides (Problema → Solução)
- **Geração de imagens:** Nano Banana MCP (Gemini Pro) com conversation_id para consistência de estilo
- **Score final:** 9/10
- **Status:** Aprovado para publicação
- **Checkpoints:** Todos aprovados sem revisão
- **Nota:** Slide 5 teve erro de renderização de texto no headline (Gemini Pro alucinação) — aprovado mesmo assim pelo usuário

## Padrões Aprendidos

- João Pedro aprova briefings objetivos e diretos — sem necessidade de ajuste no primeiro round
- Tom "churrasco + SDR" (voz casual do Eric) funcionou bem — manter esse estilo de abertura
- Formato Problema → Solução converte bem para o produto Super SDR
- Rate limit Imagen: máximo 2-3 imagens em paralelo; resto sequencial com pause
- **Nano Banana MCP:** usar `conversation_id` único por carrossel + `use_image_history: true` para consistência de estilo entre slides
- **Nano Banana MCP:** modelo `pro` gera visual mais limpo; modelo `flash` é mais rápido mas menos preciso em tipografia
- **Nano Banana MCP:** Gemini Pro pode alucinar texto em imagens — verificar texto gerado nos slides antes de aprovar
- João Pedro aceita conteúdo aprovado mesmo com pequenos erros visuais (slide 5) sem precisar regerar
- **Bridge slide:** fundo abstrato (livro, porta) não comunica bem para B2B — preferir handshake, monitor, ou cena de escritório executivo
- Alternância dark/light/blue nos slides cria boa cadência visual — manter esse padrão

### 2026-03-25 — Run 2026-03-25-191327
- **Tema:** IA no comercial B2B — prospecção automatizada vs manual
- **Formato:** Carrossel 7 slides (Problema → Solução)
- **Geração de imagens:** Nano Banana MCP (Gemini) com conversation_id para consistência
- **Score final:** 9/10
- **Status:** Aprovado para publicação
- **Checkpoints:** Todos aprovados na primeira rodada
- **Nota:** Slides 3 e 6 tiveram artefatos de texto — aprovado pelo usuário para edição manual

### 2026-03-25 — Run 2026-03-25-192212
- **Tema:** Super SDR — Demo de funcionalidade (300+ leads/dia)
- **Formato:** Carrossel 7 slides (Problema → Solução)
- **Geração de imagens:** Nano Banana MCP (Gemini Pro) com conversation_id para consistência
- **Score final:** 9/10
- **Status:** Aprovado para publicação
- **Checkpoints:** Todos aprovados na primeira rodada
- **Nota:** Slide 6 teve typo visual no dashboard ("meutiogs") — aprovado pelo usuário. Geração sequencial sem rate limit issues.

### 2026-03-25 — Run 2026-03-25-192728
- **Tema:** Super SDR em ação — "Meu SDR trabalhou 8h enquanto eu dormia"
- **Formato:** Carrossel 7 slides (Problema → Solução)
- **Geração de imagens:** Nano Banana MCP (Gemini Pro) com conversation_id `expert-supersdr-20260325`
- **Score final:** 9/10
- **Status:** Aprovado para publicação
- **Checkpoints:** Todos aprovados na primeira rodada
- **Nota:** Slide 4 (bridge) com fundo de livro/mão considerado abstrato pelo Revisor — sugestão de usar handshake nas próximas versões. Slide 6 com artefato holográfico leve no celular — usuário aprovou para feed orgânico.

### 2026-03-25 — Run 2026-03-25-202108
- **Tema:** Custo SDR Humano vs IA — comparativo financeiro
- **Formato:** Carrossel 8 slides (Listicle/Comparativo por categoria de custo)
- **Geração de imagens:** Nano Banana MCP (Gemini Pro) com conversation_id `expert-sdr-custos-20260325`
- **Score final:** 9/10
- **Status:** Aprovado para publicação
- **Checkpoints:** Todos aprovados na primeira rodada
- **Nota:** Slides 2 e 6 com typos visuais ("icorren" e "Sernover") — usuário aprovou para correção manual. Slide 2 usou metáfora do iceberg que funcionou bem visualmente.

## Padrões Aprendidos

- João Pedro aprova briefings objetivos e diretos — sem necessidade de ajuste no primeiro round
- Tom "churrasco + SDR" (voz casual do Eric) funcionou bem — manter esse estilo de abertura
- Formato Problema → Solução converte bem para o produto Super SDR
- Rate limit Imagen: máximo 2-3 imagens em paralelo; resto sequencial com pause
- **Nano Banana MCP:** usar `conversation_id` único por carrossel + `use_image_history: true` para consistência de estilo entre slides
- **Nano Banana MCP:** modelo `pro` gera visual mais limpo; modelo `flash` é mais rápido mas menos preciso em tipografia
- **Nano Banana MCP:** Gemini Pro pode alucinar texto em imagens — verificar texto gerado nos slides antes de aprovar
- João Pedro aceita conteúdo aprovado mesmo com pequenos erros visuais sem precisar regerar
- **Bridge slide:** handshake e monitor com dashboard funcionam melhor que imagens abstratas para B2B
- Alternância dark/light/blue nos slides cria boa cadência visual — manter esse padrão
- **Comparativo financeiro** (SDR humano vs IA) é ângulo com alto potencial de salvamento/compartilhamento entre gestores
- **Metáfora do iceberg** (slide 2) funcionou bem visualmente para o conceito de custos ocultos — reutilizar em outros contextos

## Posts Produzidos

| Data | Tema | Score | Publicado? |
|------|------|-------|-----------|
| 2026-03-25 | Super SDR em ação | 9/10 | Pendente |
| 2026-03-25 | IA no comercial (Nano Banana) | 9/10 | Pendente |
| 2026-03-25 | IA no comercial B2B (run 191327) | 9/10 | Pendente |
| 2026-03-25 | Super SDR Demo (run 192212) | 9/10 | Pendente |
| 2026-03-25 | Super SDR em ação — "8h dormindo" (run 192728) | 9/10 | Pendente |
| 2026-03-25 | Custo SDR Humano vs IA (run 202108) | 9/10 | Pendente |
