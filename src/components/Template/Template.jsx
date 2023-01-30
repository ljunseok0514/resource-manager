import classNames from "classnames/bind";
import style from "./style.module.scss";
import initial from "./initial.min.css";
const cx = classNames.bind(style);

function Template({ children }) {
  return (
    <div className={cx("container")}>
      <div className={cx("nav_container")}>
        <div className={cx("list_wrap")}>
          <div className={cx("list_box")}>
            <div className={cx("list_text")}> +서랍추가</div>
          </div>
        </div>
        <ul>
          <div className={cx("list_wrap")}>
            <div className={cx("list_box")}>
              <div className={cx("list_content")}>boxA</div>
            </div>
            <ul>
              <li>
                <div className={cx("list_box")}>
                  <div className={cx("list_text")}>물건 이름</div>
                </div>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      {children}
    </div>
  );
}
export default Template;
