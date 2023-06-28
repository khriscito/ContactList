import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login.jsx";

const Card = (props) => {
  const { fullname, address, phone, email } = props;

  return (
    <div className="container p-1">
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body d-flex">
          <div>
            <img
              className="photo"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Perfil"
            />
          </div>

          <div className="contact">
            <p className="card-text">{fullname}</p>
            <p className="card-text">{address}</p>
            <p className="card-text">{phone}</p>
            <p className="card-text">{email}</p>
          </div>

          <div className="buttonsContact">
          <button onClick={props.onDelete}>Eliminar</button>
          <button onClick={props.onEdit}>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;