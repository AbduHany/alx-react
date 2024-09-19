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
    loginRequest,
    loginSuccess,
    loginFailure
} from "./uiActionCreators";
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


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

describe('async function tests', () => {
    it('loginRequest function dispatches LOGIN and LOGIN_SUCCESS actions on success', () => {
        const store = mockStore();
        fetchMock.getOnce('/login-success.json', {
            body: {
                success: true,
                user: {
                    email: "abdu.hany@gmail.com",
                    password: "STRONG_PASS"
                }
            },
            headers: { 'Content-Type': 'application/json' }
        });
        return store.dispatch(loginRequest("abdu.hany@gmail.com", "STRONG_PASS"))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toBe(LOGIN);
                expect(actions[1].type).toBe(LOGIN_SUCCESS);
            });
    });

    it('loginRequest function dispatches LOGIN and LOGIN_FAILURE actions on failure', () => {
        const store = mockStore({});
        fetchMock.getOnce('/login-success.json', {
            status: 404,
            body: {
                error: 'Not found'
            }
        });
        return store.dispatch(loginRequest("abdu.hany@gmail.com", "STRONG_PASS"))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toBe(LOGIN);
                expect(actions[1].type).toBe(LOGIN_FAILURE);
            });
    });
});