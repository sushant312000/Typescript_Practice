"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Movies {
    constructor(Title, Year, IMDB) {
        this.Title = "";
        this.Year = 0;
        this.IMDB = 0;
        this.Title = Title;
        this.Year = Year;
        this.IMDB = IMDB;
    }
}
const movieApi = 'https://jsonmock.hackerrank.com/api/movies';
const fetchMovieDetails = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const { data } = yield response.json();
    console.log(data);
    return data;
});
fetchMovieDetails(movieApi);
