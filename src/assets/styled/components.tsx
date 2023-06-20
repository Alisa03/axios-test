import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { base } from "./theme";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    @media ${base.media.tablet} {
        width: 100%
    }
`

export const AppContainer = styled.div`
    background: ${(props) => props.theme.color.fonColors};
    
    height: 100%;
    padding-bottom: 25px;

    color: ${(props) => props.theme.color.textColors};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-sizing: 15px;

`

export const List = styled.div`
    background: ${(props) => props.theme.color.blockColors};
    border-radius: ${base.radius.px13};

    padding: 5px 20px;
    margin: 15px auto;
    width: 45%;

    @media ${base.media.tablet} {
        width: 90%
    }
`

export const Content = styled.div`
    margin: 17px 0
`

export const Button = styled.button`
    background: ${(props) => props.theme.color.blockColors2};
    border-radius: ${base.radius.px13};

    padding: 10px;

    color: ${(props) => props.theme.color.textColors};
    font: 400 1rem/1 ${base.font.textFonts};
`

export const Title = styled.h5`
    margin: 10px 0;

    font: 500 1.5rem/1 ${base.font.titleFonts};
    color: ${(props) => props.theme.color.textColors};
`

export const Item = styled.div`
    background: ${(props) => props.theme.color.blockColors2};
    border-radius: ${base.radius.px10};
    
    margin: 17px auto;
    padding: 10px 5px;
    width: 100%;

    color: ${(props) => props.theme.color.textColors};    
    font: 400 1rem/1 ${base.font.textFonts};
    `

export const UserLink = styled(Link)`
    display: block;

    width: 100%;

    color: ${(props) => props.theme.color.textColors};
    font: 400 1rem/1 ${base.font.textFonts};
`