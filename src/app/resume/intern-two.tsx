import React from 'react';
import ExperienceComponent, { IExperienceComponent } from './Experience-Component';

const company = 'NCR Corporation';
const position = 'Software Engineer Intern';
const time_served = 'May 2022 - August 2022';
const details = [
    'Worked in a team with eight colleagues to build a peripheral simulator application using the Agile methodology',
    'Constructed the peripheral simulator on the TypeScript language and React framework',
    'Participated in weekly meetings with senior software engineers to assess the team’s progress and direction',
    'Utilized Cypress and Jest testing to ensure a smooth development of the application',
    'Presented the final product as a model for the development of other products in a companywide intern expo',
]


const InternTwoComponent:React.FC<{}> = () => {
    const props:IExperienceComponent = {
        company: company,
        position: position,
        time_served: time_served,
        details: details,
        sh: 'intern-two',
    }
    
    return (<ExperienceComponent {...props}/>)
}

export default InternTwoComponent;