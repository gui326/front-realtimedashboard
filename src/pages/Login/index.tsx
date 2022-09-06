import { CircularProgress, Grow, InputProps } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { Area, Description, LoginArea, Title } from './styled';

type FormData = {
	email: string,
	password: string
};

export default function Login(){
	const { handleSubmit, reset, control, formState: { errors } } = useForm<FormData>();

	const [loading, setLoading] = useState<boolean>(false);

	const handleLogin = (data: FormData) => {
		console.log('handle Login', data);

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	if(loading){
		return(
			<>
				<Area>
					<LoginArea style={{ alignItems: 'center' }}>
						<CircularProgress sx={{ my: 2, color: '#000000' }} />

						<p>Aguarde, carregando...</p>
					</LoginArea>
				</Area>
			</>
		);
	}

	return(
		<>
			<Area>
				<Grow
					in={true}
					{...({ timeout: 500 })}
				>
					<LoginArea>
						<Title>
							Acesse o sistema 
						</Title>

						<Description>
							Digite seus dados para fazer login
						</Description>

						<form onSubmit={handleSubmit(handleLogin)}>
							<Label htmlFor="email">
								E-mail
							</Label>
							<Controller
								name="email"
								control={control}
								rules={{ required: true }}
								defaultValue=""
								render={({ field: { onChange, value, ref }  }) => 
									<Input 
										value={value}
										onChange={onChange}
										inputRef={ref}
										id="email"
										autoFocus
										sx={{ mb: 2 }}
										error={!!errors.email}
										type="email"
										placeholder="Digite e-mail"
									/>
								}
							/>


							<Label htmlFor="password">
								Senha
							</Label>
							<Controller
								name="password"
								control={control}
								rules={{ required: true }}
								defaultValue=""
								render={({ field: { onChange, value, ref, onBlur } }) => (
									<Input 
										value={value}
										onChange={onChange}
										onBlur={onBlur}
										inputRef={ref}
										id="password"
										sx={{ mb: 2 }}
										error={!!errors.password}
										type="password"
										placeholder="Digite senha"
									/>
								)}
							/>

							<Button
								type='submit'
								sx={{ mt: 1, mb: 1 }}
							>
								Entrar
							</Button>

							<Link to="/cadastro">
								<Button
									fullWidth
									type='button'
									sx={{ 
										backgroundColor: 'transparent!important',
										color: '#000000!important',
										border: '2px solid #000000!important'
									}}
								>
									Cadastre-se
								</Button>
							</Link>
						</form>
					</LoginArea>
				</Grow>
			</Area>
		</>
	);
}