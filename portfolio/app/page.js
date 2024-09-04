import styles from "./page.module.css";
import Head from 'next/head';
import Navbar from "./components/navbar";
import Intro from './/components/intro';
import Skills from './/components/skills';
import Projects from './/components/projects';
import Experiences from './/components/experience';
import Volunteering from './/components/volunteering';
import Travel from './/components/travel';
import Contact from './/components/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="intro"><Intro /></section>
        <section id="projects"><Projects /></section>
        <section id="experiences"><Experiences /></section>
        <section id="skills"><Skills /></section>
        <section id="volunteering"><Volunteering /></section>
        <section id="travel"><Travel /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
