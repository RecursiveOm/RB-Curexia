export default function HtmlFragment({ markup, className }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: markup }} />;
}
