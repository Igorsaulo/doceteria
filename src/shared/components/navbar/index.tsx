import { Flex } from 'antd';
import { NavbarStyles } from './styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoSvg from '../../../assets/cake-slice 1.svg';



export function Navbar() {
    const StyledLink = styled(Link)`
        ${NavbarStyles.link}
    `;

    const StyledLogo = styled(Link)`
        ${NavbarStyles.logo}
    `;

    const StyledRoot = styled(Flex)`
        ${NavbarStyles.root}
    `;

    const StyledLinks = styled(Flex)`
        ${NavbarStyles.links}
    `;

    const StyledLogoContainer = styled(Flex)`
        ${NavbarStyles.logoContainer}
    `;

    return (
        <StyledRoot>
            <StyledLogoContainer>
                <StyledLogo to='/'>
                    <img src={LogoSvg} alt='logo' />
                </StyledLogo>
                <StyledLink to='#'>Home</StyledLink>
            </StyledLogoContainer>
            <StyledLinks>
                <StyledLink to='#'>Home</StyledLink>
                <StyledLink to='#'>About</StyledLink>
                <StyledLink to='#'>About</StyledLink>
                <StyledLink to='#'>About</StyledLink>
                <StyledLink to='#'>About</StyledLink>
                <StyledLink to='#'>About</StyledLink>
            </StyledLinks>
        </StyledRoot>
    );
}