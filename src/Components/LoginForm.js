import React from "react";

const LoginForm = ({ handleLogInSubmit, handleChange, formData }) => {
  return (
    <form className="flip-card__form" onSubmit={handleLogInSubmit}>
      <input
        className="flip-card__input"
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="username"
      />
      <input
        className="flip-card__input"
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        autoComplete="current-password"
      />
      <button className="flip-card__btn" type="submit">
        Confirm!
      </button>
    </form>
  );
};

export default LoginForm;
