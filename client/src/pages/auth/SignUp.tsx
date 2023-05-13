import style from "./SignUp.module.css";
const SignUp = () => {
  return (
    <div className={style["signup-container"]}>
      <h2>Sign Up</h2>
      <form className={style["signup"]}>
        <label htmlFor="username">Enter name</label>
        <input type="text" id="username" />
        <label htmlFor="handle">Pick a username</label>
        <input type="text" id="handle" />
        <label htmlFor="email">Enter Email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Enter password</label>
        <input type="password" id="password" />
        <label htmlFor="c-password">Confirm password</label>
        <input type="password" id="c-password" />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default SignUp;
