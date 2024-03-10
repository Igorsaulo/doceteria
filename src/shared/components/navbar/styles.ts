import { css } from 'styled-components';

const NavbarStyles = {
    root: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f0f0f0;
    `,
    logo: css`
        font-size: 1.5rem;
        font-weight: 600;
    `,
    links: css`
        display: flex;
        gap: 1rem;
    `,
    link: css`
        color: #000;
        text-decoration: none;
        font-weight: 500;
    `,
    };

export { NavbarStyles }