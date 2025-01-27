import Form from "next/form";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form flex items-center bg-white rounded-lg border-2 border-white"
    >
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input px-4 py-2 w-full rounded-lg focus:outline-none text-black"
        placeholder="Search Startups"
      />
      <button
        type="submit"
        className="search-btn bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
      >
        Search
      </button>
    </Form>
  );
}
