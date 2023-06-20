import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import { List, Content, Title, Item } from "../assets/styled/components"

export default function User() {
    const { id } = useParams()
    const [user, setUser] = useState<any>()
    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        try {
            axios.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => setUser(res.data))
        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        try {
            axios.get<any>(`https://jsonplaceholder.typicode.com/posts`)
                .then(res =>
                    setPosts(res.data.filter((i: any) => i.userId == id))
                )
        } catch (e) {
            console.log(e)
        }
    }, [])

    return (
        <>
            {
                user && <List>
                    <Content>

                        <Title>{user.name}:</Title>

                        <Item>email: {user.email}</Item>
                        <Item>website: {user.website}</Item>
                        <Item>telephone: {user.phone}</Item>
                        <Item>company: {user.company.name}</Item>

                    </Content>
                    {
                        posts &&
                        <Content>
                            <Title>Posts:</Title>

                            {
                                posts.map((item: any) =>
                                    <Item key={item.id}>{item.title}</Item>
                                )
                            }

                        </Content>
                    }
                </List>
            }
        </>
    )
}