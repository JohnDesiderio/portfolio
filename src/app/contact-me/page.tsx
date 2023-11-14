import Header from '../Components/Header/Header';

export default function Home() {

  return (
    <div>
      <Header selected={4}/>
    <div className='flex flex-col items-center pt-8'>
      <div className='w-screen px-24 mb-4'>
        <h1 className='text-5xl font-bold'>
          Contact Me
        </h1>
      </div>
      <form action="mailto:johnfrancisdesiderio@gmail.com" method='post' encType='text/plain' id='sendmemail'>
        <div className='flex flex-col items-center bg-gray-400 p-5'>
          Name: <input type='text' name='name'></input>
          E-mail: <input type='text' name='mail'></input> 
          Comment: <input type='text' name='comment' size={100}></input>
        </div>
      </form>
      <div>
        <button 
          type="submit"
          form="sendmemail"
          className="h-10 w-20 bg-gray-200 mx-2 mt-3 hover:bg-yellow-500"
        >Submit</button>
        <button 
          type="reset"
          form="sendmemail"
          className="h-10 w-20 bg-gray-200 mx-2 mt-3 hover:bg-yellow-500"
        >Reset</button>
      </div>
    </div>
    </div>
  )
}
