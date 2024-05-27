import Hero from "@/components/Hero";
import Punjabi from "@/components/Punjabi";
import Tshirts from "@/components/Tshirts";

export default function Home() {
  return (
    <main className="">
      <div className="md:mt-32">
        <Hero />
      </div>
      <div className="md:mt-60 px-5 lg:px-0">
        <Punjabi />
      </div>
      <div className="mt-24 md:mt-32 px-5 lg:px-0">
        <Tshirts />
      </div>
    </main>
  );
}
