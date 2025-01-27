import "./style.css";
import SearchForm from "../../components/SearchForm";
import { posts } from "@/db/fake-db";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <div className="flex flex-col items-center">
      <section className="hero">
        <h1 className="text-6xl font-extrabold text-center">
          Pitch your startup <br />
          Connect with entreperneurs
        </h1>
        <p className="text-2xl font-bold text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="showcase-cont flex flex-col">
        <h2 className="text-4xl font-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </h2>
        <ul className="mt-4 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No Startups Found </p>
          )}
        </ul>
      </section>
    </div>
  );
}
