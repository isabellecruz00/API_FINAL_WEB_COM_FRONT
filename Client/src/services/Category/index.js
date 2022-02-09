import api from "../shared/api";

const getAll = () => {
  return api.get("/platform/");
};

const getById = (id) => {
  return api.get(`/api/product/${id}`);
};

const create = (data) => {
  return api.post("/api/category", data);
};

const update = (id, data) => {
  return api.put(`/category/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/delete/${id}`);
};

const getByIdCategory = (id) => {
  return api.get(`/api/category/${id}`);
};

const getAllCategorys = () => {
  return api.get("/api/category");
};

const findByName = (name) => {
  return api.get(`/api/category/GetByName/${name}/`);
};

const CategoryDataService = {
  getAll,
  getAllCategorys,
  getByIdCategory,
  getById,
  create,
  update,
  remove,
  findByName,
};

export default CategoryDataService;
