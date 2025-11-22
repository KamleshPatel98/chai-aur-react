export default function AuthUser() {

    const getToken = () => {
        return localStorage.getItem("token");
    };

    const getUser = () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    };


    return { getToken, getUser };
}
