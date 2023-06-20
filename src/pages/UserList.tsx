import { useEffect, useState } from 'react';
import axios from 'axios';

import { USER_ROUTE } from '../utils/consts';

import { List, Item, UserLink } from '../assets/styled/components';

export default function UserList() {
    const [userList, setUserList] = useState<any>([])

    useEffect(() => {
        try {
            axios.get<any[]>(`https://jsonplaceholder.typicode.com/users`)
                .then(res => setUserList(res.data))
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <div>
            <List>
                {userList.map((user: any) =>
                    <Item key={user.id}>
                        <UserLink to={`${USER_ROUTE}/${user.id}`}>
                            {user.username} - {user.name}
                        </UserLink>
                    </Item>
                )}
            </List>
        </div>
    )
}