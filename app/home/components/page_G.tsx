"use client";
import { FC } from "react";
import style from "../style/page_G.module.css";

const Page_G: FC = () => {
  return (
    <div className={style["container"]} >
      <div className={style["formed"]}>
        <p className={style["one"]}>52+</p>
        <span className={style["two"]}>Awards Won</span>
      </div>
      <div className={style["formed"]}>
        <p className={style["one"]}>700+</p>
        <span className={style["two"]}>Happy Clients</span>
      </div>
      <div className={style["formed"]}>
        <p className={style["one"]}>50+</p>
        <span className={style["two"]}>Tech Experts</span>
      </div>
      <div className={style["formed"]}>
        <p className={style["one"]}>200+</p>
        <span className={style["two"]}>App Projects</span>
      </div>
    </div>
  );
};

export default Page_G;
