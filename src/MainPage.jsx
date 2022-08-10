import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";

const MainPage = (props) => {
  const [inputVal, setinputVal] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    description: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setinputVal((pv) => {
      return { ...pv, [name]: value };
    });
  };

  const passNote = () => {
    props.passVal(inputVal);
    setinputVal({
      name: "",
      email: "",
      phone: "",
      age: "",
      description: "",
    });
  };
  // const delNote = (id) => {
  //   setcardContent((allVal) => {
  //     return allVal.filter((arrElem, index) => {
  //       return index !== id;
  //     });
  //   });
  // };

  return (
    <>
      <div className="container">
        <div className="constainer-fluid my-3 mx-5">
          <h1 className="mt-3">Write your details here...</h1>
          {/* // ? Name  */}
          <div className="mb-3 row">
            <label for="staticname" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name here...."
                id="staticname"
                name="name"
                onChange={inputEvent}
                value={inputVal.name}
                autoComplete="off"
              />
            </div>
          </div>
          {/* // ? Email  */}
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="staticEmail"
                placeholder="email@example.com"
                autoComplete="off"
                name="email"
                onChange={inputEvent}
                value={inputVal.email}
              />
            </div>
          </div>
          {/* // ? phone number */}
          <div class="mb-3 row">
            <label for="phone" class="col-sm-2 col-form-label">
              Phone no.
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="+919988776655"
                id="inputPhone"
                autoComplete="off"
                name="phone"
                onChange={inputEvent}
                value={inputVal.phone}
              />
            </div>
          </div>
          {/* // ?Age  */}
          <div class="mb-3 row">
            <label for="age" class="col-sm-2 col-form-label">
              Age
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Age(18-60)"
                id="inputAge"
                name="age"
                onChange={inputEvent}
                value={inputVal.age}
                autoComplete="off"
              />
            </div>
          </div>
          {/* // ? more details  */}
          <div className="mb-3 row">
            <label for="inputdescription" className="col-sm-2 col-form-label">
              More About you
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                rows="5"
                placeholder="Enter description here...."
                className="form-control"
                name="description"
                id="inputdescription"
                onChange={inputEvent}
                value={inputVal.description}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary" onClick={passNote}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default MainPage;
