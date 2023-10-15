import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function Home() {
  return (
    <div className="container mx-auto p-5 sm:p-8">
      <Header />
      <div className="sm:grid sm:grid-cols-[66%_33%] sm:mt-10 gap-4">
        <FirstSection />
        <SecondSection />
      </div>
      <div>
        <ThirdSection />
      </div>
    </div>
  );
}
