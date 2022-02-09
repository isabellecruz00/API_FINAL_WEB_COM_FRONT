import React, { useState } from "react";
import UserDataService from "../../../services/User/index";
import { TOKEN_KEY } from "../../../services/shared/api";

const Login = (props) => {
  const [user, setUser] = useState({ id: null, login: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const sendLogin = () => {
    var data = {
      login: user.login,
      password: user.password,
    };

    UserDataService.login(data)
      .then((response) => {
        localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
        console.log(TOKEN_KEY + ": " + localStorage.getItem(TOKEN_KEY));
        props.history.push("/category");
      })
      .catch((e) => {
        alert("Realize login primeiro!");
        console.log(e);
      });
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="name">Login</label>
        <input
          type="text"
          className="form-control"
          id="login"
          required
          value={user.login}
          onChange={handleInputChange}
          name="login"
        />
      </div>

      <div className="form-group">
        <label htmlFor="name">Senha</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={user.password}
          onChange={handleInputChange}
          name="password"
        />
      </div>

      <button onClick={sendLogin} className="btn btn-success">
        Entrar
      </button>
    </div>
  );
};

export default Login;
