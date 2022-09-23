import Head from "next/head";
import Layout from "../components/layout";
import { login } from "../lib/users";
import { useRouter } from "next/router";

export default function Home({}) {
  const router = useRouter();
  async function processSubmission(event) {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    await login(data).then((res) => {
      if (res.status === 401) {
        alert("Oops! Sorry you can't come in");
      }
      if (res.status === 200) {
        localStorage.setItem("isLoggedIn", true);
        router.push("/sell");
      }
    });
  }
  return (
    <Layout home>
      <Head>
        <title>Sign In | Clay Showroom</title>
      </Head>
      <section className="sign-in">SIGN IN</section>
      <div className="container">
        <form className="form" onSubmit={processSubmission}>
          <div className="form-item">
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              className="is-input"
              placeholder="Email"
              id="email"
              autocomplete="off"
            />
          </div>
          <div className="form-item">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              className="is-input"
              placeholder="Password"
              id="password"
            />
          </div>

          <div className="form-item">
            <button type="submit" className="button is-button">
              SIGN IN
            </button>
          </div>
          <div class="form-item">
            <a href="#" className="text-link">
              Forgot Password?
            </a>
          </div>

          <div className="form-item">
            <a href="signup" className="button is-link">
              SIGN UP
            </a>
          </div>
        </form>
      </div>

      <style jsx>
        {`
          .sign-in {
            margin-top: 11px;
            margin-left: 45px;
            padding-top: 6px;
          }
          .container {
            height: inherit;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .form {
            margin-top: 28px;
            position: relative;

            background: var(--tertiary-color);
            padding: 60px 10px 20px 10px;

            display: flex;
            flex-direction: column;
            width: 300px;
          }
          .avatar {
            position: absolute;
            background: #74b9ff;
            border-radius: 50%;
            top: -10%;
            left: 40%;
            z-index: 4;
          }
          .avatar img {
            width: 64px;
            height: 64px;
          }

          .form-item {
            padding: 15px 10px 10px 10px;
            flex: 1;
            display: flex;
            flex-direction: column;
            letter-spacing: 0.5px;
          }

          .form-item label {
            display: block;
            flex: 1;
            margin-bottom: 5px;
            cursor: pointer;
          }

          .form-item input {
            padding: 4px 0px;
            flex: 1;
            background: transparent;
            border-top: none;
            outline: none;
            border-left: none;
            border-right: none;
            caret-color: #fff;
            color: #1E1E1E;
            transition: all 200ms;
            border-bottom-color: #fff;
          }

          .form-item input:focus {
            border-bottom-color: var(--secondary-color);
          }

          ::placeholder,
          ::ms-input-placeholder,
          :ms-input-placeholder {
            color: #ccc;
            font-size: 12px;
          }

          .form-item button {
            flex: 1;
            display: block;
            padding: 10px;
            font-weight: bold;
            font-size: 1em;
            color: #fff;
            letter-spacing: 0.5px;
            border-radius: 30px;
            background: var(--secondary-color);
            border: none;
            outline: none;
            transition: all 200ms;
          }
          .form-item button:hover {
            cursor: pointer;
            background: rgba(255, 56, 56, 0.7);
          }
          
          .form-item a {
            text-decoration: none;
            color:#black;
          
          }
          .text-link{
            font-size: 12px;
            color: #1E1E1E;
            margin-left: 10px;
          }

          .is-link {
            color: var(--secondary-color);
            flex: 1;
            font-size: 1em;
            font-weight: bold;
            text-align: center;
          }

          .is-link:hover {
            text-decoration: underline;
          }
          .
        `}
      </style>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
