import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <p>Hello Next😊</p>
      <Image
        src="/favicon.ico"
        alt="Next.js Logo"
        width={30}
        height={37}
      />
    </main>
  );
}
