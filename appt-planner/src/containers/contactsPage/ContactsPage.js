import React, { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = ( { contacts, addContact } ) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      console.log(name)
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    if (contacts.includes(name)) {
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
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
