import style from "./MainCard.module.css";
const MainCard = (props: { children: React.ReactNode }) => {
  return <div className={style["card"]}>{props.children}</div>;
};

export default MainCard;
