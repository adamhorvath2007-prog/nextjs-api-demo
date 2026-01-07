import Link from "next/link";

export const metadata = {
  title: "Next.js API Demo",
  description: "Mini project: client fetch, server rendering (ISR), basic SEO, and Next/Image.",
};

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <header style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            background: "black",
          }}
        />
        <div>
          <h1 style={{ margin: 0 }}>Next.js API Demo</h1>
          <p style={{ margin: "6px 0 0", opacity: 0.75 }}>
            CV-ready demo: API, loading/error, ISR, SEO, optimized image
          </p>
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        <Card
          title="Client-side fetch"
          desc="Loading + error stavy, fetch z API v prehliadači."
          href="/client-demo"
        />
        <Card
          title="Server fetch (ISR)"
          desc="Render na serveri + revalidate (ISR)."
          href="/posts"
        />
        <Card
          title="Image demo"
          desc="Next/Image optimalizácia (lazy, sizing)."
          href="/image-demo"
        />
      </section>

      <footer style={{ marginTop: 24, opacity: 0.7, fontSize: 14 }}>
        Tip: Tento projekt vieš linknúť do Profesia ako GitHub portfólio.
      </footer>
    </main>
  );
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: 16,
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 14,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
      <p style={{ margin: "8px 0 0", opacity: 0.75 }}>{desc}</p>
      <p style={{ margin: "10px 0 0", fontWeight: 600 }}>Open →</p>
    </Link>
  );
}