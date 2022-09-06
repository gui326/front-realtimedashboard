import { Title } from './style';

type Props = {
	children?: React.ReactNode
}

export default function PageTitle({children} : Props){
	return(
		<>
			<Title>
				{children}
			</Title>
		</>
	);
}