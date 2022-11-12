import React from "react";
import { Link } from "react-router-dom";
import "./UserTable.css";

function UserTable() {
  window.onbeforeunload = function () {
    return "You have unsaved data! do you really want to exit?";
  };
  return (
    <div>
      <div className="userlist-main-div">
        <div className="userlist-sub-div">
          <div className="userlist-table">
            <p>
              Add New{" "}
              <span>
                <Link
                  to="/userform"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  +
                </Link>
              </span>
            </p>
            <hr></hr>
            <table className="users">
              <tr>
                <th>
                  <input type="checkbox"></input>
                </th>
                <th>Name</th>
                <th>Email ID</th>
                <th>Industry</th>
                <th>Interested Services</th>
                <th>Video Demo</th>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Alan Cooper</td>
                <td>alancooper1@gmail.com</td>
                <td>Web Developer</td>
                <td>IT Development</td>
                <td>
                  <span>Yes</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Alan Cooper</td>
                <td>alancooper1@gmail.com</td>
                <td>Web Developer</td>
                <td>IT Development</td>
                <td>
                  <span>Yes</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Alan Cooper</td>
                <td>alancooper1@gmail.com</td>
                <td>Web Developer</td>
                <td>IT Development</td>
                <td>
                  <span>Yes</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Alan Cooper</td>
                <td>alancooper1@gmail.com</td>
                <td>Web Developer</td>
                <td>IT Development</td>
                <td>
                  <span>Yes</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Alan Cooper</td>
                <td>alancooper1@gmail.com</td>
                <td>Web Developer</td>
                <td>IT Development</td>
                <td>
                  <span>No</span>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox"></input>
                </td>
                <td>Alan Cooper</td>
                <td>alancooper1@gmail.com</td>
                <td>Web Developer</td>
                <td>IT Development</td>
                <td>
                  <span>No</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
