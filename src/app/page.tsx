import CakeSection from "@/components/CakeSection";
import FloatingDecorations from "@/components/FloatingDecorations";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MessageLetter from "@/components/MessageLetter";
import PhotoGallery from "@/components/PhotoGallery";
import SparkleBackground from "@/components/SparkleBackground";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <SparkleBackground />
      <FloatingDecorations />
      <div className="relative z-10">
        <HeroSection />
        <CakeSection />
        <PhotoGallery />
        <MessageLetter />
        <Footer />
      </div>
    </main>
  );
}
