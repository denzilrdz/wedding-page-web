import React, { FC } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Styles from './index.module.scss';
import WeddingPic1 from './static/img/weddingpic.png';

export const Home: FC = (props: any) => {
  const cardImages = [
    { pic: WeddingPic1 },
    { pic: WeddingPic1 },
    { pic: WeddingPic1 },
  ];
  return (
    <React.Fragment>
      <div className=''>
        <Header />
      </div>
      <div className='mt-15'>
        <div className=''>
          <div className={`${Styles.logoContainer} flex justify-center`}>
            <div className={`${Styles.logo} mt-16`}></div>
          </div>
        </div>
        <div className='flex justify-center p-8 font-bold text-5xl'>
          THE NEW AGE WEDDING PLANNERS
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {cardImages.map((ele, index) => (
            <div key={index} className='p-5 flex justify-center'>
              <img src={ele.pic} alt='Wedding Pic' className={Styles.cardImg} />
            </div>
          ))}
        </div>
      </div>
      <div className=''>
        <div className='font-bold text-lg text-center'>
          A “Wedding” is much more than just a “Wedding”
        </div>
        <div className='text-sm text-center'>
          -Anurag Singh Founder & Chief Orchestrator – TWP INDIA
        </div>
      </div>
      <div className='pt-7'>
        <div className='font-bold text-lg text-center p-2'>
          “Wedding” is a Glorious celebration amidst family and friends as you
          begin Your Beautiful Journey as “Husband & Wife”
        </div>
        <div className='font-bold text-lg text-center p-2'>
          “Wedding” is a sweetly constructed dream brought to life. It is
          something you will capture, talk and laugh about with your friends and
          family, reminisce about it with your children and look back on through
          the years
        </div>
        <div className='font-bold text-lg text-center p-2'>
          On the hind side, “Wedding” is a synchronised amalgamation of over
          1000+ characters that have been put together so that you as Bride &
          Groom can really soak in moments filled with Love & Laughter
        </div>
        <div className='text-sm text-center p-2'>-Anurag</div>
      </div>
      <div className=''>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
