import './Form.css';
import Login from '../component/Login/Login';
const Form = () => {
	return (
		<>
			<form className='form'>
				<Login />
			</form>
			<div className='form-img'>
				<img src='sign-in.jpg' alt='teenager with VR headset' />
			</div>
		</>
	);
};

export default Form;
