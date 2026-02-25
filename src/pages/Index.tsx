import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Friedberg | Model BarberShop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Model BarberShop in Friedberg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Friedberg, Model BarberShop"
        />
        <link rel="canonical" href="https://model-barbershop.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Model BarberShop | Premium Barbershop Friedberg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Friedberg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://model-barbershop.de" />
        <meta property="og:image" content="https://model-barbershop.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Model BarberShop | Premium Barbershop Friedberg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://model-barbershop.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Model BarberShop",
            "image": "https://model-barbershop.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Aichacher Str. 1",
              "addressLocality": "Friedberg",
              "postalCode": "86316",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3555",
              "longitude": "10.9922"
            },
            "url": "https://model-barbershop.de",
            "telephone": "+49 821 29726302",
            "openingHours": "Mo-Fr 09:00-18:30, Sa 08:30-16:30",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/modelbarbershop",
              "https://www.instagram.com/modelbarbershop"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

