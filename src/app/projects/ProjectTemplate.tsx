import React from 'react';

export interface IProjectComponent {
    name: string,
    details: Array<string>,
    link?: string,
    key: string,
}

const ProjectComponent:React.FC<IProjectComponent> = (props: IProjectComponent) => {
    return (
        <div className='w-screen mt-3' key={props.key}>
            <div className='pl-24'>
                <div className='text-xl'>
                    {props.link !== undefined ? 
                        <div><text className='font-bold'>{props.name}</text>, <a href={props.link} className='text-indigo-500 hover:text-indigo-900'>Link to Project</a></div> :
                        <div><text className='font-bold'>{props.name}</text></div>
                    }
                </div>
                <ul className="list-disc ml-4">
                    {props.details.map(str =>
                        <li>{str}</li>    
                    )}
                </ul>
            </div>    
        </div>
    )
}

export default ProjectComponent;