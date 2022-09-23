import Head from "next/head";
import Layout from "../components/layout";
import { createUser } from "../lib/users";
import { useRouter } from "next/router";

export default function Home({}) {
  const router = useRouter();
  async function processSubmission(event) {
    event.preventDefault();
    const data = {
      fullName: event.target.fullName.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };

    await createUser(data).then(() => {
      localStorage.setItem("isLoggedIn", true);
      router.push("/");
    });
  }
  return (
    <Layout home>
      <Head>
        <title>Sign Up | Clay Showroom</title>
      </Head>
      <section className="sign-up">SIGN UP</section>
      <div className="container">
        <form className="form" onSubmit={processSubmission}>
          <div className="form-item">
            <label for="fullname">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="is-input"
              placeholder="Full Name"
              id="fullname"
              autocomplete="off"
            />
          </div>

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
            <label for="confrim-password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="is-input"
              placeholder="Confirm Password"
              id="confirm-password"
              autocomplete="off"
            />
          </div>

          <div className="form-item">
            <button type="submit" className="button is-button">
              SIGN UP
            </button>
          </div>

          <div className="form-item">
            <a href="signin" className="button is-link">
              SIGN IN
            </a>
          </div>
        </form>
      </div>

      <style jsx>
        {`
          .sign-up {
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
            margin-top: 8px;
            position: relative;

            background: var(--tertiary-color);
            padding: 25px 10px 20px 10px;

            display: flex;
            flex-direction: column;
            width: 300px;
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
            color: #1e1e1e;
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
          }

          .is-link {
            color: var(--secondary-color);
            flex: 1;
            font-size: 0.8em;
         
            text-align: center;
          }

          .is-link:hover {
            text-decoration: underline;
          }
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
