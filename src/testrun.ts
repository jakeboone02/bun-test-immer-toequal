import { produce } from "immer";

const immerTheArray = (array: any[]) => produce(array, (draft) => draft);

export const runTest = (test: any, expect: any) => {
  test("FAILS IN BUN: compare to equivalent non-empty array", () => {
    const array1 = [""];
    const array2 = [""];
    expect(immerTheArray(array1)).toEqual(array2);
  });

  test("PASSES IN BOTH: compare to itself", () => {
    const array1 = [""];
    expect(immerTheArray(array1)).toEqual(array1);
  });

  test("PASSES IN BOTH: compare to equivalent empty array", () => {
    const array1: string[] = [];
    const array2: string[] = [];
    expect(immerTheArray(array1)).toEqual(array2);
  });
};
