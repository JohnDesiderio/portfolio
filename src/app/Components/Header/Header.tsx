import React from 'react';
import HeaderLinkItem from './Header-Link-Text';
import LinkedInComponent from './LinkedInLink';
import GithubComponent from './GithubLink';
import JohnDesiderio from './John-Desiderio'

interface HeaderProps {
    selected: number,
}

const Header:React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className='flex flex-row w-screen'>
                <JohnDesiderio selected={props.selected === 0} />
                <div className='w-3/5'>
                    <div className='float-right'>
                        <div className="flex flex-row pr-12">
                            <HeaderLinkItem href='/resume' text='Resume' selected={props.selected === 1} />
                            <HeaderLinkItem href='/projects' text='Projects'  selected={props.selected === 2} />
                            <HeaderLinkItem href='/about' text='About' selected={props.selected === 3} />
                            <HeaderLinkItem href='/contact-me' text='Contact Me' selected={props.selected === 4} />
                            <LinkedInComponent/>
                            <GithubComponent/> 
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default Header;