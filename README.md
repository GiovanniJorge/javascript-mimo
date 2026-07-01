# JavaScript - Mimo
Exercícios e projetos relacionados ao curso "JavaScript" da Mimo — coleção organizada por tópicos (manipulação do DOM, eventos, localStorage, APIs Web e projetos finais). Ideal para estudantes que querem aprender JavaScript prático através de exemplos interativos.

## Conteúdo principal
- Exercícios focados em problemas didáticos para aprendizagem de JavaScript.
- Projetos práticos com HTML, CSS e JavaScript vanilla.
- Exemplos que demonstram interatividade, manipulação do DOM e uso de APIs Web modernas.
- Layouts responsivos com foco em boas práticas de desenvolvimento front-end.

## Badges
- Licença: MIT (ver arquivo LICENSE)
- Linguagem: JavaScript (74.2%), CSS (14.2%), HTML (11.6%)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Como executar os projetos](#como-executar-os-projetos)
- [Boas práticas / recomendações](#boas-práticas--recomendações)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza pequenos projetos e exercícios em JavaScript que exemplificam conceitos de linguagem e resolução de problemas práticos. Cada projeto normalmente resolve um desafio específico e está escrito com foco em:
- Manipulação dinâmica do DOM
- Tratamento de eventos
- Armazenamento local com localStorage
- Uso de APIs Web (Web Speech, Web Share, etc.)
- Estrutura limpa e separação de responsabilidades

## Estrutura do repositório
```
.
├── README.md                           — este arquivo
├── LICENSE                             — licença MIT
└── projetos-gerais/                    — projetos práticos completos
    ├── comedian-bot/                   — projeto com piadas interativas
    │   ├── index.html                  — interface do usuário
    │   ├── style.css                   — estilos responsivos
    │   ├── script.js                   — lógica de filtragem, busca e favoritos
    │   ├── preview.png                 — imagem de demonstração
    │   └── README.md                   — documentação do projeto
    ├── pixel-paws/                     — jogo de animais de estimação virtual
    │   ├── index.html                  — interface com animais e alimentos
    │   ├── style.css                   — estilos com flexbox
    │   ├── script.js                   — lógica de classe Pet e alimentação
    │   ├── preview.png                 — imagem de demonstração
    │   └── README.md                   — documentação do projeto
    └── ... (outros projetos)
```

### Como se encaixa:
- Cada pasta em `projetos-gerais/` contém um projeto independente (tripla: HTML + CSS + JS).
- Cada projeto possui seu próprio `README.md` documentando funcionalidades e modo de uso.
- Todos os projetos podem ser executados simplesmente abrindo o `index.html` em um navegador.

## Como executar os projetos

### Opção 1: Abrir localmente no navegador
1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/GiovanniJorge/javascript-mimo.git
   cd javascript-mimo
   ```

2. Navegue até a pasta do projeto desejado:
   ```bash
   cd projetos-gerais/comedian-bot
   ```

3. Abra o arquivo `index.html` no navegador:
   - **Windows/Linux**: clique duplo em `index.html` ou arraste o arquivo para o navegador
   - **macOS**: clique duplo em `index.html`
   - **Via linha de comando** (Python 3):
     ```bash
     python -m http.server 8000
     # Acesse http://localhost:8000 no navegador
     ```

### Opção 2: Usar um servidor local (recomendado)
Para projetos que fazem requisições HTTP (fetch, CORS), recomenda-se usar um servidor local:

```bash
# Usando Python 3
cd projetos-gerais/seu-projeto
python -m http.server 8000

# Usando Node.js com http-server
npx http-server projetos-gerais/seu-projeto -p 8000

# Usando VS Code Live Server (extensão)
# Clique com botão direito em index.html → "Open with Live Server"
```

### Opção 3: Acessar demos online
Vários projetos possuem versões hospedadas em GitHub Pages:
- **Comedian Bot**: https://giovannijorge.github.io/javascript-mimo/projetos-gerais/comedian-bot/
- **Pixel Paws**: https://giovannijorge.github.io/javascript-mimo/projetos-gerais/pixel-paws/

## Boas práticas / recomendações

### Estrutura de arquivos
- Mantenha a estrutura básica: `index.html`, `style.css`, `script.js` por projeto.
- Para projetos maiores, considere subpastas como `assets/`, `utils/`, etc.
- Use nomes de arquivo sem espaços ou caracteres acentuados para compatibilidade.

### JavaScript
- Use `const` e `let` em vez de `var`.
- Prefira `addEventListener` ao invés de atributos `on*`.
- Separe lógica de apresentação (use funções pequenas e reutilizáveis).
- Adicione comentários explicando a funcionalidade principal.
- Use `console` para depuração, mas remova logs desnecessários antes de commitar.

### HTML
- Use semântica HTML5 (`<main>`, `<section>`, `<article>`, etc.).
- Sempre inclua atributos `alt` em imagens.
- Use `<label>` associado a campos de formulário para acessibilidade.
- Mantenha o HTML o mais simples possível (evite divs aninhadas desnecessárias).

### CSS
- Prefira `flexbox` ou `grid` para layouts complexos.
- Use custom properties (CSS variables) para cores e espaçamentos recorrentes.
- Mantenha especificidade baixa (evite `!important`).
- Testar responsividade em dispositivos móveis (media queries com breakpoints claros).

### Acessibilidade
- Inclua `title` e `aria-label` em elementos interativos quando apropriado.
- Garanta contraste de cores adequado (WCAG AA mínimo).
- Permita navegação por teclado em todos os botões e formulários.
- Use `role` e `aria-*` atributos quando necessário para leitores de tela.

### Depuração
- Use as DevTools do navegador (F12) para inspecionar elementos e observar console.
- Teste em múltiplos navegadores (Chrome, Firefox, Safari, Edge).
- Use `debugger;` ou breakpoints para rastrear fluxo de execução.

## Documentação por projeto
Cada projeto possui seu próprio `README.md` com:
- Descrição e funcionalidades
- Como usar (passo a passo)
- Como funciona (explicação técnica)
- Arquivos principais
- Tecnologias utilizadas
- Possíveis melhorias

### Projetos disponíveis:
1. **Comedian Bot** (`projetos-gerais/comedian-bot/`)
   - Aplicação interativa de piadas com filtragem, busca e favoritos
   - Demonstra: manipulação do DOM, localStorage, Web Speech API, Web Share API

2. **Pixel Paws** (`projetos-gerais/pixel-paws/`)
   - Jogo de animais de estimação virtual
   - Demonstra: classes ES6, setInterval, manipulação dinâmica do DOM, eventos

## Testes e automação (opcional)
Sugestões para melhorar o repositório:
- Adicionar um Makefile ou npm scripts para facilitar inicialização de servidor local.
- Criar um arquivo `.editorconfig` para padronizar formatação.
- Adicionar um workflow GitHub Actions que:
  - Valide HTML com W3C Validator
  - Verifique CSS com Stylelint
  - Verifique JavaScript com ESLint
  - Garanta que todos os projetos abrem sem erros 404

Exemplo de npm scripts no `package.json`:
```json
{
  "scripts": {
    "serve": "python -m http.server 8000",
    "lint": "eslint projetos-gerais --ext .js",
    "test": "echo \"Run tests here\""
  }
}
```

## Contribuindo
Contribuições são bem-vindas (ex.: correções, melhorias de documentação, novos projetos, testes). Fluxo sugerido:

1. Fork do repositório.
2. Criar branch com nome descritivo: `feature/novo-projeto`, `fix/readme`, `docs/melhorias`, etc.
3. Fazer commits atômicos com mensagens claras:
   ```bash
   git commit -m "feat: adicionar novo projeto de calculadora"
   git commit -m "fix: corrigir espaçamento responsivo no comedian-bot"
   ```
4. Abrir Pull Request descrevendo as mudanças e, se aplicável, o contexto didático.
5. Se adicionar novo projeto, incluir:
   - Estrutura completa (HTML, CSS, JS) com boas práticas
   - `README.md` detalhado com funcionalidades e instruções
   - Imagem de preview (`preview.png`)
   - Código comentado explicando conceitos principais

### Sugestões adicionais:
- Adicione um pequeno `README.md` em `projetos-gerais/` listando todos os projetos com links.
- Considere adicionar um arquivo `STYLE_GUIDE.md` documentando padrões de código do repositório.
- Para novos projetos, inclua exemplos de testes simples (ou documentação sobre como testar).

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo `LICENSE` na raiz.

Isso permite que você use, modifique e distribua o código livremente, desde que inclua uma cópia da licença.

## Autor / Contato
**Autor**: Giovanni Jorge  
**Repositório**: https://github.com/GiovanniJorge/javascript-mimo  
**Curso de referência**: JavaScript - Mimo  

Para dúvidas, sugestões ou problemas:
- Abra uma **issue** neste repositório.
- Consulte os `README.md` individuais de cada projeto para exemplos específicos.
- Verifique a **documentação da Mimo** para contexto do curso.
