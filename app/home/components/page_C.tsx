"use client";

import { FC } from "react";
import style from "../style/page_C.module.css";

const Page_C: FC = () => {
  return (
    <div className={style["contanier"]} id="managment">
      <div className={style["left"]}>
        <div className={style["front"]}>
          <p>MANAGEMENT SKILLS</p>
        </div>
        <div className={style["title"]}>
          <h2 className={style["title_h2_A"]}>The Best Solution</h2>
          <h2 className={style["title_h2_B"]}>For Your Company</h2>
        </div>
        <div className={style["description"]}>
          <p>
            Lorem ipsum dolor sit consectetur adipiscing elit. Curabitur
            placerat tellus sit amet ipsum ornare.
          </p>
        </div>
        <div className={style["btn"]}>
          <button className={style["btn_button"]}>READ MORE</button>
          <button className={style["hide"]}>READ</button>
        </div>
      </div>
      <div className={style["right"]}>
        <div className={style["Section"]}>
          <div className={style["base"]}></div>
          <div className={style["image"]}>
            <img src="hw-23-6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_C;
