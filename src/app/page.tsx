import Image from 'next/image';
import Biography from './Components/Biography/biography';
import ProfilePic from './Images/john-desiderio.png';
import Header from './Components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header selected={0} />
    <div className='flex flex-row items-center pt-8 px-24'>
      <Biography/>
      <Image
        src={ProfilePic}
        width='240'
        height='320'
        alt='Profile Image'
        priority
      />
    </div>
    </div>
  )
}
