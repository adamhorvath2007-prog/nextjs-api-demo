import Link from "next/link";

export const metadata = {
  title: "Next.js API Demo",
  description: "Demo: client fetch + server fetch (ISR) + basic SEO.",
};

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Next.js API Demo</h1>
      <p>Mini projekt do CV: API, loading/error a základné SEO.</p>

      <ul style={{ lineHeight: 1.8 }}>
        <li>
          <Link href="/client-demo">Client-side fetch (loading + error)</Link>
        </li>
        <li>
          <Link href="/posts">Server fetch (ISR)</Link>
        </li>
      </ul>
    </main>
  );
}