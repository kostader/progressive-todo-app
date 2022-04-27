import { iteratorSymbol } from "immer/dist/internal";

type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(
  items: TItem[],
  id: string
) => {
  return items.findIndex((item: TItem) => item.id === id);
};
