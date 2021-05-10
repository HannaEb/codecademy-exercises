import React from "react";

export const ContactPicker = ({ contacts, onChange, name }) => {
  return (
    <select name={name} onChange={onChange}>
      {contacts.map(contact => {
        return (
          <option value={contact} key={contact}>{contact}</option>
        )
      })}
    </select>
  );
};
