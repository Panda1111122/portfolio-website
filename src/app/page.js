import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Reveal delay={100}><Experience /></Reveal>
      <Reveal delay={100}><Projects /></Reveal>
      <Reveal delay={100}><Skills /></Reveal>
      <Reveal delay={100}><Contact /></Reveal>
    </main>
  );
}
