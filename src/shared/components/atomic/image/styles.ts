import {css  } from 'styled-components';
import BoloImg from '../../../../assets/boloimg.png';

export const BackgroundImageStyles = css`
    position: absolute;
    height: 110vh;
    z-index: 90;
    width: 63%;
    background-image: url(${BoloImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    left: 493px;
    top: 4px;
`;