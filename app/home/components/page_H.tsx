"use client";
import { FC } from "react";
import style from "../style/page_H.module.css";
const Page_H: FC = () => {
  return (
    <div className={style["container"]} id="Price">
      <div className={style["first"]}>
        <h2 className={style["margin_h3"]}>Our Price Table</h2>
        <p className={style["margin_p"]}>
          Lorem ipsum dolor sit consectetur adipiscing elit.
        </p>
        <p className={style["margin_p"]}> Curabitur placerat tellus site.</p>
      </div>
      <div className={style["secund"]}>
        <div className={style["formed"]}>
          <div className={style["one"]}>
            <p className={style["margin_one_p"]}>
              <b>Professional Plan</b>
            </p>
            <span className={style["margin_one_span"]}>$199</span>
            <h3 className={style["margin_one_h3"]}>PER MONTH</h3>
          </div>
          <div className={style["two"]}>
            <p className={style["text_margin"]}>RESPONSIVE</p>
            <p className={style["text_margin"]}>LIVE STREAMING</p>
            <p className={style["text"]}>ADAPTIVE BITRATE</p>
            <p className={style["text"]}>ANALYTICS</p>
          </div>
          <div className={style["three"]}>
            <button className={style["BTN"]}>READ MORE</button>
            <button className={style["BTN_A"]}>READ</button>
          </div>
        </div>
        <div className={style["formed"]}>
          <div className={style["one"]}>
            <p className={style["margin_one_p"]}>
              <b>Business Plan</b>
            </p>
            <span className={style["margin_one_span"]}>$299</span>
            <h3 className={style["margin_one_h3"]}>PER MONTH</h3>
          </div>
          <div className={style["two"]}>
            <p className={style["text_margin"]}>RESPONSIVE</p>
            <p className={style["text_margin"]}>LIVE STREAMING</p>
            <p className={style["text_margin"]}>ADAPTIVE BITRATE</p>
            <p className={style["text_margin"]}>ANALYTICS</p>
          </div>
          <div className={style["three"]}>
            <button className={style["BTN"]}>READ MORE</button>
            <button className={style["BTN_A"]}>READ</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_H;
