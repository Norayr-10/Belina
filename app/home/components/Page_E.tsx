"use client";
import { FC } from "react";
import style from "../style/page_E.module.css";

const Page_E: FC = () => {
  return (
    <div className={style["container"]} id="Working_Process">
      <div className={style["first"]}>
        <h2 className={style["h2_margin"]}>Working Process</h2>
        <p className={style["p_margin"]}>
          Lorem ipsum dolor sit consectetur adipiscing elit.
        </p>
        <p className={style["p_margin"]}>Curabitur placerat tellus site</p>
      </div>
      <div className={style["secound"]}>
        <div className={style["left"]}>
          <div className={style["left_container"]}>
            <div className={style["margin"]}></div>
            <div className={style["image"]}>
              <img src="hw-23-6.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className={style["right"]}>
          <div className={style["formed"]}>
            <div className={style["three"]}>
              <span className={style["span_margin"]}>01</span>
            </div>
            <div className={style["four"]}>
              <h3 className={style["margin_h3"]}>Analysis & Work.</h3>
              <p className={style["secund_margin"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className={style["formed"]}>
            <div className={style["three"]}>
              <span className={style["span_margin"]}>02</span>
            </div>
            <div className={style["four"]}>
              <h3 className={style["margin_h3"]}>Design & Develop.</h3>
              <p className={style["secund_margin"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
          <div className={style["formed"]}>
            <div className={style["three"]}>
              <span className={style["span_margin"]}>03</span>
            </div>
            <div className={style["four"]}>
              <h3 className={style["margin_h3"]}>Test & Deliver.</h3>
              <p className={style["secund_margin"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_E;
