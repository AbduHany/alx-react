import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  if (object === undefined || array === undefined) return undefined;
  const immutableObject = fromJS(object);
  let value = immutableObject;
  for (const path of array) {
    if (value === undefined) return undefined;
    value = value.get(path);
  }
  return (value);
}
