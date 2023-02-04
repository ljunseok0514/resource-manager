import { useParams } from "react-router-dom";

import classNames from "classnames/bind";
import style from "./style.module.scss";
const cx = classNames.bind(style);

function ResourceDetailPageContents() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default ResourceDetailPageContents;
