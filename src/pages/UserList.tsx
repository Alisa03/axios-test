import { USER_ROUTE } from '../utils/consts';

import { List, Item, UserLink } from '../assets/styled/components';

export default function UserList({ userList }: any) {
    return (
        <div>
            <List>
                {userList.map((user: any) =>
                    <Item key={user.id}>
                        <UserLink to={`${USER_ROUTE}/${user.username}`}>
                            {user.username} - {user.name}
                        </UserLink>
                    </Item>
                )}
            </List>
        </div>
    )
}