import { useState } from "react";
import UpdateBox from "@src/pages/UpdateBox/UpdateBox";

import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function NewBox({ text, onChange }) {
  return (
    <ul>
      <div className={cx("list_wrap")}>
        <div className={cx("list_box")}>
          <div className={cx("list_content")}>
            이름바꾸고싶다
            <UpdateBox text={text} onChange={onChange} />
          </div>
        </div>
        <li>
          <div className={cx("list_box")}>
            <div className={cx("list_text")}>물건추가하기</div>
          </div>
        </li>
      </div>
    </ul>
  );
}

function Template({ children }) {
  const [isLocker, setIsLocker] = useState(false);
  const onClickAdd = () => {
    setIsLocker(true);
  };
  const [text, setText] = useState("");
  const [value, setValue] = useState("test");
  const chageValue = () => setValue("testtest");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={cx("container")}>
      <div className={cx("nav_container")}>
        <Link to="/update-box">
          <div className={cx("list_wrap")} onClick={onClickAdd}>
            <div className={cx("list_box")}>
              <div className={cx("list_text")}> +짱박아놓기 추가</div>
            </div>
          </div>
        </Link>
        {isLocker && <NewBox onChange={onChange} text={text} />}
      </div>
      {children}
    </div>
  );
}
export default Template;
