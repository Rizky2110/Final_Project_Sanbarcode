import styled from 'styled-components'

const StyledFooter = styled('footer')`
  background-color: #232423;

  padding-block-end: 2rem;
  .footer {
    min-height: 250px;
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
    padding-block: 2rem;
    color: white;

    display: flex;

    flex-direction: column;
    row-gap: 2rem;
  }

  .text-footerMadeBy {
    margin-block-end: 0;
    text-align: center;
    font-weight: 200;
    color: white;

    .love {
      font-weight: 600;
      text-transform: uppercase;
      color: red;
    }
  }

  @media only screen and (min-width: 765px) {
    .footer {
      flex-direction: row;
      align-items: stretch;
      column-gap: 2rem;
      &-left,
      &-middle,
      &-right {
        width: 40%;
      }
    }
  }
`

const Footer = function Footer() {
  return (
    <StyledFooter>
      <div className='footer'>
        <div className='footer-left'>
          <h3 className='text text-footerTitle'>Address</h3>
          <p className='text text-footerDetail'>
            Jl. Kejawan Gebang I No. 15, Sukolilo, Kota Surabaya 60111
          </p>
        </div>
        <div className='footer-middle'>
          <h3 className='text text-footerTitle'>Blog</h3>
          <p className='text text-footerDetail'>About Us</p>
        </div>
        <div className='footer-right'>
          <h3 className='text text-footerTitle'>JOOBS.</h3>
          <p className='text text-footerDetail'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, neque.
          </p>
        </div>
      </div>

      <h5 className='text text-footerMadeBy'>
        This Web App Made With <span className='love'>Love</span> by NCIPPY
      </h5>
    </StyledFooter>
  )
}

export default Footer
