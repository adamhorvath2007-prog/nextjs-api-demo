"use client";

import { useEffect, useState } from "react";

type Post = { id: number; title: string; body: string };

export default function ClientDemoPage() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = (await res.json()) as Post;
      setData(json);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Client-side fetch demo</h1>

      <button onClick={load} style={{ padding: "8px 12px", marginBottom: 16 }}>
        Reload data
      </button>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      {data && (
        <article>
          <h2>
            #{data.id}: {data.title}
          </h2>
          <p>{data.body}</p>
        </article>
      )}
    </main>
  );
}