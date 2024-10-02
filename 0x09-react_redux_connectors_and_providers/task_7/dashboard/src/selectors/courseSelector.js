import { Map } from 'immutable';


const getCourses = state => {
    const courses = Map(state.getIn([
        'courses',
        'entities',
        'courses'
    ]));
    return courses.valueSeq().toArray();
}

export {
    getCourses
};