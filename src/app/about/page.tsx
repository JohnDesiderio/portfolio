import Header from '../Components/Header/Header';

export default function Home() {

  return (
    <div>
    <Header selected={3}/>
    <div className='flex flex-col items-center pt-8'>
      <div className='w-screen px-24'>
        <h1 className='text-5xl font-bold'>About</h1>
        <div className='font-normal mt-4 text-xl'>
          My name is John Desiderio, and I am an aspiring software engineer 
          open to all opportunities. I am originally from Atlanta, 
          GA, but I moved to Statesboro, GA when I was nine. Growing 
          up, I played soccer and tried my hardest never to miss 
          an opportunity to kick a ball. Likewise, I enjoy watching 
          soccer, but my sports interests aren't limited to soccer. 
          I also love to watch college football and Formula 1. After 
          graduating high school, I attended the University of Georgia 
          and spent 4.5 years in Athens. I graduated with a Bachelor 
          of Science in computer science and a Bachelor of Arts in 
          English. Now, I am looking for a position that would allow 
          me to enter the workforce and work on the new, cool, and 
          exciting technology. I maintain my web apps in my free time, 
          but if I am away from the screen, I prefer to read or spend 
          time with friends. If you want to connect with me on 
          Goodreads, you should click the link and befriend me!
        </div>
      </div>
    </div>
    </div> 
  )
}
