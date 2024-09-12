import { Map } from './node_modules/immutable/dist/immutable';

export default function getImmutableObject(object) {
  let newMap = Map();
  for (const [key, value] of Object.entries(object)) {
    newMap = newMap.set(key, value);
  }
  return newMap;
}
