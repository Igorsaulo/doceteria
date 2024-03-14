import { css } from 'styled-components';

const GradiantButtonStyles = {
    root: css`
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    `,
    primary: css`
        background:linear-gradient(178deg, #e12e59 39%, #F86486 119%) !important;
        border: 1px solid #e12e59;
        color: #fff;
        &:hover {
            background: linear-gradient(90deg, #e12e59 100%, #F86486 0%) !important;
            color: #fff !important;
            border: 1px solid #e12e59 !important;
        }
        active: {
            background: linear-gradient(90deg, #e12e59 100%, #F86486 0%) !important;
            color: #fff;
        }
    `,
    secondary: css`
    background:linear-gradient(178deg, #e12e59 39%, #F86486 119%) !important;
    border: 1px solid #e12e59;
    color: #fff;
    &:hover {
        background: linear-gradient(90deg, #e12e59 100%, #F86486 0%) !important;
        color: #fff;
    }
    active: {
        background: linear-gradient(90deg, #e12e59 100%, #F86486 0%) !important;
        color: #fff;
    }
    `
};

export { GradiantButtonStyles }
