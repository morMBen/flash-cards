import axios from "axios";
const adress = "https://616b302016c3fa0017171619.mockapi.io/cards";

const fetchAllCards = async () => {
  const data = await axios.get(adress);
  return data.data;
};
const fetchCardById = async (id) => {
  const data = await axios.get(`${adress}/${id}`);
  return data.data;
};
const addCard = async (obj) => {
  const data = await axios.post(adress, obj);
  return data.data;
};
const editCard = async (id, obj) => {
  const data = await axios.put(`${adress}/${id}`, obj);
  return data.data;
};
const deleteCard = async (id) => {
  const data = await axios.delete(`${adress}/${id}`);
  return data.data;
};

export { fetchAllCards, fetchCardById, deleteCard, addCard, editCard };
