import React, { useState, useEffect } from "react";
import "./UserForm.css";
import img from "../Images/logo.png";
import { useHistory } from "react-router-dom";

function UserForm() {
  var history = useHistory();
  const [fname, setFname] = useState("");
  const [fnameRequired, setFnameRequired] = useState(false);

  const [lname, setLname] = useState("");
  const [lnameRequired, setLnameRequired] = useState(false);

  const [email, setEmail] = useState("");
  const [emailRequired, setEmailRequired] = useState(false);

  const [industry, setIndustry] = useState("");
  const [industryRequired, setIndustryRequired] = useState(false);

  const [services, setServices] = useState("");
  const [servicesRequired, setServicesRequired] = useState(false);

  const [videodemo, setVideodemo] = useState("");
  const [videodemoRequired, setVideodemoRequired] = useState(false);

  const [emailError, setEmailError] = useState("");

  const [required, setRequired] = useState("");

  const [userlist, setUserlist] = useState([]);

  window.onbeforeunload = function () {
    return "You have unsaved data! do you really want to exit?";
  };

  const postData = () => {
    const regEx = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    if (
      fname == "" &&
      lname == "" &&
      email == "" &&
      industry == "" &&
      services == "" &&
      videodemo == ""
    ) {
      setFnameRequired(true);
      setLnameRequired(true);
      setEmailRequired(true);
      setIndustryRequired(true);
      setServicesRequired(true);
      setVideodemoRequired(true);
    } else {
      if (fname == "") {
        setFnameRequired(true);
      } else {
        setFnameRequired(false);
      }
      if (lname == "") {
        setLnameRequired(true);
      } else {
        setLnameRequired(false);
      }
      if (email == "") {
        setEmailRequired(true);
      } else {
        setEmailRequired(false);
      }
      if (industry == "") {
        setIndustryRequired(true);
      } else {
        setIndustryRequired(false);
      }
      if (services == "") {
        setServicesRequired(true);
      } else {
        setServicesRequired(false);
      }
      if (videodemo == "") {
        setVideodemo(true);
      } else {
        setVideodemo(false);
      }
      if (regEx.test(email)) {
        setEmailError("Email is valid");
      } else if (!regEx.test(email)) {
        setEmailError("Email is not valid");
      }
      if (
        fname != "" &&
        lname != "" &&
        email != "" &&
        industry != "" &&
        services != "" &&
        videodemo != "" &&
        regEx.test(email)
      ) {
        handleuser();
      }
    }
  };

  const handleuser = () => {
    let user = {
      fname,
      lname,
      email,
      industry,
      services,
      videodemo,
    };
    setUserlist([...userlist, user]);
    setFname("");
    setLname("");
    setEmail("");
    setIndustry("");
    setServices("");
    setVideodemo("");
    setEmailError("");
  };

  useEffect(() => {
    localStorage.setItem("userlist", JSON.stringify(userlist));
  }, [userlist]);

  return (
    <div>
      <div className="userform-main-div">
        <div className="userform-sub-div">
          <img src={img} alt="" />
          <h3>Contact us</h3>
          <div className="form">
            <div className="name-div">
              <label>
                Name
                {fnameRequired ? (
                  <span style={{ color: "red" }}>*</span>
                ) : (
                  <span className="required">*</span>
                )}
                <input
                  className="form-input"
                  type="text"
                  placeholder="First Name"
                  required
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </label>

              <label style={{ marginTop: "22px" }}>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </label>
            </div>
            <label htmlFor="email">
              Email Address
              {emailRequired ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span className="required">*</span>
              )}
              <input
                id="email"
                className="form-input"
                style={{ width: "100%" }}
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div style={{ color: "red", fontSize: "12px" }}>{emailError}</div>
            </label>

            <label>
              {" "}
              Your Industry{" "}
              {industryRequired ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span className="required">*</span>
              )}
              <select
                value={industry}
                className="form-select"
                required
                id="industry"
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="" selected>
                  Choose One
                </option>
                <option value="webdeveloper">Web Developer</option>
                <option value="ui/uxdesigner">UI/UX Designer</option>
                <option value="softwareengineer">Software Engineer</option>
              </select>
            </label>

            <label>
              {" "}
              Interested Services{" "}
              {servicesRequired ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span className="required">*</span>
              )}
              <select
                value={services}
                className="form-select"
                required
                id="services"
                onChange={(e) => setServices(e.target.value)}
              >
                <option value="" selected>
                  Choose One
                </option>
                <option value="itdevelopment">IT Development</option>
              </select>
            </label>
            <p>
              Would you like a video demo?{" "}
              {videodemoRequired ? (
                <span style={{ color: "red" }}>*</span>
              ) : (
                <span className="required">*</span>
              )}
            </p>
            <div className="form-video-demo">
              <input
                type="radio"
                name="videodemo"
                required
                value="true"
                onChange={(e) => setVideodemo(e.target.value)}
              />
              <label>Yes</label>
              <input
                type="radio"
                name="videodemo"
                required
                value="false"
                onChange={(e) => setVideodemo(e.target.value)}
              />
              <label>No</label>
            </div>
          </div>
          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={postData}
          />
          <div></div>
          {required == "" ? (
            <p style={{ color: "red", fontSize: "13px" }}>* Mandatory Field</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default UserForm;
