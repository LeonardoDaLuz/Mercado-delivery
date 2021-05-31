import styled from 'styled-components';

export const SlickLightBoxContainer = styled.div`

    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    z-index: 300;

    img {

            max-height: 90vh;

    }
`;

export const Center = styled.div`
    position: relative;
    height: 100%;
    text-align: center;
    line-height: 100vh;
    vertical-align: middle;
`;

export const BlackBackground = styled.div`
    background-color: rgba(0,0,0,0.8);
    z-index: -1;

    width: 100%;
    height: 100%;
    position: absolute;
`;