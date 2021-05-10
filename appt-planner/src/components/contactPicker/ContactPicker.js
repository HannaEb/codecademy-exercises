import React from "react";

export const ContactPicker = ({ name, onChange, contacts }) => {
  return (
    <select name={name} onChange={onChange}>
      {<option value={''}>Select Contact</option>}
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>{contact}</option>
        );
      })}
    </select>
  );
};
