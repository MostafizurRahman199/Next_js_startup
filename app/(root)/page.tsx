import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default async function Home({searchParams}: {searchParams: Promise<{query?:string}>}) {

const query = (await searchParams).query || '';

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-20 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Pitch Your Startup,
          <br className="hidden md:block" /> Connect with Entrepreneurs
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-6">
          Submit Ideas, Get Feedback, Get Funded
        </p>

        {/* Optional Hero Image */}
        {/* <div className="mt-6">
          <Image
            src="/startup-illustration.svg"
            alt="Startup illustration"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div> */}
      </section>

      {/* Search Section */}
      <section className="bg-white w-full py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <SearchForm  query={query} />
        </div>
      </section>
    </div>
  );
}
