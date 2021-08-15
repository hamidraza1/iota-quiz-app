import style from "./layoutBody.module.css";

const LayoutBody = (props: any) => {
  return <div className={style.layout}>{props.children}</div>;
};

export default LayoutBody;
