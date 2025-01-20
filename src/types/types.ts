export interface MovieAndTv {
    title: string,
    name: string,
    overview: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    homepage:string,
    watchers_count: number,
    created_at: string,
}

export interface UpcomingStateMovies {
    repos: MovieAndTv[] | null,
    fetchData: () => Promise<void>
}