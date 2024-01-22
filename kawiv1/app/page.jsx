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
            <h1 className="text-4xl font-bold mb-4">Welcome text here</h1>
            <p className="text-lg">More text here</p>
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
        <div className="flex justify-center items-center min-h-full">
          <div className="flex flex-col justify-center items-center w-full max-w-screen-md p-4 rounded-xl">
            <div className="flex flex-col justify-center items-center w-full rounded-xl p-4" id="outterDiv">
              <p>About us..</p>
              <div className="flex justify-center my-2 h-4/5 w-full rounded-lg text-center text-white overscroll-auto" id="innerLine">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Euismod in pellentesque massa placerat. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Est ante in nibh mauris cursus mattis molestie a. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Et egestas quis ipsum suspendisse. Nam aliquam sem et tortor consequat id porta. Leo integer malesuada nunc vel risus commodo. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Nec feugiat in fermentum posuere urna nec tincidunt. Aliquam etiam erat velit scelerisque in dictum. Pellentesque id nibh tortor id. Sed enim ut sem viverra aliquet eget sit amet tellus.
                </p>
              </div>
              <div className="flex justify-center text-center my-2 h-4/6 w-full rounded-lg">
                <p>
                Enim sed faucibus turpis in eu mi bibendum neque. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Enim sit amet venenatis urna cursus. In fermentum posuere urna nec tincidunt. Purus sit amet volutpat consequat mauris nunc congue. Aliquet bibendum enim facilisis gravida neque convallis. Mi eget mauris pharetra et ultrices neque ornare aenean. Magna fringilla urna porttitor rhoncus dolor purus non enim. Fusce ut placerat orci nulla pellentesque. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Aliquam malesuada bibendum arcu vitae. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus.
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
