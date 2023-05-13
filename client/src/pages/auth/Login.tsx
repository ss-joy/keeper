import style from "./Login.module.css";
const Login = () => {
  return (
    <div className={style["login-container"]}>
      <h2>Log in</h2>
      <form className={style["login"]}>
        <label htmlFor="email-username">Enter username or email</label>
        <input type="text" id="email-username" />
        <label htmlFor="password">Enter password</label>
        <input type="password" id="password" />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
