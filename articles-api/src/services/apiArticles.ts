import axios from "axios";
import { TArticles } from "../typings/projectTypings";

const getArticles = () => {
  return fetch('http://localhost:8000/articles')
  .then(response => response.json())
  .then(articlesList => {
    return articlesList;
  })
  .catch(error => {
    console.log(error);
    // Handle the error in case the request is not successfull
  });
};

const getArticle = (id:string) => {
  return fetch(`http://localhost:8000/articles/${id}`)
  .then(response => response.json())
  .then(articleData => {
    return articleData;
  })
  .catch(error => {
    console.log(error);
  });
};

const saveArticle = (data: TArticles) => {
  return axios.post(`http://localhost:8000/articles`, data)
  .then(response => response.data)
  .then(articleData => {
    return articleData;
  })
  .catch(error => {
    console.log(error);
  });
};

const updateArticle = (id:string, data:TArticles) => {
  return axios.put(`http://localhost:8000/articles/${id}`, data)
  .then(response => response.data)
  .then(articleData => {
    return articleData;
  })
  .catch(error => {
    console.log(error);
  });
};

const deleteArticle = (id: number) => {
  return axios.delete(`http://localhost:8000/articles/${id}`)
  .then(response => response.data)
  .then(articleData => {
    return articleData;
  })
  .catch(error => {
    console.log(error);
  });
};

const searchArticle = (input: string) => {
  return fetch(`http://localhost:8000/searchArticles/${input}`)
  .then(response => response.json())
  .then(articleData => {
    return articleData;
  })
  .catch(error => {
    console.log(error);
  });
};

export  {
  getArticles,
  getArticle,
  saveArticle,
  updateArticle,
  deleteArticle,
  searchArticle
}