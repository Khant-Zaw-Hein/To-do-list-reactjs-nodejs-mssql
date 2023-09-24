import React, { useState } from 'react';
import { TextField, Button, Container, Stack, Box } from '@mui/material';
import { Link } from "react-router-dom";


const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password)
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ minWidth: '30%', maxWidth: '80%', height: '50%' }}>
                    <h2>Register Form</h2>
                    <form onSubmit={handleSubmit} action={<Link to="/login" />} >
                        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='primary'
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='primary'
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                fullWidth
                                required
                            />
                        </Stack>
                        <TextField
                            type="email"
                            variant='outlined'
                            color='primary'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="password"
                            variant='outlined'
                            color='primary'
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            required
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        {/* <TextField
                    type="date"
                    variant='outlined'
                    color='primary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                /> */}
                        <Button variant="outlined" color="primary" type="submit">Register</Button>
                    </form>
                    <small>Already have an account? <Link to="/login">Login Here</Link></small>
                </Box>
            </Box>


        </React.Fragment>
    )
}

export default RegisterForm;