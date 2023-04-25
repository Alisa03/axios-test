import { Routes, Route } from "react-router-dom";

import { USERLIST_ROUTE, USER_ROUTE } from "./utils/consts";

import User from "./pages/User";
import UserList from './pages/UserList';

export default function AppRouter({ userList, postList }: any) {
    return (
        <Routes>
            <Route path={USERLIST_ROUTE} element={<UserList userList={userList} />} />
            {
                userList.map((pages: any) =>
                    <Route key={pages.id}
                        path={`${USER_ROUTE}${pages.username}`}
                        element={
                            <User user={pages}
                                postList={
                                    postList.filter((item: any) =>
                                        item.userId === pages.id)
                                }
                            />
                        }
                    />
                )
            }
        </Routes>
    )
}

