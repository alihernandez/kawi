import Image from 'next/image';


const images = [
  'https://cdn.pixabay.com/photo/2016/11/24/20/30/floor-plan-1857175_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/07/14/09/04/texture-1516370_1280.jpg',
  'https://cdn.pixabay.com/photo/2015/09/09/20/40/drawing-933207_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/04/21/19/13/roof-truss-3339206_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/10/16/16/51/miniature-figure-1745770_1280.jpg',
];

export const metadata = {
  title: 'Kawi Home Page',
};

const Home = () => {
  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <div className="hero-section flex justify-center items-center text-white text-center bg-center bg-cover" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/23/15/04/wooden-floor-1853405_1280.jpg")' }}>
          <div>
            <h1 className="text-4xl font-bold mb-4">Welcome to Kawi</h1>
            <p className="text-lg">Let's build something remarkable together.</p>
          </div>
        </div>

        {/* Images above outterDiv */}
        <div className="flex justify-center items-center w-full mt-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="m-2">
              <Image src={imageUrl} alt={`Image ${index + 1}`} width={200} height={200} />
            </div>
          ))}
        </div>

        {/* Content inside outterDiv */}
        <div className="flex justify-center items-center min-h-full mt-4 mb-8">
          <div className="flex flex-col justify-center items-center w-full max-w-screen-md p-4 rounded-xl">
            <div className="flex flex-col justify-center items-center w-full rounded-xl p-4" id="outterDiv">
              <p>About us..</p>
              <div className="flex justify-center my-2 h-4/5 w-full rounded-lg text-center text-white overscroll-auto" id="innerLine">
                <p>
                Kawi prides itself in maintaining your home&apos;s integrity to the Rocky Mountain standard, elevated. 
                </p>
              </div>
              <div className="flex justify-center text-center my-2 h-4/6 w-full rounded-lg">
                <p>
                With in-house experienced techs and great industry relationships, we&apos;ll see to it that your projects, tasks and requests are met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
