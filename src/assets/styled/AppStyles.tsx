import styled from "styled-components";

export const AppContainer = styled.div`
    padding: 50px 0

    color: ${(props) => props.theme.color.textColors};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-sizing: 15px;

    background: ${(props) => props.theme.color.fonColors};
    height: 100vh
`
