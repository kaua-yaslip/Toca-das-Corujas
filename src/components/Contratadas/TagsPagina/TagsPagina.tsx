export default function TagsPagina({ tags }: { tags: string }) {
  return (
    <div className="tags-pagina">
      <p><strong>Tags desta página</strong>: <em>{tags}</em></p>
    </div>
  );
}