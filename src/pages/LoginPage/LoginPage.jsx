import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function LoginPage() {
  return (
    <form>
      <div className={cx("login_box")}>
        <div className={cx("login_logo")}>서랍장</div>
        <div className={cx("login_title")}>로그인</div>
        <div className={cx("login_id")}>
          <input type="text" placeholder="이메일" />
        </div>
        <div className={cx("login_pw")}>
          <input type="text" placeholder="비밀번호" />
        </div>
        <div className={cx("login_alt")}>* 비밀번호가 일치하지 않습니다.</div>
        <div className={cx("login_btn")}>로그인</div>
        <div className={cx("login_sub_btn")}>
          <div className="">회원가입</div>
          <div className="">비밀번호 찾기</div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
