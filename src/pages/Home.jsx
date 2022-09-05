import React from 'react'
import styled from 'styled-components'
import { MagnifyingGlass } from 'phosphor-react'
import { useJob } from '../contexts/JobContext'
import api from '../utils/service'
import { CardJob } from '../components'

const StyledHome = styled('section')`
  .text {
    line-height: 1.5;
    letter-spacing: 0.01em;
  }

  .btn {
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
  }

  .banner {
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.4);
    background-image: url('https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');

    display: grid;
    place-items: center;

    margin-block-end: 2rem;

    &-search {
      background: transparent;
      display: flex;
      gap: 5px;
      align-items: stretch;
      width: min(100% - 4rem, 600px);

      &Input {
        flex: 1;
        background: white;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        display: flex;
        gap: 1rem;
        align-items: center;

        .icon {
          display: block;
        }

        input {
          border: none;
          outline: none;
          width: 100%;
          background: transparent;
          height: 100%;
          font-family: inherit;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
        }
      }

      .btn-search {
        border: none;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-family: inherit;
        line-height: 1.5;
        border-radius: 8px;
        background-color: green;
        color: white;
        font-weight: 500;
      }
    }
  }

  .latest-job {
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
    margin-block-end: 2rem;

    .text-title {
      font-size: 2rem;
      font-weight: 200;
    }
    .jobs {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 1rem;
    }
  }

  .pamflet {
    width: min(100% - 2rem, 1200px);
    margin-inline: auto;
    color: black;
    padding: 2rem 1rem;
    margin-block-end: 2rem;
    background-color: green;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 2rem;

    &-content {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-inline-end: auto;

      .text {
        color: white;
        &-pamfletTitle {
          font-size: 2.5rem;
          font-weight: 500;
          margin-block-end: 0;
        }

        &-pamfletCaption {
          font-size: 1rem;
          font-weight: 300;
        }
      }
    }

    .btn-pamflet {
      font-size: 1rem;
      width: fit-content;
      font-family: inherit;
      font-weight: 500;
      background: white;
      color: green;
      border-radius: 8px;
    }
  }

  @media only screen and (min-width: 768px) {
    .latest-job {
      .jobs {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 1.5rem;
        align-items: stretch;
        justify-content: center;
      }
    }
  }
`

const Home = function Home() {
  const { setJobs, job } = useJob()

  React.useEffect(() => {
    api
      .get('/job-vacancy')
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <StyledHome>
      <div className='banner'>
        <form className='banner-search'>
          <div className='banner-searchInput'>
            <MagnifyingGlass size={32} className='icon' />
            <input placeholder='Cari...' />
          </div>

          <button type='submit' className='btn btn-search'>
            Search
          </button>
        </form>
      </div>
      <div className='latest-job'>
        <h1 className='text text-title'>Lowongan Terbaru</h1>

        <div className='jobs'>
          {job?.data?.length === 0 && <p>No Available Job</p>}
          {job?.data?.slice(0, 3)?.map((d) => (
            <CardJob
              key={d.id}
              image={d.company_image_url}
              title={d.title}
              city={d.company_city}
              companyName={d.company_name}
              jobType={d.job_type}
              salary={d.salary_min}
              status={d.job_tenure}
            />
          ))}
        </div>
      </div>

      <div className='pamflet'>
        <div className='pamflet-content'>
          <h1 className='text text-pamfletTitle'>JOOBS.</h1>
          <div className='text text-pamfletCaption'>Find your dream job only on JOOBS.</div>
        </div>

        <button type='button' className='btn btn-pamflet'>
          Go to JOOBS
        </button>
      </div>

      <div className='latest-job'>
        <h1 className='text text-title'>Untuk Anda</h1>

        <div className='jobs'>
          {job?.data?.length === 0 && <p>No Available Job</p>}
          {job?.data?.map((d) => (
            <CardJob
              key={d.id}
              image={d.company_image_url}
              title={d.title}
              city={d.company_city}
              companyName={d.company_name}
              jobType={d.job_type}
              salary={d.salary_min}
              status={d.job_tenure}
            />
          ))}
        </div>
      </div>
    </StyledHome>
  )
}

export default Home
