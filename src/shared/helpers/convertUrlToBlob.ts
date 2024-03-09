export async function convertUrlToBlob(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Falha ao baixar o conteúdo da URL');
  }

  const arrayBuffer = await response.arrayBuffer();

  const blob = new Blob([arrayBuffer]);

  return blob;
}
