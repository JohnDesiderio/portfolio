import React from 'react';
import ExperienceComponent, { IExperienceComponent } from './Experience-Component';

const company = 'NCR Corporation';
const position = 'Software Engineer Intern';
const time_served = 'May 2021 - August 2021';
const details = [
    'Worked in a team with four colleagues to implement a progressive web application using the Agile methodology',
    'Created the web application based on consultation with a UX designer',
    'Familiarized myself with React, Typescript, and NestJS to build a working web application',
    'Conveyed the importance and utility of the Progressive Web Application in a companywide intern expo',
]


const InternOneComponent:React.FC<{}> = () => {
    const props:IExperienceComponent = {
        company: company,
        position: position,
        time_served: time_served,
        details: details,
    }
    
    return (<ExperienceComponent {...props}/>)
}

export default InternOneComponent;