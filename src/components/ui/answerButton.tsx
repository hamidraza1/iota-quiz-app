import style from "./answerButton.module.css";

const AnswerButton = (props: any) => {
  return (
    <button
      onClick={props.ClickHandler}
      className={`${style.container} ${props.className}`}
    >
      {props.children}
    </button>
  );
};
export default AnswerButton;
