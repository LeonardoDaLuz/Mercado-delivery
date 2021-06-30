import styled from "styled-components";
import { colorTheme } from "../../theme";

export const BarraCategorias_ = styled.div`

flex: 0 0 auto;
    @media (max-width: 992px) {
        display: none;
    }

    background-color: ${colorTheme.primary};
    color: white;
    font-weight: 700;
    

    ul {
        display: flex;
        margin: 0px;

    }

    ul>li {
      padding: 0.25rem 0.5rem;
      flex: 1 1 auto;
    }
`;