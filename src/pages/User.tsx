import { List, Content, Title, Item } from "../assets/styled/components"

export default function User({ user, postList }: any) {

    return (
        <List>
            <Content>
                <Title>{user.name}:</Title>
                <Item>email: {user.email}
                </Item>
                <Item>
                    website: {user.website}
                </Item>
                <Item>
                    telephone: {user.phone}
                </Item>
                <Item>
                    company: {user.company.name}
                </Item>
            </Content>
            <Content>
                <Title>Posts:</Title>
                {
                    postList.map((item: any) =>
                        <Item key={item.id}>{item.title}</Item>
                    )
                }
            </Content>
        </List>
    )
}