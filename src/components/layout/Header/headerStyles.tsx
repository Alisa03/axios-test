import styled from "styled-components";

import { base } from "../../../assets/styled/theme";
import { List } from "../../../assets/styled/components";

export const Headers = styled.header`
    width: 80%;
    margin: 0 auto;
    padding: 15px 0
`

export const HeaderList = styled(List)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    
    color: ${(props) => props.theme.color.baseColors};
    text-transform: uppercase;
    font-family: ${base.font.titleFonts}
`

export const Nav = styled.nav`
    display: flex;
    gap: 0 10px 
`