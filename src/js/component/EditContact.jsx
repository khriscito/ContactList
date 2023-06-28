import React, { useContext, useState } from "react";
import { contactContext } from "./Home.jsx";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = () => {
  const navigate = useNavigate();
  const { contacts, setContacts } = useContext(contactContext);
  const { id } = useParams();

  // Busca el contacto correspondiente al ID en la lista de contactos
  const contact = contacts.find((c, index) => index === parseInt(id));

  // Estado local para almacenar los valores actualizados del contacto
  const [fullname, setFullname] = useState(contact.fullname);
  const [address, setAddress] = useState(contact.address);
  const [phone, setPhone] = useState(contact.phone);
  const [email, setEmail] = useState(contact.email);

  const handleUpdateContact = () => {
    // Crea un nuevo objeto de contacto con los valores actualizados
    const updatedContact = {
      fullname: fullname,
      address: address,
      phone: phone,
      email: email,
    };

    // Actualiza el contacto existente en la lista de contactos
    const updatedContacts = [...contacts];
    updatedContacts.splice(parseInt(id), 1, updatedContact);
    setContacts(updatedContacts);

    // Navega de regreso a la página de contactos
    navigate("/Contacts");
  };

  return (
    <div>
      <h2>Editar contacto</h2>
      <form>
        <div>
          <label>Nombre completo:</label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleUpdateContact}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
};

export default EditContact;

