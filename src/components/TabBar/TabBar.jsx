import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./style.module.scss";

import list_btn from "@src/components/TabBar/img/list_btn.svg";
import search_btn from "@src/components/TabBar/img/search_btn.svg";
import user_btn from "@src/components/TabBar/img/user_btn.svg";
import new_btn from "@src/components/TabBar/img/new_btn.svg";

const cx = classNames.bind(style);

function TabBar() {
  return (
    <div className={cx("tab_bar")}>
      <Link to={"/"}>
        <div className={cx("list_btn", "btn")}>
          <img src={list_btn} alt="list_btn" />
        </div>
      </Link>
      <div className={cx("search_btn", "btn")}>
        <img src={search_btn} alt="search_btn" />
      </div>
      <div className={cx("user_btn", "btn")}>
        <img src={user_btn} alt="user_btn" />
      </div>
      <Link to={"/resource-detail/0"}>
        <div className={cx("new_btn", "btn")}>
          <img src={new_btn} alt="new_btn" />
        </div>
      </Link>
    </div>
  );
}

export default TabBar;
