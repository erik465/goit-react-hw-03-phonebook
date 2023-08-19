import styled from 'styled-components'

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;

    li{
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    }

    li button{
        height: 20px;
    }
`