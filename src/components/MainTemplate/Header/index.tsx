import { Area, Logo, Menu, Nav } from './styled';


export default function Header(){
	return(
		<>
			<Area>
				<Nav>
					<Logo>
						<h1>RealTimeDashboard</h1>
					</Logo>

					<Menu>
						<p>Guilherme B.</p>
					</Menu>
				</Nav>
			</Area>  
		</>
	);
}