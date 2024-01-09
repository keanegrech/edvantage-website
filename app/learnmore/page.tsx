import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="w-screen py-6">
        <div className="ml-4">
        <Link href="/" className="border-2 px-4 rounded-full self-center py-2 hover:bg-white hover:text-black">← Go back</Link>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center">
        <div className="flex justify-center gap-96 px-36 py-5 bg-[#1a1a1a]">
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

        <div className="flex justify-center gap-96 px-36 py-5 bg-[#1a1a1a]">
          <Image
            src="/22.png"
            width={256}
            height={128}
            alt="App Demonstration"
            className="rounded-3xl drop-shadow-lg"
          />
          <div className="flex flex-col justify-center w-64">
            <div className="font-bold text-2xl text-right">Easily manage your courses</div>
            <div className="text-right">
              Easily view or manage your current course, or you can apply for a new course right from the application.
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-96 px-36 py-5 bg-[#1a1a1a]">
          <div className="flex flex-col justify-center w-64">
            <div className="font-bold text-2xl">Did anybody say benefits?</div>
            <div className="">
              EdVantage provides 3 tiers of subscriptions, each adding their own seperate new benefits.
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
