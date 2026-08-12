# Mídias do projeto Toca das Corujas

Os caminhos usados no código partem sempre da pasta `public` do Next.js.

Exemplo: o caminho JSX `/assets/imgs-site/corujas/corujaicone.png` corresponde ao arquivo físico `public/assets/imgs-site/corujas/corujaicone.png`.

## Ícone da aba

- `public/assets/imgs-site/logo-icon.png`

## Ícone das corujas nos cards da Home

O símbolo antigo foi substituído pela imagem enviada:

- `public/assets/imgs-site/corujas/corujaicone.png`

Esse arquivo já está incluído nesta versão do projeto.

## Novas fotos das suítes

As sete imagens novas enviadas foram adicionadas ao projeto:

- `public/assets/imgs-site/suites/ImagensSuites1.jpeg`
- `public/assets/imgs-site/suites/ImagensSuites2.jpeg`
- `public/assets/imgs-site/suites/ImagensSuites3.jpeg`
- `public/assets/imgs-site/suites/ImagensSuites4.jpeg`
- `public/assets/imgs-site/suites/ImagensSuites5.jpeg`
- `public/assets/imgs-site/suites/ImagensSuites6.jpeg`
- `public/assets/imgs-site/suites/ImagensSuites7.jpeg`

A seção da Home agora apresenta Standard, Luxo e Master em formato de mosaico com várias imagens, seguindo a referência enviada.

Para as galerias de Luxo e Master, o componente reaproveita também os caminhos de suítes que já existem nas páginas antigas do projeto, todos dentro de:

- `public/assets/imgs-site/suites/`

## Seção "Conheça mais partes da Toca das Corujas"

A galeria da Home foi ampliada para 18 imagens e mistura entrada, acomodações, piscina, cozinha, estrutura, lazer e natureza.

As seis imagens novas da entrada já estão incluídas nesta versão:

- `public/assets/imgs-site/galeria-geral/entrada-01.webp`
- `public/assets/imgs-site/galeria-geral/entrada-02.webp`
- `public/assets/imgs-site/galeria-geral/entrada-03.webp`
- `public/assets/imgs-site/galeria-geral/entrada-04.webp`
- `public/assets/imgs-site/galeria-geral/entrada-05.webp`
- `public/assets/imgs-site/galeria-geral/entrada-06.webp`

A seção também utiliza imagens já existentes do projeto em:

- `public/assets/toca-das-corujas/`
- `public/assets/imgs-site/suites/`

## Mapa feito à mão - Contato

- `public/assets/imgs-site/contato/mapa-feito-a-mao.webp`

## Vídeos da Home

### Vídeo de abertura

Caminho principal:

- `public/assets/imgs-site/banner/banner3.mp4`

Caminhos alternativos aceitos pelo código:

- `public/assets/imgs-site/banner3.mp4`
- `public/banner3.mp4`

### Banner desktop da Home

- `public/assets/imgs-site/bannervideo.mp4`

### Banner mobile da Home

- `public/assets/imgs-site/banner/bannervideo-mobile.mp4`

## Vídeos solicitados

### Diversão em família

- `public/assets/imgs-site/videos/cavalo-com-musica.mp4`

### Vídeo original da mulher - página Sobre

- `public/assets/imgs-site/videos/video-original-mulher.mp4`

## Página Sobre

- Banner: `public/assets/imgs-site/sobre/banner-sobre.webp`
- Imagem principal: `public/assets/imgs-site/sobre/sobre-destaque-01.webp`
- Imagem secundária: `public/assets/imgs-site/sobre/sobre-destaque-02.webp`
- Imagem da seção de lazer: `public/assets/imgs-site/sobre/sobre-lazer-destaque.webp`
- Poster do vídeo: `public/assets/imgs-site/sobre/video-original-poster.webp`
- Imagem do CTA final: `public/assets/imgs-site/sobre/cta-sobre.webp`
- Galeria adicional: `public/assets/imgs-site/sobre/galeria-01.webp` até `public/assets/imgs-site/sobre/galeria-15.webp`

## Observação sobre autoplay com som

O navegador pode bloquear autoplay com áudio antes de qualquer interação do visitante. O código pode solicitar a reprodução com som, mas Chrome, Safari, Edge e outros navegadores mantêm suas próprias políticas de autoplay.

Ao fechar o vídeo de abertura, o componente pausa a reprodução e interrompe o áudio.
