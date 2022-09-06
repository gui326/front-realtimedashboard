import { ListItemIcon, MenuItem, MenuList } from '@mui/material';
import { ListItemTextCustom, Menu } from './styled';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';

export default function SideMenu(){
	return(
		<>
			<Menu>
				
				<Link to="/">
					<MenuItem sx={{ pl: '1.5rem', py: 1.7, color: '#FFFFFF' }}>
						<ListItemIcon>
							<EqualizerIcon sx={{ color: '#FFFFFF' }} />
						</ListItemIcon>

						<ListItemTextCustom>Dashboard</ListItemTextCustom>
					</MenuItem>
				</Link>

				<Link to="/venda-produtos">
					<MenuItem sx={{ pl: '1.5rem', py: 1.7, color: '#FFFFFF' }}>
						<ListItemIcon>
							<ShoppingBagIcon sx={{ color: '#FFFFFF' }} />
						</ListItemIcon>

						<ListItemTextCustom>Venda Produto</ListItemTextCustom>
					</MenuItem>
				</Link>
				
			</Menu>
		</>
	);
}