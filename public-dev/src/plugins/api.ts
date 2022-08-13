import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "XSRF-TOKEN";

const { APP_URL } = import.meta.env;

/**
 * LOGIN
 */

export const apiLogin = (email: string, password: string) =>
    axios.post(
        `${APP_URL}/api/login`,
        {
            email: email,
            password: password,
        },
        {
            headers: {
                Accept: "application/json",
            },
        }
    );
export const apiLogout = () => axios.get(`${APP_URL}/api/logout`, {
    headers: {
        Accept: "application/json",
    },
});
export const apiCsrfCookie = () =>
    axios.get(`${APP_URL}/sanctum/csrf-cookie`, {
        headers: {
            Accept: "application/json",
        },
    });
export const apiUser = () => axios.get(`${APP_URL}/api/user`);

