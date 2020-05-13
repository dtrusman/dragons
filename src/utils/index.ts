import { format, parseISO } from 'date-fns';

export const sort = (array: DragonItem[]) => {
  array.sort(function (a: DragonItem, b: DragonItem) {
    if (a.name < b.name) {
      return -1;
    }
    if (b.name < a.name) {
      return 1;
    }
    return 0;
  });
  return array;
};

export const dateFormat = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy HH:mm:ss');
};
