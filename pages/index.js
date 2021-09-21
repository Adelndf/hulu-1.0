import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://icons.iconarchive.com/icons/dakirby309/windows-8-metro/256/Web-Hulu-Metro-icon.png" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};