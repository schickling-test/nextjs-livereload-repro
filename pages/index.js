import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import data_ from '../data.json';

export const getStaticProps = () => {
  return { props: { data: data_ } };
};

export default function Home({ data }) {
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((_) => _ + 1);
    }, 1000);

    return () => clearInterval(interval);
    // reset if data changes
  }, [data]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>Seconds: {seconds}</div>
        <div style={{ marginTop: 20 }}>Try changing data.json.</div>
        {seconds <= 30 ? (
          <div>It should live reload correctly. ✅</div>
        ) : (
          <div>It now longer live reloads after >30 seconds. ❌</div>
        )}
        <div style={{ marginTop: 20 }}>
          Data: {JSON.stringify(data, null, 2)}
        </div>
      </main>
    </div>
  );
}
