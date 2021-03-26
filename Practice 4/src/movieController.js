import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";
import { render } from "pug";

export const home = (req, res) => {
  const movies = getMovies();
  res.render("movie", { pageTitle: "Movies!", headTitle: "Movies!!", movies });
};

export const movieDetail = (req, res) => {
  const result = getMovieById(req.params.id);
  res.render("detail", { pageTitle: result.title, result });
};

export const filterMovie = (req, res) => {
  if (req.query.year) {
    const year = req.query.year;
    const movies = getMovieByMinimumYear(year);
    res.render("movie", {
      pageTitle: year,
      headTitle: `Searching By Year: ${year}`,
      movies
    });
  } else if (req.query.rating) {
    const rating = req.query.rating;
    const movies = getMovieByMinimumRating(rating);
    res.render("movie", {
      pageTitle: rating,
      headTitle: `Searching By Rating: ${rating}`,
      movies
    });
  } else {
    res.render("404", { pageTitle: "Forbidden Access" });
  }
};
