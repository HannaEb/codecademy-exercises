import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker.js';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContacts = () => {
    return contacts.map(contact => contact.name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker name='contact' value={contact} contacts={getContacts()} onChange={e => setContact(e.target.value)} 
              placeholder='Contact Name'  required />
      <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} 
              placeholder='Appointment Title' required />
      <input type='date' name='date' value={date} onChange={e => setDate(e.target.value)} min={getTodayString()}
              placeholder='Date' required />
      <input type='time' name='time' value={time} onChange={e => setTime(e.target.value)} 
              placeholder='Time' required />
      <input type='submit' value='Add Appointment' />
    </form>
  );
};
