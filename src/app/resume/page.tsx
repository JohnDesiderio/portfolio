
import InternOneComponent from './intern-one';
import InternTwoComponent from './intern-two';
import SurveyCaller from './survey-caller';
import ServerCashier from './server-cashier';
import Header from '../Components/Header/Header';

export default function Home() {

  return (
    <div>
      <Header selected={1} />
    <div className='flex flex-col flex-grow pt-8 w-screen'>
      <div className='max-w-screen-xl h-full flex flex-col pl-24'>
        <div>
          <h1 className='text-5xl font-bold'>RÉSUMÉ</h1>
          <div className='overscroll-auto'>
          <h1 className="text-2xl font-bold pt-4">Experience</h1>  
            <InternTwoComponent/>
            <InternOneComponent/>
            <SurveyCaller/>
            <ServerCashier/>
          <h1 className="text-2xl font-bold pt-4">Skills</h1>  
          <ul className="pt-2">
            <li className='font-bold text-lg mr-3 inline-block'>JavaScript</li>
            <li className='font-bold text-lg mr-3 inline-block'>TypeScript</li>
            <li className='font-bold text-lg mr-3 inline-block'>Node.JS</li>
            <li className='font-bold text-lg mr-3 inline-block'>React.js</li>
            <li className='font-bold text-lg mr-3 inline-block'>RxJS</li>
            <li className='font-bold text-lg mr-3 inline-block'>Material-UI</li>
            <li className='font-bold text-lg mr-3 inline-block'>HTML5/CSS3</li>
            <li className='font-bold text-lg mr-3 inline-block'>NextJS</li>
            <li className='font-bold text-lg mr-3 inline-block'>MongoDB</li>
            <li className='font-bold text-lg mr-3 inline-block'>Firebase</li>
            <li className='font-bold text-lg mr-3 inline-block'>SQL Server</li>
            <li className='font-bold text-lg mr-3 inline-block'>UI/UX Design</li>
            <li className='font-bold text-lg mr-3 inline-block'>Full-Stack Development</li>
            <li className='font-bold text-lg mr-3 inline-block'>Front-End Development</li>
            <li className='font-bold text-lg mr-3 inline-block'>Back-End Development</li>
            <li className='font-bold text-lg mr-3 inline-block'>Java</li>
            <li className='font-bold text-lg mr-3 inline-block'>Spring Boot</li>
            <li className='font-bold text-lg mr-3 inline-block'>Python</li>
            <li className='font-bold text-lg mr-3 inline-block'>Flask</li>
            <li className='font-bold text-lg mr-3 inline-block'>Data Science</li>
            <li className='font-bold text-lg mr-3 inline-block'>Recommender Systems</li>
            <li className='font-bold text-lg mr-3 inline-block'>Information Filtering</li>
            <li className='font-bold text-lg mr-3 inline-block'>Cloud Programming</li>
            <li className='font-bold text-lg mr-3 inline-block'>SQL</li>
            <li className='font-bold text-lg mr-3 inline-block'>C++</li>
            <li className='font-bold text-lg mr-3 inline-block'>C</li>
            <li className='font-bold text-lg mr-3 inline-block'>Algorithms</li>
            <li className='font-bold text-lg mr-3 inline-block'>Simulation and Modeling</li>
            <li className='font-bold text-lg mr-3 inline-block'>Simpy</li>
          </ul>
          <h1 className="text-2xl font-bold pt-4">Education</h1>
          <div className="pt-3">
            <div className='text-xl'><text className="font-bold">University of Georgia,</text> August 2018 - December 2022</div>
            <div className="pt-1">Bachelor of Science in Computer Science</div>
            <div>Bachelor of Arts in English</div>
          </div>
          <h1 className="text-2xl font-bold pt-4">Awards</h1>   
          <div className="pt-1">Zell Miller Scholarship (Full Tuition), 2018 - 2022</div>
          <div>Dean's List, Spring 2020 - Fall 2022</div>
                   
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
