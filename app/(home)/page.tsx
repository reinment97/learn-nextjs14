import Link from "next/link";

export const metadata = {
  title: "Home",
}

// export { API_URL as API_URL};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(process.env.API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map(movie => <li key={movie.id}>
        <Link href={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      </li>)}
    </div>
  );
}