import './Login.css';

const Login = () => {
	return (
		<>
			<div className='login-form'>
				<h2>Log in to your account</h2>
				<div className='email-container'>
					<label htmlFor='email'>Email</label>
					<input type='email' name='' id='' placeholder='john@example.com' />
				</div>
				<div className='password-container'>
					<label htmlFor='password'>Password</label>
					<input type='password' />
				</div>
				<button type='submit' className='submit-btn'>
					Submit
				</button>
				<p className='sign-up-tag'>
					Don't have an account? <a href='#'>Sign up</a>
				</p>
			</div>
		</>
	);
};

export default Login;
