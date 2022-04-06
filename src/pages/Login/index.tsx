import React, { useRef } from 'react';
import { AnimatedPage } from "animations/AnimatedPage"; 
import logo from "assets/images/logos/logo_yard_sale.svg"; 
import "./style.scss";
import AuthService from 'services/auth.service';
import { useNavigate , Navigate} from 'react-router-dom';
import { toast } from "react-toastify"; 
export interface ILoginPageProps { };
 

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {
	const navigate = useNavigate();
	const form = useRef(null); 
	const currentUser = AuthService.getCurrentUser(); 
	if(currentUser) return <Navigate replace to="/" />;
 

	const handleSubmit = (event: any) => {
		event.preventDefault();

		const formData = new FormData(form.current!);

		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		}  
 
		AuthService.login(data).then(
			() => {
				toast("Login correcto", { type: "success" });
				navigate('/'); 
			},
			error => { 
				toast(error.response.data.error, { type: "error" }); 
			}
		); 
	};

	return (
		<>
			<AnimatedPage>
				<div className='Login'>
					<div className='Login-container'>
						<h2>Login</h2>
						<img src={logo} width='100' height='50' alt='logo' className='logo' />
						{/* se puede extraer formulario */}
						<form action='/' className='form' ref={form}>
						 
							<label htmlFor='email' className='label'>
								Email
							</label>
							<input type='text' name='email' defaultValue={"admin@realplaza.com"} placeholder='usuario@ejemplo.com' className='input input-email' />
							<label htmlFor='password' className='label'>
								Password
							</label>
							<input type='password' name='password' defaultValue={"123456"} placeholder='*********' className='input input-password' />
							<button
								type='submit'
								className='primary-button login-button'
							    onClick={handleSubmit}
							>
								Iniciar Session
							</button> 
						</form>
						<button
							className='secondary-button signup-button'
							onClick={() => navigate('/registro')}
						>
							Registrarme
						</button>
					</div>
				</div>
			</AnimatedPage>
		</>
	);

}

export default LoginPage; 
