import { SxProps } from '@mui/material';
import { InputCustom } from './styled';
import { HTMLInputTypeAttribute } from 'react';

type Props = {
	sx?: SxProps,
	type?: HTMLInputTypeAttribute,
	placeholder?: HTMLInputTypeAttribute,
	error?: boolean,
	autoFocus?: boolean,
	id: string,
	inputRef?: React.Ref<any>,
	value?: string,
	onChange?: (event : object) => void,
	onBlur?: (event: object) => void,
	fullWidth?: boolean
}

export default function Input({
	sx, type, placeholder, error, autoFocus, id, inputRef, value, onChange, onBlur, fullWidth
}: Props){
	return(
		<>
			<InputCustom
				size="small"
				value={value}
				onChange={onChange}
				id={id}
				sx={sx}
				inputRef={inputRef}
				type={type}
				placeholder={placeholder}
				error={error}
				autoFocus={autoFocus}
				onBlur={onBlur}
				fullWidth={fullWidth}
			/>
		</>
	);
}