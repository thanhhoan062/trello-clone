import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const [usernameErrText, setUsernameErrText] = useState('')
    const [passwordErrText, setPasswordErrText] = useState('')

    const handleSubmit = () => {

    }

    return (
        <>
            <Box
                component='form'
                sx={{ mt: 1 }}
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='username'
                    label='Username'
                    name='username'
                    disabled={loading}
                    error={usernameErrText !== ''}
                    helperText={usernameErrText}
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    disabled={loading}
                    error={passwordErrText !== ''}
                    helperText={passwordErrText}
                />
                <LoadingButton
                    sx={{ mt: 3, mb: 2 }}
                    variant='outlined'
                    fullWidth
                    color='success'
                    type='submit'
                    loading={loading}
                >
                    Login
                </LoadingButton>
                Don't have an account?
                <Button
                    component={Link}
                    to='/signup'
                    sx={{ textTransform: 'none', marginBottom: '1px' }}
                >
                    Signup
                </Button>
            </Box>
        </>
    )
}

export default Login