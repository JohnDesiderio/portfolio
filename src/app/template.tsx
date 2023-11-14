import React from 'react';

interface ITemplateProps {
    children: JSX.Element,
    header: number,
}

const template:React.FC<ITemplateProps> = (props: ITemplateProps) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center w-screen">
                {props.children}
            </div>
        </main>
    )
}

export default template;