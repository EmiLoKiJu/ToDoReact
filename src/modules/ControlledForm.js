import { useState } from "react"
const Form = () => {
  const [state, setState] = useState({
    fname: "",
    lname: ""
  });

  const handleChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <>
      <h1>Controlled Form</h1>
      <form>
        <label>
          First Name:{" "}
          <input name="fname" type="text" value={state.fname} onChange={handleChange} />
        </label>
        <label>
          Last Name:{" "}
          <input 
            name="lname" 
            type="text" 
            value={state.lname} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Your Message:
          <textarea
            name="message"
            value={state.message}
            onChange={handleChange}
          />
        </label>
      </form>
      <h5>
        Name: {state.fname} {state.lname}
      </h5>
      <p>Message: {state.message}</p>
    </>
  );
};
export default Form;
