import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";

const FindById = (props) => {
  const initialCategoryState = {
    id: null,
    name: "",
  };

  const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
  const [message, setMessage] = useState("");
  const [searchName, setSearchName] = useState("");
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    retrieveCategorys();
  }, []);

  useEffect(() => {
    getCategory(props.match.params.id);
  }, [props.match.params.id]);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveCategorys = () => {
    CategoryDataService.getByIdCategory()
      .then((response) => {
        setCategorys(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCategory = (id) => {
    CategoryDataService.getByIdCategory(searchName)
      .then((response) => {
        setCurrentCategory(response.data);
        console.log("->" + response.data);
      })
      .catch((e) => {
        console.log("->" + e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  return (
    <div>
      {currentCategory ? (
        <div className="edit-form">
          <h4>Categoria</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por ID..."
              value={searchName}
              onChange={onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={getCategory}
              >
                Pesquisar pelo ID da categoria
              </button>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome da Categoria</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentCategory.name}
                onChange={handleInputChange}
              />
            </div>
          </form>
          <p>{message}</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default FindById;
