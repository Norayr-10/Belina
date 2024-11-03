"use client";
import { FC } from "react";
import style from "../style/page_J.module.css";

const Page_J: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["first"]}>
        <div className={style["formed"]}>
          <div className={style["one"]}>
            <h2>{`What's Our Client Say`}</h2>
          </div>
          <div className={style["two"]}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <p>consectetur adipiscing elit Duis vehicula.</p>
          </div>
        </div>
        <div className={style["image"]}>
          <img src="hw-23-7.jpeg" alt="" />
        </div>
      </div>
      <div className={style["secund"]}>
        <div className={style["three"]}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Nulla nec eros in ex volutpat.</p>
        </div>
        <div className={style["four"]}>
          <h2 className={style["margin_four_h2"]}>JACK SPARROW</h2>
          <h3 className={style["margin_four_h3"]}>CEO - GOGI Tech</h3>
        </div>
      </div>
    </div>
  );
};

export default Page_J;
