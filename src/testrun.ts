import { produce } from "immer";

export const runTest = (t: any, e: any) => {
  t("string[]", () => {
    const newObj = produce(['object in array'], (draft) => draft);
    e(newObj).toEqual(['object in array']);
  });
};
