import styles from "./page.module.css";
import Head from 'next/head';
import Intro from './/components/intro';
import Skills from './/components/skills';
import Projects from './/components/projects';
import Experiences from './/components/experience';
import Volunteering from './/components/volunteering';
import Travel from './/components/travel';
import Contact from './/components/contact';

export default function Home() {
  return (
    <main className={styles.main}>
      <div><Intro /></div>
      <div><Projects /></div>
      <div><Experiences /></div>
      <div><Skills /></div>
      <div><Volunteering /></div>
      <div><Travel /></div>
      <div><Contact /></div>
    </main>
  );
}
