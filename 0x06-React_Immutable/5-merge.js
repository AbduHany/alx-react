import { Map, List } from 'immutable';

export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  return list1.concat(list2);
}

export function mergeElements(page1, page2) {
  const obj1 = Map(page1);
  const obj2 = Map(page2);
  const mergedMap = obj2.merge(obj1);
  return List(mergedMap.values());
}
