import './style.css';
const ImageCard = () => {
    return (
      <>
        <div className="w-[350px] h-[400px] border-solid border-black mx-4 relative">
          <img
            src="/img/10.jpg" // Replace with your image source
            alt="Image"
            className="w-full h-full object-cover"
          />
          {/* <p className="hidden absolute inset-0 items-center justify-center bg-black bg-opacity-50 text-white text-lg hover:flex transition-opacity duration-300"> */}
            <p className='layer'>
            <h3>Our Galaxy</h3>
          </p>
        </div>
      </>
    );
  };
  
  export default ImageCard;
  