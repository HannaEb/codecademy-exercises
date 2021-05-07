import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contact={contact} setContact={setContact}
                          title={title} setTitle={setTitle}
                          date={date} setDate={setDate}
                          time={time} setTime={setTime}
                          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
