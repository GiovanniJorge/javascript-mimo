# JavaScript - Mimo

Exercícios e projetos relacionados ao curso "JavaScript" da Mimo — coleção organizada por tópicos (manipulação do DOM, eventos, localStorage, APIs Web e projetos finais). Ideal para estudantes que querem aprender JavaScript prático através de exemplos interativos.

## Conteúdo principal
- Exercícios focados em problemas didáticos para aprendizagem de JavaScript.
- Projetos práticos com HTML, CSS e JavaScript vanilla.
- Exemplos que demonstram interatividade, manipulação do DOM e uso de APIs Web modernas.
- Layouts responsivos com foco em boas práticas de desenvolvimento front-end.

## Badges
![Licença](https://img.shields.io/github/license/GiovanniJorge/javascript-mimo?style=flat-square)
![Projetos](https://img.shields.io/badge/quantidade-8%20projetos-blue?style=flat-square)

## Sumário
- [Visão geral](#visão-geral)
- [Estrutura do repositório](#estrutura-do-repositório)
- [Destaques do repositório](#destaques-do-repositório)
- [Como executar os projetos](#como-executar-os-projetos)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Autor / Contato](#autor--contato)

## Visão geral
Este repositório organiza pequenos projetos e exercícios em JavaScript que exemplificam conceitos de linguagem e resolução de problemas práticos. Cada projeto normalmente resolve um desafio específico e está escrito com foco em manipulação dinâmica do DOM, tratamento de eventos, persistência com localStorage e uso de APIs Web modernas.

## Estrutura do repositório
Top-level:
```text
├── .gitattributes
├── LICENSE                  # Licença MIT
├── README.md                # Este arquivo
└── projetos-gerais/         # Projetos práticos completos
    ├── comedian-bot/        # Aplicação com piadas interativas
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   ├── preview.png
    │   └── README.md
    ├── pixel-paws/          # Jogo de animal de estimação virtual
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   ├── preview.png
    │   └── README.md
    └── ...                  # Outros projetos e exercícios desenvolvidos no curso
```

### Como se encaixa:
- O repositório abriga uma variedade de projetos independentes criados ao longo do curso.
- Cada pasta em `projetos-gerais/` funciona como exemplo de aplicação independente (HTML + CSS + JS) contendo sua própria documentação dedicada.

## Destaques do repositório

### Comedian Bot
* **Descrição:** Aplicação interativa de piadas com sistemas de filtragem, busca integrada e salvamento de favoritos.
* **Demonstra:** Manipulação do DOM, localStorage, Web Speech API e Web Share API.
* **Demo online:** [Acessar Comedian Bot](https://giovannijorge.github.io/javascript-mimo/projetos-gerais/comedian-bot/)

### Pixel Paws
* **Descrição:** Jogo de simulação de animal de estimação virtual baseado no controle de ciclos de status e alimentação.
* **Demonstra:** Programação Orientada a Objetos (Classes ES6), loops de tempo com `setInterval` e gerenciamento de eventos.
* **Demo online:** [Acessar Pixel Paws](https://giovannijorge.github.io/javascript-mimo/projetos-gerais/pixel-paws/)

## Como executar os projetos

### Opção 1: Abrir localmente no navegador
```bash
# Clone o repositório
git clone [https://github.com/GiovanniJorge/javascript-mimo.git](https://github.com/GiovanniJorge/javascript-mimo.git)
cd javascript-mimo

# Navegue até o projeto e execute o index.html (Exemplo: Comedian Bot)
cd projetos-gerais/comedian-bot
```
* **Windows/Linux:** Clique duplo em `index.html` ou arraste para o navegador.
* **macOS:** Clique duplo em `index.html` para abrir com o navegador padrão.

### Opção 2: Usar um servidor local (Recomendado para rotas de I/O e APIs)
Para contornar restrições locais de CORS de algumas APIs web, inicie um servidor HTTP:

```bash
# Usando Python 3:
python -m http.server 8000

# Usando Node.js (via http-server):
npx http-server -p 8000
```
Acesse `http://localhost:8000` em seu navegador.

## Contribuindo
Contribuições são bem-vistas! Se deseja adicionar um novo projeto ou corrigir alguma documentação, siga os passos abaixo:

1. Faça um **Fork** do repositório.
2. Crie uma branch com nome descritivo: `feature/novo-projeto` ou `fix/readme`.
3. Faça commits atômicos com mensagens claras e objetivas.
4. Abra um **Pull Request** detalhando as alterações implementadas.

## Licença
Este repositório utiliza a licença MIT — consulte o arquivo [LICENSE](LICENSE) na raiz.

## Autor / Contato
- **Autor:** Giovanni Jorge  
- **Repositório:** [https://github.com/GiovanniJorge/javascript-mimo](https://github.com/GiovanniJorge/javascript-mimo)
