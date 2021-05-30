import styled from 'styled-components';
import { colorTheme } from '../../../theme';

export const PhotoFrame_ = styled.div`

    background-color: rgb(255, 255, 255);
    flex-shrink: 1;
    flex-grow: 1;
    width: 226px;
    flex-basis: 626px;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 20px;
    display: flex;
`;

export const ImageViewer = styled.div`

    flex: 1 3 100px;
    img {
        width: 100%;
    }
   
`;
export const ImageSelector = styled.div`
    width: 100px;
    margin-top: 5px;
    margin-left: 5px;
   &>img {

    box-sizing: border-box;
        width: calc(100% - 10px);
        border: 1px solid ${colorTheme.neutral(250)};
        margin: 5px;
        border-radius: 5px;
    }

    &>img.active,  &>img:hover {
        border: 2px solid ${colorTheme.primary(400)};
    }
    
`;
