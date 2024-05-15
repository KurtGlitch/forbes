import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-16">
      <div className="max-w-5xl font-mono text-sm flex">
        <p className="border-b  bg-gradient-to-b py-6 backdrop-blur-2xl border-neutral-800 from-inherit w-auto  rounded-xl border bg-gray-200 px-4 bg-zinc-800/30">
          Coming Soon with great Deals🔥
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert-0"
          src="/logo.svg"
          alt="forbes Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
