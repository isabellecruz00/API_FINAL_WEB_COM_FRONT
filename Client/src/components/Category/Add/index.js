import React, { useState } from "react";
import CategoryDataService from "../../../services/Category/index";

const Add = () => {
  const initialCategoryState = { id: null, name: "" };
  const [category, setCategory] = useState(initialCategoryState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const saveCategory = () => {
    var data = {
      name: category.name,
    };

    CategoryDataService.create(data)
      .then((response) => {
        setCategory({
          id: response.data.id,
          name: response.data.name,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCategory = () => {
    setCategory(initialCategoryState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Tudo certo!</h4>
          <button className="btn btn-success" onClick={newCategory}>
            Voltar ao cadastro!
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Adicionar categoria</label>
            <input
              type="text"
              className="form-control"
              id="name"
              label="Digite um nome..."
              required
              value={category.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <button onClick={saveCategory} className="btn btn-success">
            Adicionar
          </button>
        </div>
      )}
    </div>
  );
};

export default Add;
