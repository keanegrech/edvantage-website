import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid h-screen place-items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#114b88] via-[#192532] to-[#10131C]">
      <div className="flex gap-64 mx-7 flex-wrap justify-between">
        <div className="flex flex-col gap-7 justify-center">
          <div className="flex gap-2 flex-col">
            <Image
              src="/logo.png"
              width={128}
              height={128}
              alt="EdVantage Logo"
              className="rounded-3xl"
            />
            <div className="text-5xl font-bold">EdVantage</div>
            <div className="font-light">Fast. Simple. Unified. All MCAST.</div>
          </div>
          <div className="flex flex-col gap-2">
            View your timetable, upcoming events,<br></br> your courses, all in
            one app.
            <div className="flex gap-3">
              <Image
                src="/appstore.svg"
                width={128}
                height={128}
                alt="EdVantage Logo"
                className="cursor-pointer"
              />
              <Link href="/learnmore" className="border-2 px-4 rounded-xl self-center py-2">Learn More</Link>
            </div>
          </div>
        </div>
        <Image
          src="/AB.png"
          width={350}
          height={128}
          alt="App Demonstration"
          className="rounded-3xl drop-shadow-lg"
        />
      </div>
    </main>
  );
}
