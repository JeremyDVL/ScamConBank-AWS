import userContext from "./context";
import React from "react";
import { useContext } from "react";
import "../styles.css";

export default function Data() {
  const value = useContext(userContext);
  console.log(value);

  
  return (
    <>
      <div className="bg">
        <center>
          <h1 class="mt-3">User Information</h1>
        </center>
        <div className="body">
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone #</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {value.users.map((user, index) => {
                return (
                  <tr>
                    <td>{index + 1} </td>
                    <td>{user.name} </td>
                    <td>{user.email} </td>
                    <td>{user.phone}</td>
                    <td>{user.password}</td>
                    <td>{user.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}