# Auditoria de caminhos de mídia

## Home e elementos compartilhados

Foi conferido o conjunto de imagens usado diretamente pela Home, cabeçalho, rodapé e estilos principais.

Resultado desta revisão:

- caminhos de imagem verificados: 57
- caminhos de imagem sem arquivo correspondente na Home/layout compartilhado: 0

Foram restaurados no `public` arquivos que existiam apenas no cache otimizado do Next.js, evitando que a Home dependesse do `.next/cache` para continuar exibindo imagens.

## Vídeos adicionados

- `/assets/imgs-site/corujamobile.mp4`
- `/assets/imgs-site/pocoto.mp4`

Os dois arquivos enviados possuem faixa de áudio AAC incorporada.

## Banner 3

O código espera o arquivo original em:

`public/assets/imgs-site/banner/banner3.mp4`

Esse arquivo não veio dentro do ZIP recebido nesta revisão. Por isso, se ele não estiver presente, o componente usa `corujamobile.mp4` como fallback. Ao adicionar o `banner3.mp4` real nesse caminho, o componente passa a utilizá-lo automaticamente no desktop.

## Demais páginas antigas/legadas

O código legado ainda contém referências a mídias antigas que não vieram dentro do ZIP recebido. Elas não foram substituídas por fotos aleatórias, para não trocar o conteúdo visual das páginas por arquivos incorretos.

Se os arquivos originais forem adicionados ao `public` com os nomes esperados, os caminhos já existentes poderão funcionar normalmente.
