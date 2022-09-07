import { ListItemIcon } from '@mui/material';
import { ListItemTextCustom, Menu, MenuItemCustom } from './styled';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link, useLocation } from 'react-router-dom';
  

export default function SideMenu(){
	const location = useLocation();
	
	return(
		<>
			<Menu>
				
				<Link to="/">
					<MenuItemCustom 
						active={location.pathname === '/'}
						sx={{ 
							pl: '1.2rem', py: 1.7, color: '#FFFFFF',
						}}
					>
						<ListItemIcon>
							<EqualizerIcon sx={{ color: '#FFFFFF' }} />
						</ListItemIcon>

						<ListItemTextCustom>Dashboard</ListItemTextCustom>
					</MenuItemCustom>
				</Link>

				<Link to="/venda-produtos">
					<MenuItemCustom 
						active={location.pathname === '/venda-produtos'}
						sx={{ pl: '1.2rem', py: 1.7, color: '#FFFFFF' }}
					>
						<ListItemIcon>
							<ShoppingBagIcon sx={{ color: '#FFFFFF' }} />
						</ListItemIcon>

						<ListItemTextCustom>Venda Produto</ListItemTextCustom>
					</MenuItemCustom>
				</Link>
				
			</Menu>
		</>
	);
}