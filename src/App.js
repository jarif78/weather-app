import Current from './components/Current';
import Locations from './components/Locations';
import Forecast from './components/Forecast';
import AppContext from './context/AppContext';

function App() {
  const appData = {
    city: 'moscow',
    country: 'ru'
  }

  return (
    <AppContext.Provider value = { appData }>
      <div className="container mx-auto lg:w-1/2">
        <h1 className="my-10 text-center text-white font-bold text-5xl">WEATHER-APP</h1>
        <div className="grid grid-cols-2 gap-8">
          <Current />
          <Locations />
          <Forecast />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
