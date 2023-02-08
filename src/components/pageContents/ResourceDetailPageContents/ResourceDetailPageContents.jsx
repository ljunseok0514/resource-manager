import { useParams } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { boxTitle } from "@src/store/store";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function BoxItem() {
  const [count, setCount] = useState(0);
  const onCountPlus = () => {
    setCount(count + 1);
  };
  const onCountMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className={cx("box_item")}>
      <div className={cx("box_item_info")}>
        <div className={cx("box_item_img")}>
          +
          <img src="hwayo.png" alt="" />
        </div>
        <div className={cx("box_item_title")}>
          <input type="text" />
        </div>
      </div>
      <div className={cx("box_item_count")}>
        <div className={cx("box_item_count_btn")} onClick={onCountPlus}>
          +
        </div>
        <div className={cx("box_item_count_num")}>{count}</div>
        <div className={cx("box_item_count_btn")} onClick={onCountMinus}>
          -
        </div>
      </div>
    </div>
  );
}

function ResourceDetailPageContents() {
  const { id } = useParams();
  const [boxName, setBoxName] = useRecoilState(boxTitle);
  const onChangeBox = (e) => {
    setBoxName(e.target.value);
  };
  const [isLocker, setIsLocker] = useState(false);
  const onClickAdd = () => {
    setIsLocker(true);
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
        <div className={cx("box_item_btn")} onClick={onClickAdd}>
          +물건 추가하기
        </div>
        {isLocker && <BoxItem />}
      </div>
    </div>
  );
}

export default ResourceDetailPageContents;
