import type { Metadata } from "next";
import Intro from "@/sections/Intro";
import Footer from "@/sections/Footer";
import Consult from "@/sections/Consult";
import Hero from "@/sections/Hero";
import Reviews from "@/sections/Reviews";
import Navbar from "@/sections/Navbar";
import Expertise from "@/sections/Expertise";
import HeroText from "@/sections/HeroText";
import Copyright from "@/sections/Copyright";
import PressAppearances from "@/sections/PressAppearances";

export const metadata: Metadata = {
  title: "Gen Fulton | Psychotherapist & Performance Coach",
  description:
    "Gen Fulton offers psychotherapy and performance coaching for stress, burnout, perfectionism, and sports performance. Specializing in Somatic Experiencing, CBT, and Emotionally Focused Therapy.",
  openGraph: {
    title: "Gen Fulton | Psychotherapist & Performance Coach",
    description:
      "Providing a holistic approach to helping you thrive in every aspect of life.",
    url: "https://genfulton.com",
    images: [{ url: "/opengraph-image.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Gen Fulton Consultancy",
  url: "https://genfulton.com",
  description:
    "Psychotherapy and performance coaching for stress, burnout, perfectionism, relationships, trauma, and sports performance.",
  founder: {
    "@type": "Person",
    name: "Genevieve Fulton",
    jobTitle: "Psychotherapist & Performance Coach",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "John F. Kennedy University" },
    ],
    knowsAbout: [
      "Psychotherapy",
      "Sports Psychology",
      "Somatic Experiencing",
      "Stress Management",
      "Burnout",
      "Perfectionism",
      "Couples Therapy",
      "PTSD",
      "Emotionally Focused Therapy",
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sports Performance Coaching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stress & Burnout Coaching" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Relationship Counseling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trauma & PTSD Counseling" } },
    ],
  },
  areaServed: "United States",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* <Navbar /> */}
      <section>
        <Hero />
      </section>
      <section className="flex justify-center bg-eggshell">
        <HeroText />
      </section>
      <section className="relative overflow-hidden">
        <Intro />
      </section>
      <section className="mobile:px-[70px] mobile:py-16 max-mobile:px-8 max-mobile:py-10  ">
        <Expertise />
      </section>
      <section className="relative sm:px-0 bg-sea-foam justify-center shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25)]">
        <Reviews />
      </section>
      <section>
        <PressAppearances />
      </section>
      <section>
        <Consult />
        {/* </section> */}
        {/* <Footer />
      <section>
        <Copyright /> */}
      </section>
    </>
  );
}
