import { useState } from "react";
import UpdateBox from "@src/pages/UpdateBox/UpdateBox";

import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./style.module.scss";
import SideNav from "../SideNav/SideNav";
import TabBar from "../TabBar/TabBar";
const cx = classNames.bind(style);

function Template({ children }) {
  return (
    <div className={cx("container")}>
      {/* <SideNav /> */}
      {children}
      <TabBar />
    </div>
  );
}
export default Template;
