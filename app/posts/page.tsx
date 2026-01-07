export const metadata = {
  title: "Posts (Server Fetch) | Next.js API Demo",
  description: "Server-side fetching with revalidate (ISR).",
};

export const revalidate = 60;

type Post = { id: number; title: string };

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error(`Failed to fetch posts: HTTP ${res.status}`);

  const posts = (await res.json()) as Post[];

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Server fetch (ISR)</h1>
      <p>Renderuje sa na serveri a obnoví sa max raz za 60 sekúnd.</p>

      <ul style={{ lineHeight: 1.8 }}>
        {posts.map((p) => (
          <li key={p.id}>
            #{p.id} — {p.title}
          </li>
        ))}
      </ul>
    </main>
  );
}