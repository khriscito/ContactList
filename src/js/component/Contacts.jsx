import React, { useContext } from "react";
import { contactContext } from "./Home.jsx";
import ReactDOM from "react-dom";
import Login from "./Login.jsx";
import Card from "./Card.jsx";
import { useNavigate } from "react-router";

const Contacts = () => {
  const navigate = useNavigate();

  const { contacts, deleteContact } = useContext(contactContext);
  const handleDeleteContact = (index) => {
    deleteContact(index);
  };

  const handleNavigate = () => {
    navigate("/");
  };
console.log(contacts)


const handleEditContact = (index) => {
  navigate(`/edit/${index}`);
};


  return (
    <div>
      <div className="d-flex flex-row-reverse">
        <a onClick={handleNavigate} class="btn btn-success my-4">
          Agregar un nuevo contacto
        </a>
      </div>

      {contacts.map((contact,index) => (
        <Card
        key={contact.email + index}
        fullname={contact.fullname}
        address={contact.address}
        phone={contact.phone}
        email={contact.email}
        onDelete={() => handleDeleteContact(index)}
        onEdit={() => handleEditContact(index)}
      />
      
    ))}
    </div>
  );
};

export default Contacts;