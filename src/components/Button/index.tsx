import { SxProps } from '@mui/material';
import { ButtonCustom } from './styled';


type Props = {
    children: React.ReactNode,
	sx?: SxProps,
	type?: 'button' | 'reset' | 'submit' | undefined,
	fullWidth?: boolean
}

export default function Button({children, sx, type, fullWidth} : Props){
	return(
		<>
			<ButtonCustom
				sx={sx}
				type={type}
				fullWidth={fullWidth}
			>
				{children}
			</ButtonCustom>
		</>
	);
}