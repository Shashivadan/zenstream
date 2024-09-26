import MoviesSlider from '@/components/stream-containers/movies-section/movies-carousel/movies-slider';
import NowPlayingMovies from '@/components/stream-containers/movies-section/movies-contents/now-playing-movies';
import PopularMovies from '@/components/stream-containers/movies-section/movies-contents/popular-movies';
import TopRatedMovies from '@/components/stream-containers/movies-section/movies-contents/top-rated-movies';
import UpcomingMovies from '@/components/stream-containers/movies-section/movies-contents/upcoming-movies';
import React from 'react'




export default function page() {
  return (
    <section className="">
      <MoviesSlider />
      <div className="mt-2 p-4">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Now Playing
            </h1>
            <div className="mt-4" />
            <NowPlayingMovies/>
          </div>

          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Top Rated
            </h1>
            <div className="mt-4" />
            <TopRatedMovies/>
          </div>
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Popular Movies
            </h1>
            <div className="mt-4" />
            <PopularMovies />
          </div>
          <div>
            <h1 className="md:text-4x font-mono text-2xl font-bold leading-tight tracking-tighter">
              Upcoming
            </h1>
            <div className="mt-4" />
            <UpcomingMovies/>
          </div>
        </div>
      </div>
    </section>
  );
}
