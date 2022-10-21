class Movies{
    Title: string="";
    Year: number=0;
    IMDB: number=0;

    constructor(Title: string, Year: number, IMDB: number){
        this.Title = Title;
        this.Year = Year;
        this.IMDB = IMDB;
    }
}

const movieApi = 'https://jsonmock.hackerrank.com/api/movies';

const fetchMovieDetails = async (url: string): Promise<Movies[]> =>{
    const response = await fetch(url);
    const {data}: any = await response.json();
    console.log(data);
    return data;
}

fetchMovieDetails(movieApi);