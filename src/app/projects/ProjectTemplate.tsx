import React from 'react';

export interface IProjectComponent {
    name: string,
    details: Array<string>,
    link?: string,
    sh: string,
}

const ProjectComponent:React.FC<IProjectComponent> = (props: IProjectComponent) => {
    return (
        <div className='w-screen mt-3'>
            <div className='pl-24'>
                <div className='text-xl'>
                    {props.link !== undefined ? 
                        <div><text className='font-bold'>{props.name}</text>, <a href={props.link} className='text-indigo-500 hover:text-indigo-900'>Link to Project</a></div> :
                        <div><text className='font-bold'>{props.name}</text></div>
                    }
                </div>
                <ul className="list-disc ml-4">
                    {props.details.map((str, idx) =>
                        <li key={`project-${props.sh}-${idx}`}>{str}</li>    
                    )}
                </ul>
            </div>    
        </div>
    )
}

export default ProjectComponent;