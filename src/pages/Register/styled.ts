import styled from 'styled-components';

export const Area = styled.main` 
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const LoginArea = styled.div` 
    display: flex;
    flex-direction: column;
    min-width: 350px;
    max-width: 350px;
    padding: 2em 1.5em;
    border-radius: 12px;
    

    form{
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.h1` 
    font-weight: 700;
    font-size: 26px;
    line-height: 1.5em;
    color: #000000;
    margin: 0;
    padding-bottom: .5rem;
`;

export const Description = styled.p` 
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5em;
    color: #636363;
    margin: 0;
    padding-bottom: 1rem;
`;