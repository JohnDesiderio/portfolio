import Header from '../Components/Header/Header';
import SpotifyMixer from './SpotifyMixer';
import RecommenderSystem from './RecommenderSystem';

export default function Home() {

  return (
    <div>
      <Header selected={2} />
    <div className='flex flex-row items-center pt-8'>
      <div>
        <h1 className="text-5xl font-bold pl-24">PROJECTS</h1>
        <SpotifyMixer/>
        <RecommenderSystem/>
      </div>
    </div>
    </div>
  )
}
