import { produce } from "immer";

const immerTheArray = (array: any[]) => produce(array, (draft) => draft);

export const runTest = (test: any, expect: any) => {
  test("FAILS IN BUN: toEqual equivalent array (non-empty)", () => {
    const array1 = [""];
    const array2 = [""];
    expect(immerTheArray(array1)).toEqual(array2);
  });

  test("PASSES IN BOTH: toEqual equivalent array (empty)", () => {
    const array1: string[] = [];
    const array2: string[] = [];
    expect(immerTheArray(array1)).toEqual(array2);
  });

  test("PASSES IN BOTH: toEqual itself (non-empty)", () => {
    const array1 = [""];
    expect(immerTheArray(array1)).toEqual(array1);
  });

  test("PASSES IN BOTH: toEqual itself (empty)", () => {
    const array1: string[] = [];
    expect(immerTheArray(array1)).toEqual(array1);
  });

  test("PASSES IN BOTH: toBe itself (non-empty)", () => {
    const array1 = [""];
    expect(immerTheArray(array1)).toBe(array1);
  });

  test("PASSES IN BOTH: toBe itself (empty)", () => {
    const array1: string[] = [];
    expect(immerTheArray(array1)).toBe(array1);
  });
};
