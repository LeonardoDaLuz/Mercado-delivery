import styled from 'styled-components';
import { colorTheme } from '../../../../theme';


export const Flex = styled.div`
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

    &>img.selected,  &>img:hover {
        border: 2px solid ${colorTheme.primary(400)};
        cursor: pointer;
    }
    
`;

