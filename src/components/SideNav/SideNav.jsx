import React from "react";
import { useNavigate } from "react-router-dom";
import SideNavItem from "./SideNavItem/SideNavItem";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

const items = [
  {
    name: "바지",
    count: 1,
    id: 0,
  },
  {
    name: "니트",
    count: 2,
    id: 1,
  },
];

function SideNav() {
  const navigator = useNavigate();

  return (
    <div>
      {items.map(({ name, count, id }, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              navigator(`/resource-detail/${id}`);
            }}
          >
            <SideNavItem name={name} />
          </div>
        );
      })}
    </div>
  );
}

export default SideNav;
