import styled from 'styled-components';

export const Header = styled.header`
    position: sticky;
    top: 0;
    background-color: white;
    padding: 10px 0px;
    z-index: 100;
`;

export const ContainerLg = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    @media (min-width: 1200px) {
        max-width: 1140px;

    }
`;