import Hero from "@/components/Hero";
import homeImg from "/public/home.jpg";
export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        title="Professional Cloud Hosting"
        imgAlt="Car Factory"
      />
    </div>
  );
}
