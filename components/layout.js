import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Your Name";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
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
        <span className="hamburger" onClick={openNav}>
          &#9776;{" "}
        </span>
      </header>
      <div id="mySidenav" className="sidenav">
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/shop">
          <a>Shop</a>
        </Link>

        <Link href="/cart">
          <a>Cart</a>
        </Link>

        <Link href="/signin">
          <a>Login</a>
        </Link>

        <Link href="/">
          <a>Logout</a>
        </Link>
      </div>
      <main className="main">{children}</main>

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
          .main {
            padding-bottom: 100px;
          }
          header {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            margin-right: 21px;
          }
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

          /* hamburger menu*/
         
          .sidenav {
            height: 100%;
            width: 0;
            position: fixed;
            z-index: 5;
            top: 0;
            left: 0;
            background-color: #111;
            overflow-x: hidden;
            transition: 0.5s;
            padding-top: 60px;
            text-align: center;
          }

          .sidenav a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
          }

          .sidenav a:hover {
            color: #f1f1f1;
          }

          .sidenav .closebtn {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 36px;
            margin-left: 50px;
            color: white;
          }

          @media screen and (max-height: 450px) {
            .sidenav {
              padding-top: 15px;
            }
            .sidenav a {
              font-size: 18px;
            }
          }
          .hamburger {
            font-size: 18px;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
