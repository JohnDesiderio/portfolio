import React from 'react';
import Link from 'next/link';
import GithubLogo from '@/app/svg/GithubLogo';

function GithubComponent() {

    return (
        <div className="mx-2">
            <Link href="https://github.com/JohnDesiderio">
                <GithubLogo/> 
            </Link>
        </div>
    )
}

export default GithubComponent;