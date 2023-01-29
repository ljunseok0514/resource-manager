import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function LoginPage() {
  return <form className={cx("container")}>LoginPage</form>;
}

export default LoginPage;
