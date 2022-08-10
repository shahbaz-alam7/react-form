import { useState } from "react";

const Card = (props) => {
  let noVal = true;
  let arr = props.data;
  let length = arr.length;
  console.log(length);
  if (length !== 0) {
    console.log("empty array");
    noVal = false;
  }
  return (
    <>
      <div className="container">
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">S.no</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((val, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.description}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        {noVal ? (
          <h1 className="text-center my-4">
            We have no data to be displayed...
          </h1>
        ) : null}
      </div>
    </>
  );
};
export default Card;
