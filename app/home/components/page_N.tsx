"use client";
import { FC } from "react";
import style from "../style/page_N.module.css";

const Page_N: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["first"]}>
        <h2 className={style["first_margin_h2"]}>Our Latest Blog</h2>
        <p className={style["first_margin_p"]}>
          Lorem ipsum dolor sit consectetur adipiscing elit.
        </p>
        <p className={style["first_margin_p"]}>
          Curabitur placerat tellus site.
        </p>
      </div>
      <div className={style["secund"]}>
        <div className={style["left_container"]}>
          <div className={style["margin"]}></div>
          <div className={style["image"]}>
            <img src="hw-23-6.jpg" alt="" />
          </div>
        </div>{" "}
        <div className={style["third"]}>
          <span className={style["span_color"]}>JUN 15, 2023</span>
          <h2 className={style["margin_h2"]}>
            How These Different Book Covers Reflect
          </h2>
          <p className={style["margin_p"]}>
            Lorem ipsum dolor sit consectetur adipiscing elit. Curabitur
            placerat tellus sit amet ipsum ornare.
          </p>
          <span className={style["span_color"]}>READ MORE ⇾</span>
        </div>
      </div>
      <div className={style["secund"]}>
        <div className={style["left_container"]}>
          <div className={style["margin"]}></div>
          <div className={style["image"]}>
            <img src="hw-23-7.jpeg" alt="" />
          </div>
        </div>{" "}
        <div className={style["third"]}>
          <span className={style["span_color"]}>JUN 15, 2023</span>
          <h2 className={style["margin_h2"]}>
            How These Different Book Covers Reflect
          </h2>
          <p className={style["margin_p"]}>
            Lorem ipsum dolor sit consectetur adipiscing elit. Curabitur
            placerat tellus sit amet ipsum ornare.
          </p>
          <span className={style["span_color"]}>READ MORE ⇾</span>
        </div>
      </div>
    </div>
  );
};
export default Page_N;
