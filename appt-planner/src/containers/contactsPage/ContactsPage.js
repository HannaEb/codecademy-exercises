import React, { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = ( { contacts, addContact } ) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  const [alert, setAlert] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
      setAlert('');
    } else {
      setAlert('This contact already exists!')
    }
  };

  useEffect(() => {
    const result = contacts.find(contact => contact.name === name);
    if (result !== undefined) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [contacts, name, duplicate]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={setName}
                    phone={phone} setPhone={setPhone}
                    email={email} setEmail={setEmail}
                    handleSubmit={handleSubmit}
                    alert={alert}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
