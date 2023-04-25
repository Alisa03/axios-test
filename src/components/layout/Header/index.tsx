import { Link } from 'react-router-dom'

import logo from '../../../assets/img/Logo.svg'

import { Button, Container, UserLink } from '../../../assets/styled/components'
import { HeaderList, Logo, Nav } from './headerStyles'

export default function Header({ onClick, theme }: any) {

    return (
        <Container>
            <HeaderList>
                <Link to='/'>
                    <Logo>
                        <img src={logo} alt="star" />
                        <h1>STAR</h1>
                    </Logo>
                </Link>
                <Nav>
                    <Button>
                        <UserLink to="/">
                            List User's
                        </UserLink>
                    </Button>
                    <Button onClick={onClick}>
                        Switch to {theme === "light" ? '🌕' : '☀️'} mode
                    </Button>
                </Nav>
            </HeaderList>
        </Container>
    )
}