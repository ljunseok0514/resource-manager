import React from "react";
import { useRecoilValue } from "recoil";

import { resourceListAtom } from "@src/store/store";

function ResourceDetailPage() {
  const listState = useRecoilValue(resourceListAtom);
  console.log(listState);

  return <div>ResourceDetailPage</div>;
}

export default ResourceDetailPage;
