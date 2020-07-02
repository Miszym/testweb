import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import MainBanner from './MainBanner/MainBanner';
import TilesContainer from './Tiles/TilesContainer';

const App = () => {
   return (
      <>
         <Header />
         <MainBanner />
         <TilesContainer />
         <Footer />
      </>
   );
};

export default App;
