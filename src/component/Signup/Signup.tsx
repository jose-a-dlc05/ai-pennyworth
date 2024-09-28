import { useEffect, useState } from 'react';
import './Signup.css';
import { Button, Card, Flex, Typography, Form, Input } from 'antd';

const cardStyle: React.CSSProperties = {
	width: '100%',
};

const inputStyle: React.CSSProperties = {
	width: '100%',
};

const Signup = () => {
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
							<Typography.Title level={3}>Create your account</Typography.Title>
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
								Create Account
							</Button>
						</Form>
						<p className='sign-in-tag'>
							Already have an account? <a href='#'>Sign in</a>
						</p>
					</Flex>
					<img
						className='sign-up-img'
						src='sign-up.jpg'
						alt='woman looking up'
					/>
				</Flex>
			</Card>
		</>
	);
};

export default Signup;
