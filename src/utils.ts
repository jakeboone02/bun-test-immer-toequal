import { produce } from "immer";

export const stripIDs = (query: any) =>
  JSON.parse(JSON.stringify(query, ["rules", "field", "value", "operator"]));

export const findPath = (path: number[], query: Record<string, any>): any => {
  let target: any = query;
  let level = 0;
  while (level < path.length && target && "rules" in target) {
    const t: any = target.rules[path[level]];
    if (typeof t !== "string") {
      target = t;
    } else {
      target = null;
    }
    level++;
  }

  return target;
};

export const getParentPath = (path: number[]) => path.slice(0, path.length - 1);

export const remove = (
  o: Record<string, any>,
  path: number[],
  ...args: any[]
) =>
  produce(o, (draft) => {
    const grp = findPath(getParentPath(path), draft);
    grp.rules.splice(0, 2);
  });
