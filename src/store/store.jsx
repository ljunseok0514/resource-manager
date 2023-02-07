import { atom } from "recoil";

export const resourceListAtom = atom({
  key: "@src/store/listAtom",
  default: {
    list: [],
  },
});

export const boxTitle = atom({
  key: "boxTitle",
  default: "새 사물함",
});
