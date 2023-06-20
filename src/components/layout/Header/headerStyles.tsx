import styled from "styled-components";

import { base } from "../../../assets/styled/theme";
import { List } from "../../../assets/styled/components";

export const Headers = styled.header`
    margin: 0 auto;
    padding: 10px 0;
    width: 80%;
    
    @media ${base.media.tablet} {
        width 90%;
    }
`

export const HeaderList = styled(List)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
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