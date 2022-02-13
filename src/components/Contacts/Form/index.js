import { useState } from "react";

function Form({addContacts, contacts}) {

  const [form, setForm] = useState({ fullName: "", phoneNumber: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {

    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }
    addContacts([ ...contacts, form ]);

    setForm ({fullName: "", phoneNumber: ""});
    console.log(form);
  };



  return (
    <form onSubmit={onSubmit}>
      <div>
      <label>Full Name</label>
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullName}
        />
      </div>

      <div>
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phoneNumber}
        />
      </div>

      <div className="button">
        <button>Add</button>
      </div>

    </form>

  );
}

export default Form;
