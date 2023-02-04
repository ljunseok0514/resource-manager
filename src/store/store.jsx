import { atom } from "recoil";

export const resourceListAtom = atom({
  key: "@src/store/listAtom",
  default: {
    list: [],
  },
});
