"use client";
import { FC } from "react";
import style from "../style/page_M.module.css";

const Page_M: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["first"]}>
        <h2 className={style["first_margin_h3"]}>Take a Look Our Portfolio</h2>
        <p className={style["first_margin_p"]}>
          Lorem ipsum dolor sit consectetur adipiscing elit.
        </p>
        <p className={style["first_margin_p"]}>
          Curabitur placerat tellus site.
        </p>
      </div>
      <div className={style["secund"]}>
        <div className={style["images"]}>
          <img src="hw-23-8.jpg" alt="" />
          <img src="hw-23-9.jpg" alt="" />
        </div>
        <div className={style["images"]}>
          <img src="hw-23-10.jpg" alt="" />
          <img src="hw-23-11.jpg" alt="" />
        </div>
        <div className={style["images"]}>
          <img src="hw-23-12.jpg" alt="" />
          <img src="hw-23-13.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page_M;
