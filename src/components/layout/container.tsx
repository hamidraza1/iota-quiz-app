import React, { Fragment } from "react";
import style from "./container.module.css";

const Container = (props: any) => {
  return (
    <Fragment>
      <div className={style.container}>
        <h1>{props.heading}</h1>
        {props.children}
      </div>
    </Fragment>
  );
};

export default Container;
