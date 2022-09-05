import styled from 'styled-components'

const StyledCardJob = styled('button')`
  width: min(100%, 350px);
  height: 450px;
  overflow: hidden;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  background: #f5f7f7;
  border-radius: 8px;
  font-family: inherit;
  box-shadow: 3px 4px 9px -2px rgba(0, 0, 0, 0.58);

  display: flex;
  flex-direction: column;
  .cardJob {
    &-image {
      width: 100%;
      min-height: 50%;
      background-position: center;
      background-repeat: no-repeat;
      object-fit: cover;
    }

    &-body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .text {
        text-align: left;
        line-height: 1.5;
        letter-spacing: 0.01em;
      }

      &Title {
        font-size: 1.875rem;
        font-weight: 600;
        margin-block-end: 0.25rem;
        color: green;
      }

      &JobType {
        font-size: 12px;
        font-weight: 400;
      }

      &City {
        font-size: 1.2rem;
        margin-block-end: 0.5rem;
        font-weight: 500;
      }

      &Status {
        font-size: 1rem;
      }

      &Salary {
        font-size: 1rem;
        margin-block-start: auto;
        font-weight: 500;
      }
    }
  }
`

const CardJob = function CardJob({ image, title, companyName, city, jobType, status, salary }) {
  return (
    <StyledCardJob>
      <img src={image} alt='company profile' className='cardJob-image' />
      <div className='cardJob-body'>
        <div className='cardJob-bodyTitle text'>{title}</div>
        <div className='cardJob-bodyCity text'>
          {companyName} ({city})
        </div>
        <div className='cardJob-bodyJobType text'>{jobType}</div>
        <div className='cardJob-bodyStatus text'>{status}</div>
        <div className='cardJob-bodySalary text'>Rp. {salary}</div>
      </div>
    </StyledCardJob>
  )
}

export default CardJob
