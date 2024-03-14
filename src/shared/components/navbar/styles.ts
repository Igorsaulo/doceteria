import { css } from 'styled-components';

const NavbarStyles = {
    root: css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        background-color: transparent;
        position: fixed;
        width: 100%;
        gap: 10rem;
        z-index: 100;
        top: 20;
        left: 50%;
        transform: translateX(-50%);
    `,
    logo: css`
        font-size: 1.5rem;
        font-weight: 600;
        background-color: #E71F4D;
        width: 3rem;
        height: 3rem;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20%;
    `,
    links: css`
        display: flex;
        gap: 5rem;
    `,
    link: css`
        color: #000;
        text-decoration: none;
        font-weight: 500;
        color: #fff;
    `,
    logoContainer: css`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    `,
    };

export { NavbarStyles }