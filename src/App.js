import React, { Component } from "react";
import { PrintOverview }  from "./components/Overview";
import uniqid from "uniqid";
import './App.css'


class App extends Component {
  constructor() {
    super();

    this.state = {
      firstName: { text: '', id: uniqid() },
      lastName: { text: '', id: uniqid() },
      phoneNumber: { text: '', id: uniqid() },
      email: { text: '', id: uniqid() },
      displayFirstName: '',
      displayLastName: '',
      displayPhoneNumber: '',
      displayEmail: '',
      schoolName: { text: '', id: uniqid() },
      fieldOfStudy: { text: '', id: uniqid() },
      schoolStart: { text: '', id: uniqid() },
      schoolEnd: { text: '', id: uniqid() },
      displaySchoolName: '',
      displayFieldOfStudy: '',
      displaySchoolStart: '',
      displaySchoolEnd: '',
      positionName: { text: '', id: uniqid() },
      positionTitle: { text: '', id: uniqid() },
      positionStart: { text: '', id: uniqid() },
      positionEnd: { text: '', id: uniqid() },
      positionDescription: { text: '', id: uniqid() },
      displayPositionName: { text: '', id: uniqid() },
      displayPositionTitle: { text: '', id: uniqid() },
      displayPositionStart: { text: '', id: uniqid() },
      displayPositionEnd: { text: '', id: uniqid() },
      displayPositionDescription: { text: '', id: uniqid() },
      isHidden: true,

    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: {
        text: value,
        id: this.state[name].id
      }
    })
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
      displayFirstName: this.state.firstName,
      displayLastName: this.state.lastName,
      displayPhoneNumber: this.state.phoneNumber,
      displayEmail: this.state.email,
      displaySchoolName: this.state.schoolName,
      displayFieldOfStudy: this.state.fieldOfStudy,
      displaySchoolStart: this.state.schoolStart,
      displaySchoolEnd: this.state.schoolEnd,
      displayPositionName: this.state.positionName,
      displayPositionStart: this.state.positionStart,
      displayPositionTitle: this.state.positionTitle,
      displayPositionEnd: this.state.positionEnd,
      displayPositionDescription: this.state.positionDescription,
      isHidden: false
    })
  };



  render() {
    const { 
      displayTask, 
      firstName, 
      displayFirstName, 
      lastName,
      displayLastName,
      phoneNumber,
      displayPhoneNumber,
      email,
      displayEmail, 
      schoolName,
      displaySchoolName,
      fieldOfStudy,
      displayFieldOfStudy,
      schoolStart,
      displaySchoolStart,
      schoolEnd,
      displaySchoolEnd,
      positionName,
      displayPositionName,
      positionTitle,
      displayPositionTitle,
      positionStart,
      displayPositionStart,
      positionEnd,
      displayPositionEnd,
      positionDescription,
      displayPositionDescription,
      isHidden
    } = this.state
    

    return (
      <div>
        <h1>CV APPLICATION</h1>
        <form onSubmit={ this.onSubmitTask }>
          <h2>General Information</h2>
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text"
            value={ firstName.text }
            onChange={ this.handleChange }
            placeholder="First Name"
            name="firstName"
            id="firstName"
            required
          />
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text"
            value={ lastName.text }
            onChange={ this.handleChange }
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            required
          />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input 
            type="text"
            value={ phoneNumber.text }
            onChange={ this.handleChange }
            placeholder="Phone Number"
            name="phoneNumber"
            id="phoneNumber"
            required
          />
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            value={ email.text }
            onChange={ this.handleChange }
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <h2>Education</h2>
          <label htmlFor="schoolName">School Name:</label>
          <input 
            type="text"
            value={ schoolName.text }
            onChange={ this.handleChange }
            placeholder="School Name"
            name="schoolName"
            id="schoolName"
            required
          />
          <label htmlFor="fieldOfStudy">Field of Study:</label>
          <input 
            type="text"
            value={ fieldOfStudy.text }
            onChange={ this.handleChange }
            placeholder="Field of Study"
            name="fieldOfStudy"
            id="fieldOfStudy"
            required
          />
          <label htmlFor="schoolStart">From: </label>
          <input 
            type="date"
            value={ schoolStart.text }
            onChange={ this.handleChange }
            name="schoolStart"
            id="schoolStart"
            required
          />
          <label htmlFor="schoolEnd">To:</label>
          <input 
            type="date"
            value={ schoolEnd.text }
            onChange={ this.handleChange }
            name="schoolEnd"
            id="schoolEnd"
            required
          />
          <h2>Experience</h2>
          <label htmlFor="positionName">Company Name:</label>
          <input 
            type="text"
            value={ positionName.text }
            onChange={ this.handleChange }
            placeholder="Company Name"
            name="positionName"
            id="positionName"
            required
          />
          <label htmlFor="positionTitle">Position title:</label>
          <input 
            type="text"
            value={ positionTitle.text }
            onChange={ this.handleChange }
            placeholder="Position Title"
            name="positionTitle"
            id="positionTitle"
            required
          />
          <label htmlFor="positionStart">From:</label>
          <input 
            type="date"
            value={ positionStart.text }
            onChange={ this.handleChange }
            name="positionStart"
            id="positionStart"
            required
          />
          <label htmlFor="positionEnd">To:</label>
          <input 
            type="date"
            value={ positionEnd.text }
            onChange={ this.handleChange }
            name="positionEnd"
            id="positionEnd"
            required
          />
          <label htmlFor="positionDescription">Description:</label>
          <textarea
            value={ positionDescription.text }
            onChange={ this.handleChange }
            name="positionDescription"
            id="positionDescription"
            placeholder="Enter your description"
            required
          >
          </textarea>
          <button type="submit" >Create CV</button>
        </form>
        <PrintOverview 
          task={ displayTask } 
          firstName={ displayFirstName } 
          lastName={ displayLastName } 
          phoneNumber={ displayPhoneNumber }
          email={ displayEmail }
          schoolName={ displaySchoolName }
          fieldOfStudy={ displayFieldOfStudy }
          schoolStart={ displaySchoolStart }
          schoolEnd={ displaySchoolEnd }
          positionName={ displayPositionName }
          positionTitle={ displayPositionTitle }
          positionStart={ displayPositionStart }
          positionEnd={ displayPositionEnd }
          positionDescription={ displayPositionDescription }
          isHidden={ isHidden }
        />
      </div>
    );
  }
}

export default App;
