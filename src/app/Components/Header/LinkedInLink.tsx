import React from 'react';
import Link from 'next/link';
import LinkedInLogo from '../../svg/LinkedInLogo';

function LinkedInComponent() {

    return (
        <div className="mx-2">
            <Link href="https://www.linkedin.com/in/derio/">
                <LinkedInLogo />
            </Link>
        </div>
    )
}

export default LinkedInComponent;