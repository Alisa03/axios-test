import styled from "styled-components";

import { Container } from "./components";

export const AppContainer = styled(Container)`
    padding: 50px 0

    color: ${(props) => props.theme.color.textColors};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-sizing: 15px;
`
