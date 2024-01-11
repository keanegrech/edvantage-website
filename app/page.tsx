import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_0%,#000_40%,#05046b_100%)]">
      <div className="grid h-screen place-items-center">
        <div className="flex gap-64 mx-7 flex-wrap justify-between slide-in">
          <div className="flex flex-col gap-7 justify-center">
            <div className="flex gap-2 flex-col">
              <Image
                src="/logo.png"
                width={128}
                height={128}
                alt="EdVantage Logo"
                className="rounded-3xl slide-in-child"
              />
              <div className="flex gap-4">
                <div className="text-5xl font-bold slide-in-child">
                  EdVantage
                </div>
                <span className="relative self-center w-16 h-7 inline-block overflow-hidden rounded-full p-[1px] slide-in-child">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full select-none items-center justify-center rounded-full bg-slate-950/90 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    BETA
                  </div>
                </span>
              </div>

              <div className="font-light slide-in-child">
                Fast. Simple. Unified. All MCAST.
              </div>
            </div>
            <div className="flex flex-col gap-2 slide-in-child">
              View your timetable, upcoming events,<br></br> your courses, all
              in one app.
              <div className="flex gap-3">
                <Link
                  href="/learnmore"
                  className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/AB.png"
            width={350}
            height={128}
            alt="App Demonstration"
            className="rounded-3xl drop-shadow-lg slide-in-child"
          />
        </div>
        <div className="absolute left-0 bottom-0 p-2">
          <p className="opacity-10 border-2 px-2 rounded-full">Made by Keane, Samuel, Isaac, Kurt and Emily, as part of an MCAST Assignment.</p>
        </div>
      </div>
    </main>
  );
}
