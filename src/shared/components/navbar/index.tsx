import { Col, Row, Space } from 'antd';
import { NavbarStyles } from './styles';
import styled from 'styled-components';


export function Navbar() {
    const StyledLink = styled.a`
        ${NavbarStyles.link}
    `;
    const StyledLogo = styled.a`
        ${NavbarStyles.logo}
    `;

    const StyledRoot = styled.div`
        ${NavbarStyles.root}
    `;
    const StyledLinks = styled.div`
        ${NavbarStyles.links}
    `;

    return (
        <StyledRoot>
            <StyledLogo href='#'>Logo</StyledLogo>
            <StyledLinks>
                <StyledLink href='#'>Home</StyledLink>
                <StyledLink href='#'>About</StyledLink>
            </StyledLinks>
        </StyledRoot>
    );
}