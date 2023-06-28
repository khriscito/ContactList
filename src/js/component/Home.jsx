import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import Contacts from "./Contacts.jsx";
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditContact from "./EditContact.jsx"

export const contactContext = createContext()


const Home = () => {
  const [contacts, setContacts] = useState([]);
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };
  
  return (
    <contactContext.Provider value={{ contacts, addContact, deleteContact, setContacts}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </contactContext.Provider>
  );
};

export default Home;

