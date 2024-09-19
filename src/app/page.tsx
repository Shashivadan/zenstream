import MainLandingPage from "@/components/landing-page/main-landing-page";

export const dynamic = "force-static";
export default function HomePage() {
  return (
    <main className="">
      <div className="m-auto max-w-screen-xl">
        <MainLandingPage />
      </div>
    </main>
  );
}
