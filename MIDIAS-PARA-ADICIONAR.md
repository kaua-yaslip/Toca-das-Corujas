# Mídias que precisam ser adicionadas

Os caminhos do código já estão prontos. Em Next.js, coloque os arquivos dentro de `public` exatamente nos locais abaixo. Exemplo: o caminho usado no JSX `/assets/imgs-site/contato/mapa-feito-a-mao.webp` corresponde ao arquivo `public/assets/imgs-site/contato/mapa-feito-a-mao.webp`.

## Ícone da aba

- `public/assets/imgs-site/logo-icon.png`

## Coruja dos cards da Home

- `public/assets/imgs-site/corujas/coruja-mae-filhote.png`

## Galeria mesclada da Home

- `public/assets/imgs-site/galeria-geral/entrada-01.webp`
- `public/assets/imgs-site/galeria-geral/estrutura-01.webp`
- `public/assets/imgs-site/galeria-geral/lazer-01.webp`
- `public/assets/imgs-site/galeria-geral/suite-01.webp`
- `public/assets/imgs-site/galeria-geral/natureza-01.webp`
- `public/assets/imgs-site/galeria-geral/entrada-02.webp`
- `public/assets/imgs-site/galeria-geral/cavalos-01.webp`
- `public/assets/imgs-site/galeria-geral/piscina-01.webp`

## Mapa feito à mão - Contato

- `public/assets/imgs-site/contato/mapa-feito-a-mao.webp`

## Vídeos da Home

- Vídeo de abertura (desktop e mobile): `public/assets/imgs-site/banner/banner3.mp4`
  - Caminhos alternativos aceitos pelo código: `public/assets/imgs-site/banner3.mp4` ou `public/banner3.mp4`
- Banner desktop da Home: `public/assets/imgs-site/bannervideo.mp4`
- Banner mobile da Home: `public/assets/imgs-site/banner/bannervideo-mobile.mp4`

## Vídeos solicitados

- Card "Diversão em família" com música: `public/assets/imgs-site/videos/cavalo-com-musica.mp4`
- Vídeo original com a mulher falando, usado na página Sobre: `public/assets/imgs-site/videos/video-original-mulher.mp4`

## Página Sobre

- Banner: `public/assets/imgs-site/sobre/banner-sobre.webp`
- Imagem principal: `public/assets/imgs-site/sobre/sobre-destaque-01.webp`
- Imagem secundária: `public/assets/imgs-site/sobre/sobre-destaque-02.webp`
- Imagem da seção de lazer: `public/assets/imgs-site/sobre/sobre-lazer-destaque.webp`
- Poster do vídeo original: `public/assets/imgs-site/sobre/video-original-poster.webp`
- Imagem do CTA final: `public/assets/imgs-site/sobre/cta-sobre.webp`
- Galeria adicional: `public/assets/imgs-site/sobre/galeria-01.webp` até `public/assets/imgs-site/sobre/galeria-15.webp`

## Observação sobre autoplay com som

A Home inicia o `banner3.mp4` automaticamente em modo compatível com autoplay e, logo após a reprodução começar, tenta liberar o áudio sem exibir botões. Ao fechar o vídeo, o código executa `pause()`, zera o volume e interrompe o áudio imediatamente. Observação: Chrome, Safari e outros navegadores podem bloquear áudio automático sem interação por uma política do próprio navegador; não existe código JavaScript capaz de obrigar o navegador a ignorar essa regra.
