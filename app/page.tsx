import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <h1>Next.js API Demo</h1>
      <p>Vyber si demo stránku:</p>

      <ul style={{ lineHeight: 2 }}>
        <li>
          <Link href="/client-demo">Client-side fetch (loading + error)</Link>
        </li>
        <li>
          <Link href="/posts">Server fetch (ISR)</Link>
        </li>
        <li>
          <Link href="/image-demo">Image demo (Next/Image)</Link>
        </li>
      </ul>
    </main>
  );
}