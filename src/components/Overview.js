import React, { useRef } from 'react';
import './Overview.css';
import { useReactToPrint } from 'react-to-print';

class Overview extends React.Component {
    render() {
        const {
            firstName, 
            lastName, 
            phoneNumber, 
            email, 
            schoolName, 
            fieldOfStudy,
            schoolStart,
            schoolEnd,
            positionName,
            positionTitle,
            positionStart,
            positionEnd,
            positionDescription,
            isHidden
            } = this.props
        
            if(isHidden) {
                return ''
            }
        return (

                    <div className="cv">
                        <h2 className="title">CV</h2>
                        <h3>General Information</h3>
                        <ul>
                            <li id={firstName.id}>First Name: {firstName.text}</li>
                            <li id={lastName.id}>Last Name: {lastName.text}</li>
                            <li id={phoneNumber.id}>Phone Number: {phoneNumber.text}</li>
                            <li id={email.id}>Email: {email.text}</li>
                        </ul>
                        <h3>Education</h3>
                        <ul>
                            <li id={schoolName.id}>School: {schoolName.text}</li>
                            <li id={fieldOfStudy.id}>Field of Study: { fieldOfStudy.text }</li>
                            <li id={schoolStart.id}>From: {schoolStart.text}</li>
                            <li id={schoolEnd.id}>To: {schoolEnd.text}</li>
                        </ul>
                        <h3>Experience</h3>
                        <ul>
                            <li id={positionName.id}>Company Name: {positionName.text}</li>
                            <li id={positionTitle.id}>Position Title: {positionTitle.text}</li>
                            <li id={positionStart.id}>From: {positionStart.text}</li>
                            <li id={positionEnd.id}>To: {positionEnd.text}</li>
                            <li id={positionDescription.id}>Description: {positionDescription.text}</li>
                        </ul>
                    </div>
        )
    }
}

const PrintOverview = ({
    firstName, 
    lastName, 
    phoneNumber, 
    email, 
    schoolName, 
    fieldOfStudy,
    schoolStart,
    schoolEnd,
    positionName,
    positionTitle,
    positionStart,
    positionEnd,
    positionDescription,
    isHidden
    }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    if(isHidden) {
        return ''
    }

    return(
        <div className="completed-cv">
            <Overview
                ref={componentRef}
                firstName={firstName}
                lastName={lastName}
                phoneNumber={phoneNumber}
                email={email}
                schoolName={schoolName}
                fieldOfStudy={fieldOfStudy}
                schoolStart={schoolStart}
                schoolEnd={schoolEnd}
                positionName={positionName}
                positionTitle={positionTitle}
                positionStart={positionStart}
                positionEnd={positionEnd}
                positionDescription={positionDescription}
                isHidden={isHidden} 
            />
            <button onClick={handlePrint} className="print">Print CV</button>
        </div>
    )
}


export { PrintOverview }