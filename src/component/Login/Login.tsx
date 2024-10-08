import { useEffect, useState } from 'react';
import './Login.css';
import { Button, Card, Flex, Typography, Form, Input } from 'antd';

const cardStyle: React.CSSProperties = {
	width: '100%',
};

const inputStyle: React.CSSProperties = {
	width: '100%',
};

const Login = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 767);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<>
			<Card
				style={cardStyle}
				styles={{ body: { padding: 0, overflow: 'hidden' } }}
			>
				<Flex justify={'space-evenly'} align={isMobile ? 'center' : 'stretch'}>
					<Flex
						vertical
						align='center'
						justify={'center'}
						style={{ padding: 0, width: isMobile ? '100%' : '40%' }}
					>
						<Form style={{ width: '50%' }}>
							<Typography.Title level={3}>
								Log in to your account
							</Typography.Title>
							<Form.Item
								label='Email'
								name='email'
								layout='vertical'
								style={inputStyle}
							>
								<Input placeholder='john@example.com' />
							</Form.Item>
							<br />
							<Form.Item
								label='Password'
								name='password'
								layout='vertical'
								style={inputStyle}
							>
								<Input.Password placeholder='*******' />
							</Form.Item>
							<br />
							<Button type='primary' htmlType='submit' className='submit-btn'>
								Submit
							</Button>
						</Form>
						<p className='sign-up-tag'>
							Don't have an account? <a href='#'>Sign up</a>
						</p>
					</Flex>
					<img
						className='sign-in-img'
						src='sign-in.jpg'
						alt='teenager with VR headset'
					/>
				</Flex>
			</Card>
		</>
	);
};

export default Login;
