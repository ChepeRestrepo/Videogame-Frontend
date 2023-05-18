import {
  GET_ALL_GAMES,
  SEARCH_BY_NAME,
  GET_VIDEOGAME_DETAIL,
  GET_GENRES,
  ORDER_BY,
  FILTER_BY,
} from "./constActions";
import axios from "axios";

//Se obtiene toda la info tanto de la API como de la DB
const getAllGames = () => {
  return function (dispatch) {
    return axios
      .get("/videogames")
      .then((res) => {
        dispatch({ type: GET_ALL_GAMES, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
};

function deleteDb(payload) {
  return async function (dispatch) {
    return axios
      .delete(`/videogame/${payload}`)
      .then((res) => {
        dispatch({
          type: GET_VIDEOGAME_DETAIL,
          payload: res.data,
        });
      });
  };
}
// Obtiene todos los juegos encontrados por nombres
const searchByName = (name) => {
  return function (dispatch) {
    return axios
      .get(`/videogames?name=${name}`)
      .then((res) => {
        dispatch({
          type: SEARCH_BY_NAME,
          payload: res.data,
        });
      })
      .catch((err) => {
        return err;
      });
  };
};
// Obtiene los detalles del juego según parametros id
const getVideogameDetail = (id) => {
  return function (dispatch) {
    return axios.get(`/videogame/${id}`).then((res) => {
      dispatch({
        type: GET_VIDEOGAME_DETAIL,
        payload: res.data,
      });
    });
  };
};
//Obtiene todos los generos:
const getGenres = () => {
  return function (dispatch) {
    return axios
      .get("/genres")
      .then((res) => {
        dispatch({ type: GET_GENRES, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
};
// Ordena los videojuegos
const orderBy = (order) => {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
  };
};
//Permite el filtrado
const filterBy = (order) => {
  return function (dispatch) {
    dispatch({ type: FILTER_BY, payload: order });
  };
};
export {
  getAllGames,
  searchByName,
  getVideogameDetail,
  getGenres,
  orderBy,
  filterBy,
  deleteDb,
};
