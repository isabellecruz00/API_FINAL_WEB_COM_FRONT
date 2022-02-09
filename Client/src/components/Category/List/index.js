import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import { Link } from "react-router-dom";
import "./style.css";

const List = () => {
  const [categorys, setCategorys] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    retrieveCategorys();
  }, []);

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const retrieveCategorys = () => {
    CategoryDataService.getAllCategorys()
      .then((response) => {
        setCategorys(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveCategory = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
  };

  const findByName = () => {
    if (searchName !== "") {
      CategoryDataService.findByName(searchName)
        .then((response) => {
          setCategorys(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      retrieveCategorys();
    }
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nome..."
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByName}
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Lista de Categoria</h4>

        <ul className="list-group">
          {categorys &&
            categorys.map((category, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                style={{ cursor: "pointer" }}
                onClick={() => setActiveCategory(category, index)}
                key={index}
              >
                {category.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentCategory ? (
          <div>
            <h4>Descrição da Categoria</h4>
            <div>
              <label>
                <strong>Nome: </strong>
              </label>
              {currentCategory.name}
            </div>
            <div>
              <label>
                <strong>Id: </strong>
              </label>
              {currentCategory.id}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default List;
