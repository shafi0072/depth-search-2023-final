import Image from 'next/image';
import visionImg from '../../../../../public/image/vision/vision.png';
import icon from '../../../../../public/image/vision/visionIcon1.png';


const Vision = () => {
  return (
    <div className="pt-28 container mx-auto">
      {/* title section start */}
      <div className='text-center'>
        <h1 className='lg:text-4xl font-bold'>Strategic Plan (Mission & Vision)</h1>
      </div>
      {/* title section end */}
      {/* description section start */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mt-20'>
        <div className="relative">
          <div className='bg-black w-[200px] h-[200px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
          </div>
          <div className='absolute top-52 left-48'>
            <Image src={icon} className="rounded-full"></Image>
          </div>
          <div className="mt-20">
            <h1 className='text-white md:text-3xl'>Vision</h1>
            <p className="md:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div>
        <div className='relative'>
          <div className='bg-black w-[200px] h-[200px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
            <div>
            </div>
          </div>
          <div className='absolute top-52 left-48'>
            <Image src={icon} className="rounded-full"></Image>
          </div>
          <div className="mt-20">
            <h1 className='text-white md:text-3xl'>Mission</h1>
            <p className="md:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div>
        <div className="relative">
          <div className='bg-black w-[200px] h-[200px] mx-auto transform rotate-45 overflow-hidden relative'>
            <div className=' w-[100%] mx-auto transform -rotate-45 absolute scale-[140%]'>
                <Image src={visionImg}></Image>
            </div>
            <div>
            </div>
          </div>
          <div className='absolute top-52 left-48'>
            <Image src={icon} className="rounded-full"></Image>
          </div>
          <div className="mt-20">
            <h1 className='text-white md:text-3xl'>Value</h1>
            <p className="md:text-xl">Lorem ipsum dolor, sit amet <br></br>consectetur adipisicing elit.<br></br>Ea, facere!</p>
          </div>
        </div>
      </div>
      {/* description section end */}
    </div>
  );
};

export default Vision;