import React from 'react';

export interface IExperienceComponent {
    company: string,
    position: string,
    time_served: string,
    details: Array<string>,
    sh: string,    
}

const ExperienceComponent:React.FC<IExperienceComponent> = (props: IExperienceComponent) => {
    return (
        <div className='mt-3'>
            <div className='text-xl'><text className="font-bold">{props.position},</text> {props.company}</div>
            <div className='text-lg'>{props.time_served}</div>
            <ul className="list-disc ml-4">
                {props.details.map((str, index) =>
                    <li key={`experience-${props.sh}-${index}`}>{str}</li>    
                )}
            </ul>
        </div>
    )
}

export default ExperienceComponent;