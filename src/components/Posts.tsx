import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Content, Item, Title } from "../assets/styled/components"

const Posts = () => {
    const [posts, setPosts] = useState<any>([])
    const { id } = useParams()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {

                setPosts(data.filter((i: any) => { i.userId != id }))

                console.log(data.filter((i: any) => { i.id !== id }));


            })
    }, [])



    return (
        <>
            {
                posts && <Content>
                    <Title>Posts:</Title>
                    {
                        posts.map((item: any) =>
                            <Item key={item.id}>{item.title}</Item>
                        )
                    }
                </Content>
            }
        </>
    )
}

export default Posts