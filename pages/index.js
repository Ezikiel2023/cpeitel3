import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm Ezikiel Manese. I'm a fellow student who enjoys playing mobile games. Songs of Bruno Mars are awesome for me. Chicken is delicious and I love it. And all I can say is I'm a good person.</p>
<ul>
<li>My expections on this subject are: Widen my knowledge about the topics being taught.</li>
<li>Expect to have a real-life examples about the activity.</li>
<li>Expect to have an interesting topics and overcome the challenges.</li>
</ul>
    
     <p>10 Things That Require Zero Talent</p>
        <ul>
        <li>1. Being on Time</li>
        <li>2. Making An Effort</li>
        <li>3. Being High Energy</li>
        <li>4. Having A Positive Attitude</li>
        <li>5. Being Passionate</li>
        <li>6. Using Good Body Language</li>
        <li>7. Being Coachable</li>
        <li>8. Doing A Little Extra</li>
        <li>9. Being Prepared</li>
        <li>10. Having A Strong Work Ethic</li>
        </ul>
      </section>
    </Layout>
  );
}
