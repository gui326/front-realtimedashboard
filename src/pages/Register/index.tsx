import { CircularProgress, IconButton, Grow, Tooltip } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { Area, Description, LoginArea, Title } from './styled';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

type FormData = {
	name: string,
	email: string,
	password: string
};

export default function Register(){
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
						<div style={{ marginLeft: -10 }}>
							<Link to="/login">
								<Tooltip title="Voltar">
									<IconButton>
										<KeyboardBackspaceIcon sx={{ fontSize: 30 }} />
									</IconButton>
								</Tooltip>			
							</Link>
						</div>
					
						<Title>
							Cadastro
						</Title>

						<Description>
							Digite os seus dados para realizar o cadastro.
						</Description>

						<form onSubmit={handleSubmit(handleLogin)}>
							<Label htmlFor="name">
								Nome
							</Label>
							<Controller
								name="name"
								control={control}
								rules={{ required: true }}
								defaultValue=""
								render={({ field: { onChange, value, ref }  }) => 
									<Input 
										value={value}
										onChange={onChange}
										inputRef={ref}
										id="name"
										autoFocus
										sx={{ mb: 2 }}
										error={!!errors.name}
										type="text"
										placeholder="Digite nome"
									/>
								}
							/>

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
								Cadastrar
							</Button>
						</form>
					</LoginArea>
				</Grow>
			</Area>
		</>
	);
}