"use client";
import { FC } from "react";
import style from "./footer.module.css";
import {
  FaXTwitter,
  FaInstagram,
  FaSquareFacebook,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <div className={style["conatiner"]}>
      <div className={style["first"]}>
        <div className={style["one"]}>
          <h2 className={style["margin_h2"]}>belinia .</h2>
          <p className={style["margin_p"]}>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing
            elit.`}
          </p>
          <span className={style["icons"]}>
            <FaXTwitter className={style["hover"]} />
            <FaSquareFacebook className={style["hover"]} />
            <FaInstagram className={style["hover"]} />
            <FaLinkedin className={style["hover"]} />
            <FaPinterestP className={style["hover"]} />
          </span>
        </div>
        <div className={style["one"]}>
          <h2 className={style["margin_h2"]}>CONTACT INFO</h2>
          <p className={style["margin_p"]}>
            {`Belinia Studio 007,The Pilo Wood Adelaide,S2 8GY.
`}{" "}
          </p>
          <span className={style["one_span"]}>Email: info@domain.com</span>
        </div>
        <div className={style["one"]}>
          <h2 className={style["margin_h2"]}>CONTACT INFO</h2>
          <p className={style["margin_p"]}>
            {`atest News Have Questions About Belinia Privacy & Policies FAQ's`}
          </p>
          <span className={style["one_span"]}>Phone:+44 1234567890</span>{" "}
        </div>
      </div>
      <div className={style["secund_container"]}></div>
      <div className={style["secund"]}>
        <span className={style["silver_span"]}>
          {`© 2023 Belinia. All Rights Reserved
`}{" "}
        </span>
        <span className={style["silver_span_B"]}>Unsubscribe</span>
      </div>
    </div>
  );
};
export default Footer;
