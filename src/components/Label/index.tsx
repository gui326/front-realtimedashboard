type Props = {
	children: React.ReactNode,
	htmlFor: string
}

export default function Label({children, htmlFor} : Props){
	return(
		<>
			<label
				htmlFor={htmlFor}
				style={{
					fontSize: 14,
					color: '#b5b5b5',
					fontWeight: '500',
					paddingBottom: 2
				}}
			>
				{children}
			</label>
		</>
	);
}