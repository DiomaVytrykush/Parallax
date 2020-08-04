import React, { Suspense, lazy } from 'react';
import './App.css'
import Preloader from './Components/Preloader/Preloader'

const AllLayers = lazy(() => import('./Components/AllLayers/AllLayers'));

const App = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <AllLayers />
    </Suspense>
  )
}

export default App;

