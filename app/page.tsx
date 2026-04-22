import Navbar from "@/components/Navbar";
import HeroLeft from "@/components/HeroLeft";
import WebformEmbed from "@/components/WebformEmbed";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-16 items-center w-full">
          <HeroLeft />
          <div className="flex justify-center items-center">
            <WebformEmbed />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />

      {/* Floating accent elements */}
      <div className="fixed top-1/4 -left-20 w-64 h-64 bg-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
    </main>
  );
}
