import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/logo.png"
              height={28}
              width={128}
              alt="Logo"
            />
          </a>
        </Link>
      </header>
      <main>{children}</main>

      <footer>
        <div className="bottom-bar">
          <Link href="/">
            <a>
              <div className="icon-btn">
                <Image
                  src="/images/icon-home.png"
                  alt="home"
                  width={28}
                  height={28}
                />
                <div className="label">Home</div>
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <div className="icon-btn">
                <Image
                  src="/images/icon-about.png"
                  alt="about"
                  width={28}
                  height={28}
                />
                <div className="label">About</div>
              </div>
            </a>
          </Link>
          <Link href="/cartabout">
            <a>
              <div className="icon-btn">
                <Image
                  src="/images/icon-cart.png"
                  alt="cart"
                  width={28}
                  height={28}
                />
                <div className="label">Cart</div>
              </div>
            </a>
          </Link>
          <Link href="/shop">
            <a>
              <div className="icon-btn">
                <Image
                  src="/images/icon-shop.png"
                  alt="shop"
                  width={28}
                  height={28}
                />
                <div className="label">Shop</div>
              </div>
            </a>
          </Link>
          <Link href="/signin">
            <a>
              <div className="icon-btn">
                <Image
                  src="/images/icon-profile.png"
                  alt="profile"
                  width={28}
                  height={28}
                />
                <div className="label">Profile</div>
              </div>
            </a>
          </Link>

          
        </div>
      </footer>
      <style></style>
      <style jsx>
        {`
          .bottom-bar {
            position: fixed;
            bottom: 0;
            background-color: #a8a397;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bottom-bar .icon-btn {
            padding: 8px 15px;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .bottom-bar .label {
            color: white;
            font-size: 10px;
          }
        `}
      </style>
    </div>
  );
}
