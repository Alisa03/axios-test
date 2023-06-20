import { Routes, Route } from "react-router-dom";

import { USERLIST_ROUTE, USER_ROUTE } from "./utils/consts";

import User from "./pages/User";
import UserList from './pages/UserList';

export default function AppRouter() {
    return (
        <Routes>
            <Route path={USERLIST_ROUTE} element={<UserList />} />
            <Route path={`${USER_ROUTE}/:id`} element={<User />} />
        </Routes>
    )
}

