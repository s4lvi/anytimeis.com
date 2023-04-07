import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit, successMessage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, email, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-xl font-bold mb-2 text-gray-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-xl font-bold mb-2 text-gray-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-xl font-bold mb-2 text-gray-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className="bg-white appearance-none border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
      {successMessage && (
        <div className="bg-green-500 text-white p-4 rounded mt-4">{successMessage}</div>
      )}
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  successMessage: PropTypes.string,
};

export default ContactForm;
