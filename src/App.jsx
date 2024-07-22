import Hero from "./components/Hero";
import Services from "./components/Services/Services";
import WhereAreWe from "./components/WhereWeAre/WhereWeAre";
import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Services />
      <WhereAreWe />
      <AppBanner />
      <Footer />
    </>
  );
}
