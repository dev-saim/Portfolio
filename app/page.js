import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

// 👇 Dynamic import of potentially browser-dependent components
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </>
  );
}
