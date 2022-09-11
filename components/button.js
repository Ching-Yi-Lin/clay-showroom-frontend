import Link from "next/link";
export default function Button({ text, url }) {
  return (
    <Link href={url}>
      <a>
        <div className="btn">
          {text}
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
        </div>
      </a>
    </Link>
  );
}
