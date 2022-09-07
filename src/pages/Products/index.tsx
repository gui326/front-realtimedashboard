import { Grid } from '@mui/material';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Label from '../../components/Label';
import PageTitle from '../../components/PageTitle';
import { Description } from './styled';

export default function Products(){
	return(
		<>
			<PageTitle>
				Venda produto
			</PageTitle>

			<Description>
				Preencha os dados para realizar uma venda
			</Description>

			<Grid container spacing={2}>
				<Grid item md={4}>
					<Label htmlFor='product'>Produto</Label>
					<Input id="product" fullWidth placeholder="Digite o produto"/>
				</Grid>
			</Grid>

			<Grid mt={0} container spacing={2}>
				<Grid item md={4}>
					<Label htmlFor='amount'>Quantidade</Label>
					<Input id="amount" fullWidth placeholder="Digite a quantidade"/>
				</Grid>
				<Grid item md={4}>
					<Label htmlFor='paymentMethod'>Forma de pagamento</Label>
					<Input id="paymentMethod" fullWidth placeholder="Digite a forma de pagamento"/>
				</Grid>
			</Grid>

			<Description style={{ marginTop: 10 }}>
				Cliente
			</Description>

			<Grid container spacing={2}>
				<Grid item md={4}>
					<Label htmlFor='name'>Nome</Label>
					<Input id="name" fullWidth placeholder="Digite o nome"/>
				</Grid>
				<Grid item md={4}>
					<Label htmlFor='birthday'>Data de nascimento</Label>
					<Input id="birthday" fullWidth type="date"/>
				</Grid>
			</Grid>

			<Grid mt={0} container spacing={2}>
				<Grid item md={4}>
					<Label htmlFor='state'>Estado</Label>
					<Input id="state" fullWidth placeholder="Digite o estado"/>
				</Grid>
			</Grid>
			
			<Grid mt={2} container spacing={2}>
				<Grid item md={4}>
					<Button
						fullWidth
					>
						Criar venda
					</Button>
				</Grid>
			</Grid>
		</>
	);
}