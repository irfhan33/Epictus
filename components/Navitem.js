export default function Navitem({ href, title }) {
  return (
    <>
      <li>
        <a href={href}>{title}</a>
      </li>
    </>
  );
}
