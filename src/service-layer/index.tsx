

import axios from "axios";
import { BooksURL } from "../core-utils/properties";

export const bookMarkBook = async (id: number) => {
  await axios.put(`${BooksURL}/api/books/${id}/bookmark?isBookmarked=true`);
};

export const unbookMarkBook = async (id: number) => {
  await axios.put(`${BooksURL}/api/books/${id}/bookmark?isBookmarked=false`);
};

export const startReadBook = async (id: number) => {
  await axios.put(`${BooksURL}/api/books/${id}/read?isStartRead=true`);
};

export const stopReadBook = async (id: number) => {
  await axios.put(`${BooksURL}/api/books/${id}/read?isStartRead=false`);
};

export const toggleBookMark = async (id: number,value :boolean ) => {
  await axios.put(`${BooksURL}/api/books/${id}/bookmark?isBookmarked=${value}`);
};
