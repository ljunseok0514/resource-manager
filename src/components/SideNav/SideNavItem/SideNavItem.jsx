import React from "react";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function SideNavItem({ name }) {
  return <div>{name}</div>;
}

export default SideNavItem;
