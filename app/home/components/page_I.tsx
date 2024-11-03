"use client";
import { FC } from "react";
import style from "../style/page_I.module.css";

const Page_I: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["first"]}>
        <h2 className={style["title"]}>Your Objective Choices</h2>
        <div className={style["description"]}>
          <p>Lorem ipsum dolor sit consectetur adipiscing elit.</p>
          <p>Curabitur placerat tellus site.</p>
        </div>
      </div>
      <div className={style["secund"]}>
        <div className={style["section_A"]}>
          <img src="hw-23-7.jpeg" alt="" />
        </div>
        <div className={style["section_B"]}>
          <div className={style["one"]}>
            <h2 className={style["margin_h2"]}>
              We Provide High Quality and Cost Effective Services.
            </h2>
          </div>
          <div className={style["two"]}>
            <p className={style["margin_two_p"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est,
              sunt placeat aliquid optio obcaecati perferendis itaque delectus
              eligendi ipsa ullam? Cupiditate dolore ducimus voluptatum iure
              magnam? Quos facere rem beatae excepturi aliquam laboriosam
              dolore. Rem voluptatibus, laborum incidunt officiis est error
              voluptate, sequi esse architecto molestiae sint nesciunt eligendi.
            </p>
          </div>
          <div className={style["three"]}>
            <h3 className={style["margin_three_h3"]}>ISABELLA DEO</h3>
            <p className={style["margin_two_p"]}>Founder - Belinia Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_I;
