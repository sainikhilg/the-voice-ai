import Hero from "./home/Hero";
import Features from "./home/Features";
import LatestNews from "./home/LatestNews";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <LatestNews />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
