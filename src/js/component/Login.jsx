import React, { useContext, useState } from "react";
import { contactContext } from "./Home.jsx";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Contacts");
  };

  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const { addContact } = useContext(contactContext);


  const handleAddContact = () => {
    addContact(userData);
    handleNavigate();
  };

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container p-5">
      <h1>Agregar un nuevo contacto</h1>

      <div className="mb-3">
        <label for="form-control" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          value={userData.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="+584145679454"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={userData.address}
          onChange={handleChange}
        />
        <div className="d-flex align-items-center"></div>

        <div className="my-3">
          {" "}
          <button
            type="button"
            class="btn btn-outline-primary btn-lg align-items-center"
            onClick={handleAddContact}
          >
            Guardar contacto
          </button>
        </div>
        <div>
          <a href="" onClick={handleNavigate}>
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
