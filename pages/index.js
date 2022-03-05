import Head from "next/head";

import {
  HomeSection,
  AboutSection,
  SkillSection,
  PortfolioSection,
  ServiceSection,
  ContactSection,
  ScrollToTop,
} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="Devankitkr.com"
          content="Portfolio website for web developing"
        />
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
