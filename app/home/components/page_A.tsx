"use client";
import { FC } from "react";
import style from "../style/page_A.module.css";

const Header: FC = () => {
  return (
    <div className={style["container"]} id="#belina">
      <div className={style["left"]}>
        <div className={style["head_title"]}>
          <p>Build Modern</p>
          <p>Email Newsletter</p>
        </div>
        <div className={style["head_description"]}>
          <p>
            Discover the amazing health services that we can offer to your pets.
          </p>
        </div>
        <div className={style["head_btn"]}>
          <button className={style["btn"]}>SEND REQUEST</button>
          <button className={style["btn_send"]}>Send</button>
        </div>
      </div>
      <div className={style["right"]}>
        <img src="hw-23-5.jpg" alt="" />
      </div>
    </div>
  );
};
export default Header;
