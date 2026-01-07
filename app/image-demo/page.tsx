import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Image Demo | Next.js API Demo",
  description: "Next/Image example: optimized, lazy-loaded, responsive image.",
};

export default function ImageDemoPage() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui", maxWidth: 900, margin: "0 auto" }}>
      <Link href="/">← Back</Link>

      <h1 style={{ marginTop: 16 }}>Image demo (Next/Image)</h1>
      <p style={{ opacity: 0.75 }}>
        Ukážka optimalizovaného obrázka: lazy loading, správne rozmery, lepší performance.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 420,
          borderRadius: 16,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <Image
          src="/demo.jpg"
          alt="Demo image"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </div>
    </main>
  );
}