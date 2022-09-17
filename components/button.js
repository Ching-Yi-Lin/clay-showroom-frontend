import Link from "next/link";
export default function Button({ text, url, onClick }) {
  return (
    <>
      {url && (
        <Link href={url}>
          <a>
            <div className="btn">{text}</div>
          </a>
        </Link>
      )}

      {!url && <div className="btn" onClick={onClick}>{text}</div>}
      <style jsx>
        {`
          .btn {
            padding: 5px 20px;
            background-color: var(--secondary-color);
            display: inline-block;
            color: white;
            font-family: "Economica", sans-serif;
          }
        `}
      </style>
    </>
  );
}
