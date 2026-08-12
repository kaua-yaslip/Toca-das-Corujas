# Mídias do projeto

Os arquivos enviados nesta revisão foram colocados diretamente em `public/assets/imgs-site/`, portanto os caminhos usados pelo navegador começam em `/assets/imgs-site/`.

## Arquivos adicionados nesta revisão

- `public/assets/imgs-site/corujaicone.png`
- `public/assets/imgs-site/corujamobile.mp4`
- `public/assets/imgs-site/pocoto.mp4`

Também foi mantida uma cópia do ícone em:

- `public/assets/imgs-site/logo-icon.png`

## Vídeo de abertura da Home

### Desktop

O código procura primeiro:

- `public/assets/imgs-site/banner/banner3.mp4`

No navegador, o caminho correspondente é:

- `/assets/imgs-site/banner/banner3.mp4`

Se `banner3.mp4` não estiver disponível, o componente usa `corujamobile.mp4` como fallback para não deixar a abertura sem vídeo.

### Mobile

No responsivo, o vídeo de abertura passa a usar diretamente:

- `public/assets/imgs-site/corujamobile.mp4`

O componente tenta iniciar o vídeo com o áudio existente dentro do próprio MP4. Se o navegador bloquear autoplay com som, o vídeo continua e o áudio é liberado na primeira interação do visitante com a página.

## Vídeo Pocotó

O vídeo usado na seção de cavalos está em:

- `public/assets/imgs-site/pocoto.mp4`

Ele está configurado para iniciar automaticamente, repetir em loop e funcionar em modo `playsInline` no celular.

## Banner principal

Os caminhos já utilizados pelo projeto continuam sendo:

- Desktop: `public/assets/imgs-site/bannervideo.mp4`
- Mobile: `public/assets/imgs-site/banner/bannervideo-mobile.mp4`

## Observação importante sobre autoplay com áudio

Chrome, Edge, Safari e navegadores mobile podem bloquear autoplay com áudio antes de qualquer interação do usuário. O código faz primeiro uma tentativa com `muted = false` e `volume = 1`. Quando o navegador rejeita essa reprodução, o vídeo é iniciado de forma compatível e o áudio é ativado assim que ocorre a primeira interação na página.

Ao fechar o vídeo de abertura, o componente executa `pause()`, coloca o volume em zero e interrompe o áudio imediatamente.
