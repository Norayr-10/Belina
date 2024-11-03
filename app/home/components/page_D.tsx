"use client";
import { FC } from "react";
import style from "../style/page_D.module.css";

const Page_D: FC = () => {
  return (
    <div className={style["contianer"]} id="Skills">
      <div className={style["first"]}>
        <h2>Our Skills And Qualities</h2>
        <p>Lorem ipsum dolor sit consectetur adipiscing elit.</p>
        <p>Curabitur placerat tellus site.</p>
      </div>
      <div className={style["secound"]}>
        <div className={style["secound_A"]}>
          <div className={style["formed"]}>
            <h3>Content Marketing</h3>

            <div className={style["paragraph_flex"]}>
              <p className={style["one"]}></p>
              <p className={style["two"]}></p>
            </div>
          </div>
          <div className={style["formed"]}>
            <h3>Social Marketing</h3>

            <div className={style["paragraph_flex"]}>
              <p className={style["three"]}></p>
              <p className={style["four"]}></p>
            </div>
          </div>
          <div className={style["formed"]}>
            <h3>Web Development</h3>

            <div className={style["paragraph_flex"]}>
              {" "}
              <p className={style["five"]}></p>
              <p className={style["six"]}></p>
            </div>
          </div>
          <div className={style["formed"]}>
            <h3>WordPress</h3>

            <div className={style["paragraph_flex"]}>
              <p className={style["seven"]}></p>
              <p className={style["eight"]}></p>
            </div>
          </div>
        </div>
        <div className={style["secound_A"]}>
          <div className={style["formed"]}>
            <h3>Content Marketing</h3>

            <div className={style["paragraph_flex"]}>
              <p className={style["one"]}></p>
              <p className={style["two"]}></p>
            </div>
          </div>
          <div className={style["formed_A"]}>
            <div className={style["paragraph_flex"]}>
              {" "}
              <p className={style["three"]}></p>
              <p className={style["four_A"]}></p>
            </div>
          </div>
          <div className={style["formed"]}>
            <h3>Social Marketing</h3>

            <div className={style["paragraph_flex"]}>
              {" "}
              <p className={style["five"]}></p>
              <p className={style["six"]}></p>
            </div>
          </div>
          <div className={style["formed_A"]}>
            <div className={style["paragraph_flex"]}>
              <p className={style["seven"]}></p>
              <p className={style["eight"]}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_D;
