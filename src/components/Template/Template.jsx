import { useState } from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
import initial from "./initial.min.css";
import UpdateBox from "@src/pages/UpdateBox/UpdateBox";
const cx = classNames.bind(style);
import { Link } from "react-router-dom";

function NewBox() {
  return (
    <ul>
      <div className={cx("list_wrap")}>
        <div className={cx("list_box")}>
          <div className={cx("list_content")}>이름바꾸고싶다</div>
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

function ExampleComponent({ onIncrease }) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        const increased = count + 1;
        setCount(increased);
        onIncrease(increased);
      }}
    >
      데이터 넘겨주기 예시
    </button>
  );
}

function Template({ children }) {
  const [isLocker, setIsLocker] = useState(false);
  const onClickAdd = () => {
    setIsLocker(true);
  };
  const [value, setValue] = useState("test");
  const chageValue = () => setValue("testtest");

  const onIncrease = (count) => {
    // 여기서 ExampleComponent의 데이터를 넘겨받음
    console.log(count);
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
        {isLocker && <NewBox />}
        <ExampleComponent onIncrease={onIncrease} />
      </div>
      {children}
    </div>
  );
}
export default Template;
