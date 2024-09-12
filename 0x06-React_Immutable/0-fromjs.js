const { fromJS } = require('./node_modules/immutable/dist/immutable');

export default function getImmutableObject(object) {
  return fromJS(object);
}
