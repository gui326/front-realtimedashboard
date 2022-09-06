import styled from 'styled-components';

export const Area = styled.div` 
    margin: 0;
    height: 70px;
`;

export const Nav = styled.nav` 
    background-color: #18181B;
    width: 100%;
    height: 70px;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
`;

export const Logo = styled.div` 
    h1{
        color: #FFFFFF;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }
`;

export const Menu = styled.div`
    p{
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
    } 
`;