# Publicação e entrega — Dra. Carmen Silvia

Atualizado em 26/10/2026. Projeto principal: `dra-carmen-cuidar-e-sorrir`.
Domínio informado pela cliente: `dracarmensilvia.com.br`, registrado no Registro.br.

Este documento é um checklist local. Não há notificação automática agendada.

## Já confirmado

- [x] O responsável confirmou que os dados, contatos, serviços e textos estão corretos.
- [x] Cinco páginas com links internos e arquivos locais conferidos.
- [x] Interações verificadas por simulação: menu, galeria, seleção de tratamento e mensagem de WhatsApp.
- [x] Canonical, Open Graph, JSON-LD, sitemap e robots.txt preparados com o domínio informado.
- [x] Configuração de cabeçalhos de segurança preparada para upload no Netlify.

## Lembrete: domínio, HTTPS e publicação

- [ ] Publicar a pasta atual no Netlify para o teste. Incluir `_headers` na raiz junto com `index.html`, as outras páginas, os três CSS, `script.js`, favicon, robots.txt, sitemap.xml e `assets/`.
- [ ] Não usar o ZIP antigo de 19/10: ele não contém as alterações posteriores.
- [ ] Registrar a URL `netlify.app` publicada para conferência.
- [ ] Adicionar `dracarmensilvia.com.br` aos domínios do projeto no Netlify.
- [ ] Obter acesso como contato técnico no Registro.br ou orientar a cliente a inserir os registros fornecidos pelo Netlify. A titularidade permanece com ela.
- [ ] Antes de alterar o DNS, conferir se existe e-mail no domínio e preservar seus registros.
- [ ] Usar os registros DNS mostrados pelo próprio projeto Netlify; não adivinhar IPs ou valores de CNAME.
- [ ] Confirmar certificado HTTPS válido e redirecionamento de HTTP para HTTPS.
- [ ] Definir a versão principal sem `www`, correspondente aos metadados atuais, e conferir o redirecionamento de `www`.
- [ ] Conferir os endereços finais das páginas: se a hospedagem redirecionar `.html` para outro formato, alinhar canonical, og:url e sitemap com o destino real.

## Lembrete: Google Search e Maps

- [ ] Acessar o [Google Search Console](https://search.google.com/search-console) com uma conta autorizada, preferencialmente com a cliente mantendo a propriedade e acesso de recuperação.
- [ ] Adicionar a propriedade de domínio `dracarmensilvia.com.br`.
- [ ] Verificar a propriedade usando o registro DNS fornecido pelo Google. O registro deve ser adicionado no serviço que efetivamente gerenciar o DNS do domínio.
- [ ] Enviar `https://dracarmensilvia.com.br/sitemap.xml` no Search Console.
- [ ] Inspecionar a página inicial e solicitar indexação; acompanhar erros e o estado das demais páginas.
- [ ] Confirmar se a clínica já tem um Perfil da Empresa no Google. Se tiver, adicionar ou atualizar o link do site no perfil existente; se não tiver, avaliar criação e verificação com a cliente.

Solicitar indexação não garante inclusão imediata nem posição nos resultados. Search Console e Perfil da Empresa são procedimentos distintos.

## Segurança: o que está preparado e o que falta verificar

O arquivo `_headers` configura CSP, proteção contra incorporação em outros sites, prevenção de interpretação incorreta de tipos de arquivo, política de referência, restrições a câmera/microfone/localização e HSTS. A CSP permite o JavaScript local, os dados estruturados identificados por hash, Google Fonts e o iframe de localização. Ela não usa `unsafe-inline` ou `unsafe-eval`.

O site continua estático: não possui login, banco de dados ou agenda automática. O formulário prepara uma mensagem e abre o WhatsApp; o visitante precisa enviá-la e a equipe confirma a consulta.

Se os scripts inline ou os dados JSON-LD forem alterados, regenerar o arquivo antes do upload:

```powershell
node scripts/preparar-seguranca.mjs
```

O script exige apenas Node.js local, sem instalação de pacotes. O site publicado não precisa executar Node.js. O arquivo `_headers` já está gerado. Se forem adicionados analytics, chat, vídeos incorporados ou outros serviços, revisar a CSP para os recursos necessários.

- [ ] Depois do upload, verificar os cabeçalhos reais do endereço publicado, não apenas a existência de `_headers` nos arquivos.
- [ ] Conferir o console do navegador e testar o mapa, as fontes, o menu, a galeria e o encaminhamento ao WhatsApp com a CSP ativa.
- [ ] Ativar autenticação em dois fatores nas contas do Registro.br, da hospedagem e do Google, quando disponível, e conferir os meios de recuperação.
- [ ] Compartilhar acessos por convite/permissão adequada, com cada responsável usando sua própria conta.

Os cabeçalhos locais não comprovam sua aplicação pela hospedagem. Ainda não houve teste de segurança do servidor publicado nem validação real de HTTPS ou DNS nesta revisão.

## Privacidade e apresentação

O responsável informou que explicará o funcionamento e o uso dos serviços externos à cliente na videochamada. Também fica recomendada uma informação escrita para os visitantes sobre o encaminhamento ao WhatsApp e o uso de Maps e Google Fonts. Esta revisão não certifica conformidade jurídica.

## Teste e entrega

- [ ] O responsável fará o teste das cinco páginas publicadas no computador e no celular, inclusive acesso direto às páginas internas.
- [ ] Conferir cortes e proporções das imagens, textos, botões, menu e galeria.
- [ ] Conferir o número e a mensagem preparados no WhatsApp. Combinar qualquer envio de teste com a cliente.
- [ ] Abrir o Instagram e conferir o endereço real do mapa.
- [ ] Medir o desempenho no endereço publicado, por exemplo com PageSpeed Insights, e analisar os resultados para celular.
- [ ] Conferir o título, descrição e imagem ao compartilhar o endereço final. A imagem de compartilhamento usa o domínio da cliente e depende de ele estar acessível.
- [ ] O responsável preparará o ZIP atualizado, backup e entrega dos acessos, incluindo quem cuidará de alterações, renovação do domínio e hospedagem.

A conferência visual automática foi bloqueada pelo Windows nesta sessão. Os testes locais e simulados não substituem os testes no navegador, celular e hospedagem.

## Hospedagem gratuita consultada

- [Netlify Free](https://www.netlify.com/pricing/): inclui domínio próprio e SSL. Nos planos atuais baseados em créditos, o Free oferece 300 créditos mensais com limite rígido; o site pode ser pausado ao esgotar a franquia. Conferir o plano efetivo da conta, pois existem planos antigos.
- [Cloudflare Pages](https://developers.cloudflare.com/pages/functions/pricing/): opção gratuita com requisições de arquivos estáticos gratuitas e ilimitadas. Há [outros limites](https://developers.cloudflare.com/pages/platform/limits/), como builds, quantidade de arquivos e domínios. Recursos de Functions têm regras próprias e não são necessários para o site atual.

## Referências

- [Cabeçalhos personalizados no Netlify](https://docs.netlify.com/manage/routing/headers/)
- [Verificação no Search Console](https://support.google.com/webmasters/answer/9008080?hl=pt-BR)
- [Sitemaps no Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br)
- [Perfil da Empresa](https://support.google.com/business/answer/2911778?hl=pt-BR)
