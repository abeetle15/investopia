import "./style.css";
import SearchForm from "../../components/SearchForm";

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
        <h2 className="text-2xl font-bold text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </h2>
        <SearchForm query={query} />
      </section>
    </div>
  );
}
