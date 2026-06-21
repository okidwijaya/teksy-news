import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog-v3";

export default function BlogList() {
    const posts = getAllPosts();

    return (
        <section className="max-w-6xl mx-auto px-6 md:px-14 py-16 md:py-20">
            <div>
                {posts.map((post, i) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        style={{
                            display: "block",
                            padding: "32px 0",
                            borderTop: "0.5px solid rgba(17,17,17,0.10)",
                            borderBottom: i === posts.length - 1 ? "0.5px solid rgba(17,17,17,0.10)" : "none",
                            textDecoration: "none",
                        }}
                        className="group"
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                            <span
                                style={{
                                    fontSize: 11.5,
                                    color: "#2B5C4D",
                                    border: "0.5px solid rgba(43,92,77,0.3)",
                                    padding: "2px 9px",
                                    borderRadius: 20,
                                }}
                            >
                                {post.category}
                            </span>
                            <span style={{ fontSize: 12.5, color: "#8A8A8A" }}>{formatDate(post.publishedAt)}</span>
                            <span style={{ fontSize: 12.5, color: "#8A8A8A" }}>·</span>
                            <span style={{ fontSize: 12.5, color: "#8A8A8A" }}>{post.readingTime}</span>
                        </div>
                        <div
                            style={{
                                fontFamily: "'Inter Tight', sans-serif",
                                fontWeight: 600,
                                fontSize: 20,
                                color: "#111111",
                                marginBottom: 10,
                                lineHeight: 1.3,
                                maxWidth: 680,
                            }}
                            className="group-hover:underline"
                        >
                            {post.title}
                        </div>
                        <p style={{ fontSize: 14, color: "#4A4A4A", lineHeight: 1.65, maxWidth: 640 }}>{post.excerpt}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}