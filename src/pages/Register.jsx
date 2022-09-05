import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledRegister = styled('section')`
  min-height: 100vh;
  display: grid;
  place-items: center;
  width: 100%;

  .register-form {
    background: #f5f7f7;
    width: min(100% - 2rem, 450px);
    margin-inline: auto;
    height: 600px;
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

      .btn-register {
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

        .loginLink {
          font-weight: 600;
          color: green;
        }
      }
    }
  }
`

const Register = function Register() {
  return (
    <StyledRegister>
      <form className='register-form'>
        <div className='register-formHeader'>
          <h1 className='text-company'>JOOBS</h1>

          <p className='text text-helper'>Hai Good Fellow. First, Create an Account.</p>
        </div>

        <div className='register-formBody'>
          <input type='text' className='register-formBodyInput' placeholder='name' />
          <input type='text' className='register-formBodyInput' placeholder='email' />
          <input type='password' className='register-formBodyInput' placeholder='password' />
          <input type='text' className='register-formBodyInput' placeholder='image url' />

          <button type='submit' className='btn btn-register'>
            Submit
          </button>

          <p className='text text-register'>
            Already have an account ?{' '}
            <span className='loginLink'>
              <Link to='/login'>Sign in</Link>
            </span>
          </p>
        </div>
      </form>
    </StyledRegister>
  )
}

export default Register
