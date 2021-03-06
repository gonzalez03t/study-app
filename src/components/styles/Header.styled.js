import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${(props) => props.bg};
    padding: 40px 0;

    h1 {
        color: ${({ theme }) => theme.colors.header};
    }

    &:hover {
        background-color: black;
    }
`