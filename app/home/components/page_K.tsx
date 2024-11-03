"use client";
import { FC } from "react";
import sytle from "../style/page_K.module.css";
import { IoLogoFacebook } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";

const Page_K: FC = () => {
  return (
    <div className={sytle["container"]} id="team">
      <div className={sytle["up"]}>
        <h2 className={sytle["up_margin_h2"]}>Our Expert Team</h2>
        <p className={sytle["up_margin_p"]}>
          Lorem ipsum dolor sit consectetur adipiscing elit.
        </p>
        <p className={sytle["up_margin_p"]}>Curabitur placerat tellus site.</p>
      </div>
      <div className={sytle["down"]}>
        <div className={sytle["description"]}>
          <div className={sytle["left_container"]}>
            <div className={sytle["margin"]}></div>
            <div className={sytle["image"]}>
              <img src="hw-23-7.jpeg" alt="" />
            </div>
          </div>
          <div className={sytle["content"]}>
            <div className={sytle["big"]}>
              <h3 className={sytle["content_h3"]}>John Smith</h3>
              <p className={sytle["content_p"]}>Advisor</p>
            </div>

            <div className={sytle["font_icon"]}>
              <IoLogoFacebook className={sytle["icons"]} />
              <RiTwitterXLine className={sytle["icons"]} />
              <FaLinkedin className={sytle["icons"]} />
            </div>
          </div>
        </div>
        <div className={sytle["description"]}>
          <div className={sytle["left_container"]}>
            <div className={sytle["margin"]}></div>
            <div className={sytle["image"]}>
              <img src="hw-23-6.jpg" alt="" />
            </div>
          </div>

          <div className={sytle["content"]}>
            <div className={sytle["big"]}>
              <h3 className={sytle["content_h3"]}>Joe Sloat</h3>
              <p className={sytle["content_p"]}>Manager</p>
            </div>

            <div className={sytle["font_icon"]}>
              <IoLogoFacebook className={sytle["icons"]} />
              <RiTwitterXLine className={sytle["icons"]} />
              <FaLinkedin className={sytle["icons"]} />
            </div>
          </div>
        </div>
        <div className={sytle["description"]}>
          <div className={sytle["left_container"]}>
            <div className={sytle["margin"]}></div>
            <div className={sytle["image"]}>
              <img src="hw-23-5.jpg" alt="" />
            </div>
          </div>

          <div className={sytle["content"]}>
            <div className={sytle["big"]}>
              {" "}
              <h3 className={sytle["content_h3"]}>Smith Deo</h3>
              <p className={sytle["content_p"]}>Advisor</p>
            </div>

            <div className={sytle["font_icon"]}>
              <IoLogoFacebook className={sytle["icons"]} />
              <RiTwitterXLine className={sytle["icons"]} />
              <FaLinkedin className={sytle["icons"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page_K;
