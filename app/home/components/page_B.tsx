"use client";
import { FC } from "react";
import style from "../style/page_B.module.css";
import { BsHouseFill } from "react-icons/bs";
import { FaCogs } from "react-icons/fa";
import { LiaCrosshairsSolid } from "react-icons/lia";
import { CiCircleMore } from "react-icons/ci";

const Page_B: FC = () => {
  return (
    <div className={style["container"]}>
      <div className={style["first"]}>
        <h2 className={style["title"]}>Our Best Services</h2>
        <p className={style["section_A"]}>
          Lorem ipsum dolor sit consectetur adipiscing elit.
        </p>
        <p className={style["section_B"]}>Curabitur placerat tellus site.</p>
      </div>
      <div className={style["secoud"]}>
        <div className={style["formed"]}>
          <BsHouseFill className={style["icon"]} />
          <div className={style["content"]}>
            <h3 className={style["margin"]}>Design</h3>
            <p>Lorem ipsum dolor sit</p>
            <p>amet sit amet.</p>
          </div>
          <div className={style["btn"]}>
            <button className={style["btn_button"]}>Read More</button>
            <CiCircleMore className={style["hiden"]} />{" "}
          </div>
        </div>
        <div className={style["formed"]}>
          <FaCogs className={style["icon"]} />
          <div className={style["content"]}>
            <h3 className={style["margin"]}>Development</h3>
            <p>Lorem ipsum dolor sit</p>
            <p>amet sit amet.</p>
          </div>
          <div className={style["btn"]}>
            <button className={style["btn_button"]}>Read More</button>
            <CiCircleMore className={style["hiden"]} />{" "}
          </div>
        </div>
        <div className={style["formed"]}>
          <LiaCrosshairsSolid className={style["icon"]} />
          <div className={style["content"]}>
            <h3 className={style["margin"]}>Finence</h3>
            <p>Lorem ipsum dolor sit</p>
            <p>amet sit amet.</p>
          </div>
          <div className={style["btn"]}>
            <button className={style["btn_button"]}>Read More</button>
            <CiCircleMore className={style["hiden"]} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_B;
