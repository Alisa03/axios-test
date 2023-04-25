import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { base } from "./theme";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    @media ${base.media.tablet} {
        width: 100%
    }
`

export const List = styled.div`
    background: ${(props) => props.theme.color.blockColors};
    border-radius: ${base.radius.px13};
    padding: 5px 20px;
    margin: 25px auto;
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
    color: ${(props) => props.theme.color.textColors};
    padding: 10px;
    font: 400 1rem/1 ${base.font.textFonts};

`

export const Title = styled.h5`
    font: 500 1.5rem/1 ${base.font.titleFonts};
    color: ${(props) => props.theme.color.textColors};
    margin: 10px 0
    `

export const Item = styled.div`
    margin: 17px auto;
    padding: 10px 5px;
    color: ${(props) => props.theme.color.textColors};
    background: ${(props) => props.theme.color.blockColors2};
    border-radius: ${base.radius.px10};
    width: 100 %;
    font: 400 1rem/1 ${base.font.textFonts};
    `

export const UserLink = styled(Link)`
    width: 100%;
    display: block;
    font: 400 1rem/1 ${base.font.textFonts};
    color: ${(props) => props.theme.color.textColors}
`