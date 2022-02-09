import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  Edit,
  Add,
  List,
  FindById,
  ListAll,
  ListById,
} from "../Category/index";
import { Login } from "../User/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand" to={"/user"}>
          Menu
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={Login() ? "/category" : "#"} className="nav-link">
              Nome da Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/gameId"} className="nav-link">
              Procurar por ID da Categoria
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Adicionar categoria
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/games/all"} className="nav-link">
              Listar todos
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/games/id"} className="nav-link">
              Listar todos por ID
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/user"]} component={Login} />
          <Route exact path={"/category"} component={List} />
          <Route exact path="/gameId" component={FindById} />
          <Route exact path="/add" component={Add} />
          <Route path="/category/:id" component={Edit} />
          <Route path="/games/id" component={ListById} />
          <Route path="/games/all" component={ListAll} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
