import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}
              placeholder='Your Name' required />
      <input type='tel' name='phone' value={phone} onChange={e => setPhone(e.target.value)}
              pattern='((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}' placeholder='Phone Number' required />
      <input type='email' name='email' value={email} onChange={e => setEmail(e.target.value)}
              pattern="^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$" placeholder='Your Email' required />
      <input type='submit' value='Add Contact' />
    </form>
  );
};
