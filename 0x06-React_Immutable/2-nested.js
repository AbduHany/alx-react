import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    const immutableObject = fromJS(object);
    let value = immutableObject;
    for (let path of array) {
        value = value.get(path);
        if (value === undefined) return undefined;
    }
    return (value);
}
