import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { resourceListAtom } from "@src/store/store";
import ResourceDetailPage from "../ResourceDetailPage/ResourceDetailPage";

function MainPage() {
  const setListState = useSetRecoilState(resourceListAtom);

  useEffect(() => {
    setListState({
      list: [1, 2, 3],
    });
  }, []);

  return <ResourceDetailPage />;
}

export default MainPage;
