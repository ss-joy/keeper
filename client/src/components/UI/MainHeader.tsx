import style from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <header className={style["header"]}>
      <header>
        <h1>Keeper</h1>
      </header>
      <nav>
        <ul></ul>
      </nav>
    </header>
  );
};
export default MainHeader;
