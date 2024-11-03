"use client";
import { FC } from "react";
import style from "../style/page_L.module.css";

const Page_L: FC = () => {
  return (
    <div className={style["container"]}>
      <span className={style["one"]}>SXSW</span>
      <span className={style["one"]}>LAND-FX</span>
      <span className={style["one"]}>dentsu</span>
      <span className={style["one"]}>algolia</span>
    </div>
  );
};

export default Page_L;
