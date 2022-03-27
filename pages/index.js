import Head from 'next/head';

import {
  HomeSection,
  AboutSection,
  SkillSection,
  PortfolioSection,
  ServiceSection,
  ContactSection,
  ScrollToTop,
} from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devankitkr.in</title>
        <meta name="Devankitkr.in" content="Web developer Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ServiceSection />
      <PortfolioSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
}
