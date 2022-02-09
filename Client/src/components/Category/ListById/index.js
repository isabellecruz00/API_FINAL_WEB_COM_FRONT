import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";

const ListById = (props) => {
  const initialCategoryState = {
    id: null,
    name: "",
  };

  const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
  const [message, setMessage] = useState("");
  const [searchName, setSearchName] = useState("");
  const [categorys, setCategorys] = useState([]);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  useEffect(() => {
    retrieveCategorys();
  }, []);

  const retrieveCategorys = () => {
    CategoryDataService.getById()
      .then((response) => {
        setCategorys(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCategory = (id) => {
    CategoryDataService.getById(searchName)
      .then((response) => {
        setCurrentCategory(response.data);
        console.log("->" + response.data);
      })
      .catch((e) => {
        console.log("->" + e);
      });
  };

  useEffect(() => {
    getCategory(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentCategory({ ...currentCategory, [name]: value });
  };

  return (
    <div>
      {currentCategory ? (
        <div className="edit-form">
          <h4>Pesquisa</h4>
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
                Pesquisar por ID
              </button>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
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

export default ListById;
