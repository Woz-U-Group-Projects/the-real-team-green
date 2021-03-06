import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import { loginUser } from '../service/magic.js'

const Auth = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        if(!email) {
            setLoading(false);
            setError('Invalid Email')
            return;
        }
        try {
            await loginUser(email, setEmail);
            setLoading(false);history.replace('/')
        } catch (error) {
            setError('Log In failed');
            console.error(error)
        }
    };
    const handleChange = (event) => {
        setEmail(event.target.value);
    };
    return (
        <div className='w-50 p-5 mt-5 mx-auto'>
            <h1 className='h1 text-center'>Login Form</h1>
            <p className='text-danger text=small'>{error}</p>
            <Form onSubmit={handleSubmit} className="p-2 my-5 mx-auto">
                <FormGroup className='mt-3' controlId='formBasicEmail'>
                    <FormLabel fontSize='sm'>Enter Email Address</FormLabel>
                    <FormControl type='email' name='email' id='email' value={email} onChange={handleChange} placeholder="Email Address" />
                </FormGroup>
                <Button type='submit' size='md' className='d-block w-100' variant='primary'>
                    {loading ? 'Loading...' : "Send"}
                </Button>
            </Form>
        </div>
    )
}



export default Auth