import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { boxTitle } from "@src/store/store";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function ResourceDetailPageContents() {
  const { id } = useParams();
  const [boxName, setBoxName] = useRecoilState(boxTitle);
  const onChangeBox = (e) => {
    setBoxName(e.target.value);
  };

  return (
    <div className={cx("box_update_container")}>
      <div>
        <input
          type="text"
          onChange={onChangeBox}
          className={cx("box_title")}
          placeholder="새 사물함"
        />
        <div className={cx("box_item_btn")}>+물건 추가하기</div>
        <div className={cx("box_item")}>
          <div className={cx("box_item_info")}>
            <div className={cx("box_item_img")}></div>
            <div className={cx("box_item_title")}>라면</div>
          </div>
          <div className={cx("box_item_count")}>
            <div className={cx("box_item_count_btn")}>+</div>
            <div className={cx("box_item_count_btn")}>20</div>
            <div className={cx("box_item_count_btn")}>-</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDetailPageContents;
