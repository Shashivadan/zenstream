import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
// import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="rounded-2xl border border-secondary bg-card p-10 shadow-2xl">
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4 xl:grid-cols-6">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex items-center font-bold">
              <h3 className="text-2xl">ZenStream</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <div>
              <Link
                href={siteConfig.links.github}
                className="opacity-60 hover:opacity-100"
              >
                Github
              </Link>
            </div>

            <div>
              <Link
                href={siteConfig.links.twitter}
                className="opacity-60 hover:opacity-100"
              >
                Twitter
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Platforms</h3>
            <div className="cursor-not-allowed">
              <div>
                <div className="opacity-60 hover:opacity-100">iOS</div>
              </div>

              <div>
                <div className="opacity-60 hover:opacity-100">Android</div>
              </div>

              <div>
                <div className="opacity-60 hover:opacity-100">Web</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Socials</h3>
            <div>
              <Link
                href="https://x.com/shashivadan99"
                className="opacity-60 hover:opacity-100"
              >
                Twitch
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; {new Date().getFullYear()} Brought to you by
            <Link
              target="_blank"
              href="https://github.com/Shashivadan"
              className="ml-1 border-primary text-primary transition-all hover:border-b-2"
            >
              Shashivadan
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
