import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./uiActionTypes";
import {
    login,
    logout,
    hideNotificationDrawer,
    displayNotificationDrawer,
    loginRequest
} from "./uiActionCreators";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";


const thunk = require('redux-thunk').thunk;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators test', () => {
    it('login function returns correct action', () => {
        const expectedAction = {
            type: LOGIN,
            user: {
                email: "abdu.hany@gmail.com",
                password: "STRONG_PASS"
            }
        };
        const action = login("abdu.hany@gmail.com", "STRONG_PASS");
        expect(action).toEqual(expectedAction);
    });

    it('logout function returns correct action', () => {
        const expectedAction = {
            type: LOGOUT,
        };
        const action = logout();
        expect(action).toEqual(expectedAction);
    });

    it('displayNotificationDrawer function returns correct action', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER,
        };
        const action = displayNotificationDrawer();
        expect(action).toEqual(expectedAction);
    });

    it('hideNotificationDrawer function returns correct action', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER,
        };
        const action = hideNotificationDrawer();
        expect(action).toEqual(expectedAction);
    });
});



describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates LOGIN_SUCCESS when login is successful', () => {
        const store = mockStore({});
        const email = "abdu.hany@gmail.com";
        const password = "STRONG_PASS";
        const expectedActions = [
            { type: LOGIN },
            { type: LOGIN_SUCCESS }
        ];
        fetchMock.getOnce('/login-success.json', {
            body: { success: true }, // Mock response body
            headers: { 'content-type': 'application/json' }
        });
        return store.dispatch(loginRequest(email, password)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    })
});