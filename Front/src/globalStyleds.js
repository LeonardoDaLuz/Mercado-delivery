import styled from 'styled-components';

export const CenterContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width:1000px;
`;
export const Row = styled.div`
    display: flex;
    justify-content: ${props => (props.justify === undefined ? 'flex-start' : props.justify)};
   
`;

export const Col = styled.div`
    flex-grow: 1;
`;

export const Col3 = styled.div`
    flex: 0 0 25%;
    max-width: 25%;
`;


export const ButtonFlat = styled.button`

    color: ${({Color='white'})=>Color};
    background-color: ${({bgColor='#32b112'})=>bgColor};
    border: 1px solid ${({bgColor='#32b112'})=>bgColor};
    border-radius: 0.25rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 0.375rem 0.75rem;
    margin: 3px 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:active {
        color: rgb(255, 255, 255);
        background-color: rgb(56, 194, 87);
        border-color: rgb(63, 223, 99);
    }

    &:disabled {
        opacity: 0.5!important;
    }
`;

export const ButtonOutline = styled.button`
    background-color: transparent;
    color: rgb(63, 223, 99);
    cursor: pointer;
    border-radius: 0.25rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border: 1px solid rgb(63, 223, 99);
    padding: 0.375rem 0.75rem;
    margin: 3px 3px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
        color: #212529;
        text-decoration: none;
        color: rgb(255, 255, 255);
        text-decoration-color: initial;
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:active {
        color: rgb(255, 255, 255);
        background-color: rgb(56, 194, 87);
        border-color: rgb(63, 223, 99);
    }
`;

export const HorizontalFlexList = styled.ul`
    display: flex;
    align-items: center;
    margin: 0px;
    list-style-type: none;
    padding: 0px 10px;

    li {
        flex-grow: 1;
        margin: 3px 10px; 
        list-style-type: none;
    }
`;

export const HorizontalFlexList_Lg = styled(HorizontalFlexList)`

    @media screen and (max-width: 992px) {       
        li {
            display: none;
        }
    }
`;

export const Input = styled.input.attrs({
    type: "text"
})`

`;
