import { ListItemText } from '@mui/material';
import styled from 'styled-components';

export const Menu = styled.aside` 
    background-color: #1F1F23;
    height: 100%;
    position: fixed;
    width: 17%;
`;

export const ListItemTextCustom = styled(ListItemText)` 
    span{
       font-size: 14px;
       line-height: 14px;
    }

`;