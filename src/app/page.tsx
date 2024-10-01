import MainLandingPage from "@/components/landing-page/main-landing-page";
import { getCurrentUser } from "@/server/auth";
import { redirect } from "next/navigation";


export default  async function HomePage() {
  const user = await getCurrentUser();

  if(user) {
    redirect("/get-started")
  }

  return (
    <main className="">
      <div className="m-auto max-w-screen-xl">
        <MainLandingPage />
      </div>
    </main>
  );
}
