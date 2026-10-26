<div align="center">
  <h1>Cuidar e Sorrir Odontologia — Dra. Carmen Silvia</h1>
  <p>
    <strong>Site institucional multipágina desenvolvido sob medida para clínica odontológica em Pinheiros, São Paulo.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-Sem%C3%A2ntico-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-Design_Editorial-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/Schema.org-SEO_Local-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="SEO Local" />
    <img src="https://img.shields.io/badge/CSP_SHA--256-Security_Headers-205B78?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Security Headers" />
  </p>

  <p>
    <a href="https://dracarmensilvia.netlify.app/" target="_blank"><strong>🌐 Acessar Demonstração Online</strong></a>
  </p>
</div>

---

## Sobre o Projeto

O portal **Cuidar e Sorrir Odontologia** foi projetado e desenvolvido para representar a atuação clínica da **Dra. Carmen Silvia Flores de Freitas (CRO-SP 49753)**, localizada em Pinheiros, São Paulo.

Diferente de templates clínicos genéricos, o projeto adota uma **direção de arte editorial acolhedora e sóbria**, alinhada à proposta de atendimento humanizado, escuta ativa e visão integrativa da saúde bucal — conectando odontopediatria, ortopedia funcional dos maxilares, qualidade do sono/respiração e reabilitação oral para jovens e adultos.

A arquitetura prioriza **velocidade máxima de carregamento (Zero-Framework Overhead)**, acessibilidade, SEO técnico local e segurança de cabeçalhos HTTP em nível de produção.

---

## Principais Funcionalidades & Destaques Técnicos

- **Arquitetura Multipágina Semântica:** Estrutura composta por 5 páginas independentes (`Início`, `A Doutora`, `Tratamentos`, `Orientações` e `Contato`), garantindo indexação individualizada para cada intenção de busca.
- **Fluxo Inteligente de Pré-Agendamento (WhatsApp):** Seleção contextual de tratamentos (`data-service`) que persiste entre páginas via parâmetros de URL (`?atendimento=...`), preenchendo automaticamente o formulário de agendamento e formatando a mensagem personalizada para a equipe no WhatsApp.
- **Galeria Educativa com Modal Nativo (`<dialog>`):** Seção dedicada às publicações sobre respiração bucal e qualidade do sono com visualização ampliada (lightbox) utilizando a API nativa `<dialog>` do HTML5, com suporte a fechamento via teclado (`Escape`) e clique no *backdrop*.
- **SEO Local & Dados Estruturados (`JSON-LD`):** Implementação completa de metadados Open Graph, Twitter Cards, URLs canônicas, `sitemap.xml`, `robots.txt` e marcação estruturada `Schema.org/Dentist` com geolocalização e endereço comercial em Pinheiros — SP.
- **Hardening de Segurança & CSP Automatizada:** Script utilitário em Node.js (`scripts/preparar-seguranca.mjs`) que varre as páginas HTML, gera hashes criptográficos `SHA-256` para os blocos `JSON-LD` e constrói o arquivo `_headers` com `Content-Security-Policy` estrita (sem uso de `unsafe-inline` ou `unsafe-eval`), além de `Strict-Transport-Security (HSTS)`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff` e `Permissions-Policy`.
- **Acessibilidade & Microinterações:** Navegação por teclado assistida por *skip-link* (`Pular para o conteúdo`), atributos ARIA dinâmicos no menu responsivo e animações de entrada com `IntersectionObserver` que respeitam a preferência de sistema `prefers-reduced-motion`.

---

## Tecnologias Utilizadas

| Camada | Tecnologias & Padrões |
| :--- | :--- |
| **Marcação & Acessibilidade** | HTML5 Semântico, WAI-ARIA, `<dialog>` nativo, Schema.org (`JSON-LD`) |
| **Estilização & UI** | CSS3 Custom Properties, CSS Grid & Flexbox, Design Responsivo (`mobile.css`), Tema Editorial (`blue-theme.css`) |
| **Interatividade** | Vanilla JavaScript (`ES6+`), `IntersectionObserver API`, `URLSearchParams API` |
| **SEO & Indexação** | Open Graph Protocol, Canonical Tags, `sitemap.xml`, `robots.txt` |
| **Segurança & Deploy** | Node.js (`node:crypto` para geração de hashes CSP), Netlify `_headers` |

---

## Estrutura do Projeto

```text
dra-carmen-cuidar-e-sorrir/
├── assets/                        # Fotografias da profissional e publicações educativas otimizadas
├── scripts/
│   └── preparar-seguranca.mjs     # Gerador automatizado de Content-Security-Policy (SHA-256)
├── index.html                     # Página inicial (Hero, áreas de cuidado, apresentação e experiência)
├── a-doutora.html                 # Trajetória clínica, filosofia de atendimento e pilares integrativos
├── tratamentos.html               # Detalhamento das especialidades com pré-seleção de agendamento
├── orientacoes.html               # Curadoria de conteúdos educativos com modal interativo
├── contato.html                   # Formulário integrado ao WhatsApp, mapa embarcado e FAQ
├── style.css                      # Sistema de layout base, tipografia e componentes estruturais
├── blue-theme.css                 # Paleta cromática clínica/editorial e animações de revelação
├── mobile.css                     # Refinamentos responsivos dedicados para smartphones e tablets
├── script.js                      # Controle de menu acessível, lightbox, roteamento de serviço e reveal
├── _headers                       # Cabeçalhos HTTP de segurança prontos para produção (Netlify)
├── sitemap.xml                    # Mapa de URLs para indexação no Google Search Console
├── robots.txt                     # Diretivas para motores de busca
└── favicon.svg                    # Monograma vetorial da marca ("cs")
```

---

## Como Executar Localmente

Por ser construído sobre padrões web nativos sem necessidade de *bundlers* em tempo de execução, o projeto pode ser servido diretamente por qualquer servidor estático:

```bash
# Clone o repositório
git clone https://github.com/OnaiZk/dracarmensilvia.git

# Acesse o diretório
cd dracarmensilvia

# Inicie um servidor local (exemplo com npx serve ou Python)
npx serve .
```

### Atualizando Cabeçalhos de Segurança (`_headers`)

Caso altere algum bloco `<script type="application/ld+json">` nas páginas HTML, regenere os hashes `SHA-256` da política de segurança executando:

```bash
node scripts/preparar-seguranca.mjs
```

---

<div align="center">
  <sub>Desenvolvido por <a href="https://cassiano-silva.vercel.app/"><strong>Cassiano Moura Silva</strong></a></sub>
</div>
