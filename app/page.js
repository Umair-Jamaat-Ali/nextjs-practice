import Counter from "./(components)/counter/Counter";
import ImageCard from "./(components)/imageCard/ImageCard";


export default function Home() {
  const login = false;

  return (
   <>
   <div className='text-amber-600'>Hello World</div>
   <ImageCard/>

   <div className="m-10">
    { login ? <button>logout</button>
  :
    <button>login</button>
  }
    
    <h1 className="m-6 text-xl font-bold">Counter Handler App</h1>
    <Counter/>
    
   </div>
   </>
  )
}
