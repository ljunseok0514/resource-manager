import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function CreateUser() {
  return (
    <form>
      <div className={cx("user_box")}>
        <div className={cx("user_title")}>회원가입</div>
        <div className={cx("user_pic")}>
          <img src="" alt="" />
        </div>
        <div className={cx("user_id")}>
          <input type="text" placeholder="이메일" />
        </div>
        <div className={cx("user_alt")}>* 이메일 양식으로 입력해주세요.</div>
        <div className={cx("user_pw")}>
          <input type="text" placeholder="비밀번호" />
        </div>
        <div className={cx("user_alt")}>* 사용하실 별명을 입력해주세요.</div>
        <div className={cx("user_pw")}>
          <input type="text" placeholder="비밀번호" />
        </div>
        <div className={cx("user_alt")}>
          * 최소 8글자, 특수문자를 포함해야 합니다.
        </div>
        <div className={cx("user_pw")}>
          <input type="text" placeholder="비밀번호" />
        </div>
        <div className={cx("user_alt")}>* 비밀번호가 일치하지 않습니다.</div>
        <div className={cx("user_btn")}>등록</div>
      </div>
    </form>
  );
}

export default CreateUser;
