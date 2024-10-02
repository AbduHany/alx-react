import { coursesNormalizer } from "../schema/courses";
import { getCourses } from "./courseSelector";
import { Map } from 'immutable';


describe('testing courseSelector', () => {
    it('tests getCourses function', () => {
        const initialState = Map({
            courses: coursesNormalizer([
                {
                    "id": "1",
                    "name": "ES6",
                    "credit": 60
                },
                {
                    "id": "2",
                    "name": "Webpack",
                    "credit": 20
                },
                {
                    "id": "3",
                    "name": "React",
                    "credit": 40
                }
            ]
            )
        });
        const courses = getCourses(initialState);
        expect(courses).toEqual([
            {
                "id": "1",
                "name": "ES6",
                "credit": 60
            },
            {
                "id": "2",
                "name": "Webpack",
                "credit": 20
            },
            {
                "id": "3",
                "name": "React",
                "credit": 40
            }
        ]);
    });
});