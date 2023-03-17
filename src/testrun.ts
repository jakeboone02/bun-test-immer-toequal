import { produce } from "immer";
import { remove } from "./utils";

const [r1, r2, r3, r4, r5] = (["=", "<", ">", "<=", ">="] as const).map(
  (operator, i) => ({
    field: `f${i + 1}`,
    operator,
    value: `v${i + 1}`,
  })
);
const rgic1 = { rules: [] };
const rgic2 = { rules: [r1, "and", r2] };

export const runTest = (t: any, e: any) => {
  t("test1", () => {
    const newObj = remove({ rules: [rgic1, "and", rgic2] }, [0]);
    e(newObj).toEqual({ rules: [rgic2] });
  });

  t("test2", () => {
    const newObj = produce({ rules: [rgic1, "and", rgic2] }, (draft) => draft);
    e(newObj).toEqual({ rules: [rgic1, "and", rgic2] });
  });

  t("test3", () => {
    const newObj = produce({ rules: [{ test: 'object in array'}] }, (draft) => draft);
    e(newObj).toEqual({ rules: [{ test: 'object in array'}] });
  });

  t("test4", () => {
    const newObj = produce([{ test: 'object in array'}], (draft) => draft);
    e(newObj).toEqual([{ test: 'object in array'}]);
  });

  t("test5", () => {
    const newObj = produce(['object in array'], (draft) => draft);
    e(newObj).toEqual(['object in array']);
  });
};
