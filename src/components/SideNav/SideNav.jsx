import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavItem from "./SideNavItem/SideNavItem";
import { boxTitle } from "@src/store/store";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

const items = [
  {
    name: "서랍1",
    count: 1,
    id: 0,
  },
  {
    name: "서랍2",
    count: 2,
    id: 1,
  },
];

function NavBox() {
  const navigator = useNavigate();
  const [boxName, setBoxName] = useRecoilState(boxTitle);
  return (
    <div>
      {items.map(({ name, count, id }, index) => {
        return (
          <div
            className={cx("list_box")}
            key={index}
            onClick={() => {
              navigator(`/resource-detail/${id}`);
            }}
          >
            <div className={cx("list_text")}>
              <SideNavItem name={boxName} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SideNav() {
  const [isLocker, setIsLocker] = useState(false);
  const onClickAdd = () => {
    setIsLocker(true);
  };

  return (
    <div className={cx("nav_container")}>
      <div className={cx("list_wrap")}>
        <Link to={"resource-detail/0"}>
          <div onClick={onClickAdd} className={cx("list_box")}>
            <div className={cx("list_text")}>+서랍 추가하기</div>
          </div>
        </Link>
      </div>
      <NavBox />
      {/* {isLocker && <NavBox />} */}
      {/* pc버전에서 쓰기 */}
    </div>
  );
}

export default SideNav;
