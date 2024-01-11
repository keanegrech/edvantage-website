import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="w-screen py-6">
        <div className="ml-4">
          <Link
            href="/"
            className="inline-flex"
          >
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
              <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-5 py-2 hover:px-9 transition-all text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                <span className="inline-flex items-center text-black dark:text-white">
                  Go back
                </span>
              </div>
            </span>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col gap-10 justify-center slide-in">
        <div className="flex justify-center gap-96 px-36 py-5 slide-in-child">
          <div className="flex flex-col justify-center w-64">
            <div className="font-bold text-2xl">A simple user interface</div>
            <div className="">
              EdVantage is designed with a simple and intuitive user interface
              that prioritizes funtionality and ease of use. Quickly get
              information from the home page, from upcoming events, to real-time
              timetable updates
            </div>
          </div>

          <Image
            src="/1.png"
            width={256}
            height={128}
            alt="App Demonstration"
            className="rounded-3xl drop-shadow-lg"
          />
        </div>

        <div className="flex justify-center gap-96 px-36 py-5 slide-in-child">
          <Image
            src="/22.png"
            width={256}
            height={128}
            alt="App Demonstration"
            className="rounded-3xl drop-shadow-lg"
          />
          <div className="flex flex-col justify-center w-64">
            <div className="font-bold text-2xl text-right">
              Easily manage your courses
            </div>
            <div className="text-right">
              Easily view or manage your current course, or you can apply for a
              new course right from the application.
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-96 px-36 py-5 slide-in-child">
          <div className="flex flex-col justify-center w-64">
            <div className="font-bold text-2xl">Did anybody say benefits?</div>
            <div className="">
              EdVantage provides 3 tiers of subscriptions, each adding their own
              seperate new benefits.
            </div>
          </div>

          <Image
            src="/4.png"
            width={256}
            height={128}
            alt="App Demonstration"
            className="rounded-3xl drop-shadow-lg"
          />
        </div>
      </div>
    </main>
  );
}
