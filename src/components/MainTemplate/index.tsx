import Header from './Header';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { AreaContent, AreaMenu, Main } from './styled';
import SideMenu from './SideMenu';

export default function MainTemplate(){
	return(
		<>
			<GlobalStyle />

			<Header />

			<Main>
				<AreaMenu>
					<SideMenu />
				</AreaMenu>

				<AreaContent>
					<Outlet />	
				</AreaContent>
			</Main>

		</>
	);
}