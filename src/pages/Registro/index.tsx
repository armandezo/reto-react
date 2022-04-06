import { AnimatedPage } from "animations/AnimatedPage";
import React, { useRef } from "react";
import AuthService from "services/auth.service";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.scss";
export interface IRegistroPageProps { }

const RegistroPage: React.FunctionComponent<IRegistroPageProps> = (props) => {
	const navigate = useNavigate();
	const form = useRef(null);
	const currentUser = AuthService.getCurrentUser();
	if (currentUser) return <Navigate replace to='/' />;

	const handleSubmit = (event: any) => {
		event.preventDefault();

		const formData = new FormData(form.current!);

		const data = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		AuthService.register(data).then(
			() => {
				toast("Registro correcto Inicia session", { type: "success" });
				navigate("/login");
			},
			(error) => {
				toast(error.response.data.error, { type: "error" });
			}
		);
	};
	return (
		<>
			<AnimatedPage>
				<div className='Login'>
					<div className='Login-container'>
						<h2>Registro</h2>
						{/* se puede extraer formulario */}
						<form action='/' className='form' ref={form}>
							<label htmlFor='email' className='label'>
								Email
							</label>
							<input type='text' name='email' placeholder='usuario@ejemplo.com' className='input input-email' />
							<label htmlFor='password' className='label'>
								Password
							</label>
							<input type='password' name='password' placeholder='*********' className='input input-password' />
							<button
								type='submit'
								className='primary-button login-button'
								onClick={handleSubmit}
							>
								Registro
							</button>
						</form>
						<button
							className='secondary-button signup-button'
							onClick={() => navigate('/login')}
						>
							Iniciar Session
						</button>
					</div>
				</div>
			</AnimatedPage>
		</>
	);
};

export default RegistroPage;
