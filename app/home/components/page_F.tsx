"use client";
import { FC } from "react";
import style from "../style/page_F.module.css";
import { CgMoreR } from "react-icons/cg";

const Page_F: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["formed"]}>
        <h2 className={style["first"]}>Just A Perfect Place To Get Started!</h2>
        <div className={style["secund"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur
          </p>
          <p>adipiscing elit Duis vehicula dui sit amet. </p>
        </div>
        <button className={style["third"]}>ASK FOR DEMONSTRATION</button>
        <button className={style["fourth"]}>DEMONSTRATION</button>
        <CgMoreR className={style["icon"]} />
        <button className={style["btn_icon"]}>
          <CgMoreR className={style["icon"]} />
        </button>
      </div>
    </div>
  );
};

export default Page_F;
