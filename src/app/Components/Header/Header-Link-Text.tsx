import React from 'react';
import Link from 'next/link';

interface IHeaderLinkItemProps {
    href: string,
    text: string,
    selected: boolean,
}

const HeaderLinkText:React.FC<IHeaderLinkItemProps> = (
    props: IHeaderLinkItemProps,
) => {    
    return (
        <div className="mx-2">
            {!props.selected ?
                    <Link href={props.href} className="mx-0 hover:text-yellow-900">
                        {props.text}
                    </Link>
                :
                <div className="font-bold">
                    {props.text}
                </div>
            }
        </div>
    )



}

export default HeaderLinkText;