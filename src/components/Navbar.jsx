import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DotsThreeOutlineVertical, House, CirclesFour, UsersThree, SignIn } from 'phosphor-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts'

const StyledNavbar = styled('header')`
  position: sticky;
  top: 0;
  background-color: green;

  .navbar {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
    padding-block: 1rem;
  }

  .text {
    line-height: 1.5;
    letter-spacing: 0.01em;
    font-size: 2rem;

    &.text-companyName {
      font-family: 'David Libre', serif;
      font-size: 2rem;
      font-weight: 500;
      margin-block-end: 0;
      margin-inline-end: auto;
    }
  }

  .nav.open {
    display: block;
  }

  .nav {
    display: none;
    position: absolute;
    background-color: green;
    top: 0;
    left: 0;
    width: 100%;
    transform: translate(0, 80px);

    .btn-login,
    .text-userName,
    .text-link {
      font-size: 1.2rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      line-height: 1.5;
      font-family: inherit;
      text-align: left;
      color: white;
    }

    .nav-link,
    .nav-image,
    .btn-login {
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .text-link {
      margin-block-end: 0;
    }

    .icon-nav {
      display: block;
      color: white;
    }

    .nav-link {
    }

    .nav-image {
      .image {
        width: 32px;
        height: 32px;
        overflow: hidden;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .text-userName {
        margin: 0;
      }
    }

    .btn-login {
      width: 100%;
      background: transparent;
    }
  }

  .btn {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &.btn-icon {
      background: transparent;
      width: 2.5rem;
      aspect-ratio: 1 / 1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      transition: background 0.25s ease-in-out;

      &:hover {
        background: #eaeaea;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .nav.open {
      display: flex;
    }
    .nav {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2rem;
      transform: translate(0, 0);

      .icon-nav {
        display: none;
      }

      .nav-link,
      .btn-login {
        padding: 0;
      }

      .nav-image {
        margin-inline-start: auto;
      }
      .btn-login {
        width: fit-content;
        padding: 0.5rem 1rem;
        background-color: white;
        color: green;
        margin-inline-start: auto;
        border-radius: 0.5rem;
      }
    }

    .btn {
      &.btn-icon {
        display: none;
      }
    }
  }
`

const Navbar = function Navbar() {
  const [isOpenAnchor, setIsOpenAnchor] = React.useState(false)

  const { user } = useAuth()

  const navigate = useNavigate()

  return (
    <StyledNavbar>
      <nav className='navbar'>
        <h1 className='text text-companyName'>JOOBS</h1>
        <div className={`nav ${isOpenAnchor ? 'open' : ''}`}>
          <Link to='/'>
            <div className='nav-link'>
              <House size={32} weight='fill' className='icon-nav' />
              <h3 className='text text-link'>Beranda</h3>
            </div>
          </Link>

          {user?.email && (
            <Link to='/dashboard'>
              <div className='nav-link'>
                <CirclesFour size={32} weight='fill' className='icon-nav' />
                <h3 className='text text-link'>Dashboard</h3>
              </div>
            </Link>
          )}

          <Link to='/job'>
            <div className='nav-link'>
              <UsersThree size={32} className='icon-nav' />
              <h3 className='text text-link'>Lowongan</h3>
            </div>
          </Link>

          {!user?.email && (
            <button type='button' className='btn btn-login' onClick={() => navigate('login')}>
              <SignIn size={32} className='icon-nav' />
              Login
            </button>
          )}

          {user?.email && (
            <div className='nav-image'>
              <span className='image'>
                <img src={user?.image_url} alt='user profile pic' />
              </span>

              <h3 className='text text-userName'>{user?.name}</h3>
            </div>
          )}
        </div>
        <button className='btn btn-icon' onClick={() => setIsOpenAnchor((prev) => !prev)}>
          <DotsThreeOutlineVertical weight='fill' size={32} />
        </button>
      </nav>
    </StyledNavbar>
  )
}

export default Navbar
