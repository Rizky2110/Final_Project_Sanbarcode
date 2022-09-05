import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../contexts'
import { useLocalStorage } from '../hook'
import api from '../utils/service'

const StyledLogin = styled('section')`
  min-height: 100vh;
  display: grid;
  place-items: center;
  width: 100%;

  .login-form {
    background: #f5f7f7;
    width: min(100% - 2rem, 450px);
    margin-inline: auto;
    height: 500px;
    padding: 1rem 2rem;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    &Header {
      margin-block-start: 2rem;

      .text-company {
        font-size: 3rem;
        font-family: 'David Libre', serif;
        font-weight: 500;
        margin-block-end: 0;
        line-height: 1.5;
        letter-spacing: 0;
      }

      .text-helper {
        font-size: 14px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: green;
      }
    }

    &Body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      &Input {
        padding: 0.875rem 1rem;
        font-family: inherit;
        font-size: 1rem;
        border: none;
        outline: none;
        border-radius: 8px;

        &:focus {
          outline: 1px solid green;
        }
      }

      .btn-login {
        font-family: inherit;
        border: none;
        padding: 0.875rem 1rem;
        background-color: green;
        color: white;
        font-weight: 500;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 8px;
        margin-block-start: 1rem;
      }

      .text-register {
        margin-block-start: auto;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.01em;

        .registerLink {
          font-weight: 600;
          color: green;
        }
      }
    }
  }
`

const Login = function Login() {
  const navigate = useNavigate()
  const { setToken, setUser } = useAuth()
  const [, setLogedUser] = useLocalStorage('user', '')
  const [, setLogedUserToken] = useLocalStorage('access', '')

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const handleChange = (evt) => {
    setFormData((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    api
      .post('/login', { email, password })
      .then((res) => {
        setUser(res.data.user)
        setToken(res.data.token)
        setLogedUser(res.data.user)
        setLogedUserToken(res.data.token)

        navigate('/dashboard')
      })
      .catch((err) => console.log(err.response.data))
  }

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-formHeader'>
          <h1 className='text-company'>JOOBS</h1>

          <p className='text text-helper'>
            Hai Good Fellow. Please enter your crudential account below.
          </p>
        </div>

        <div className='login-formBody'>
          <input
            name='email'
            type='text'
            className='login-formBodyInput'
            placeholder='email'
            value={email}
            onChange={handleChange}
          />
          <input
            name='password'
            type='password'
            className='login-formBodyInput'
            placeholder='password'
            value={password}
            onChange={handleChange}
          />

          <button type='submit' className='btn btn-login'>
            Login
          </button>

          <p className='text text-register'>
            Do not have an account ?{' '}
            <span className='registerLink'>
              <Link to='/register'>Register</Link>
            </span>
          </p>
        </div>
      </form>
    </StyledLogin>
  )
}

export default Login
