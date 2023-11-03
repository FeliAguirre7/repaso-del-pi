import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const validate = (form) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setErrors({ ...errors, email: "todo ok" });
    } else {
      setErrors({ ...errors, email: "error en el mail" });
    }
    if (form.email === "") setErrors({ ...errors, email: "Email vacío" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const response = axios
      .post("http://localhost:3001/users", form)
      .then((res) => alert(res));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={form.email}
          onChange={changeHandler}
          name="email"
        ></input>
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        ></input>
      </div>

      <div>
        <label>Phone: </label>
        <input
          type="text"
          value={form.phone}
          onChange={changeHandler}
          name="phone"
        ></input>
      </div>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
