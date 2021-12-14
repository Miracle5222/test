import Head from 'next/head';
import styles from '../styles/Home.module.css'
import styled from  'styled-components';

const Nav = styled.nav `
color: red;
`;

const  Home = ()=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sample branch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <h1>sample branch</h1>
    

    </div>
  )
}

export default Home;
