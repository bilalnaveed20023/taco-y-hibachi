import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Fusion from "@/components/Fusion";
import Menu from "@/components/Menu";
import FindUs from "@/components/FindUs";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import { site, links } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.name,
  servesCuisine: ["Mexican", "Hibachi", "Street food"],
  telephone: site.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.lat, longitude: site.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "23:00",
    },
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating, reviewCount: site.reviewCount },
  hasMap: links.place,
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#menu">Skip to menu</a>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Fusion />
        <Menu />
        <FindUs />
        <Reviews />
      </main>
      <Footer />
      <StickyBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
