import { ListItemText, MenuItem } from '@mui/material';
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

interface Props {
    active?: boolean;
}

export const MenuItemCustom = styled(MenuItem)<Props>` 
    transition: all .5s ease-out;
    border-left: 4px solid transparent!important;
    ${props => props.active && 'border-left: 4px solid #FFFFFF!important'};
`;