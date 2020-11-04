import './App.css';

/* import components */
import Header from './components/layout/Header'
import TabScreens from './components/layout/TabScreens'


function App() {
  return (
    <div className="App">
      <Header />
      <TabScreens />
    </div>
  );
}

export default App;


// icon from https://www.flaticon.com/free-icon/film_1101786?term=film&page=2&position=47
// select from https://www.npmjs.com/package/react-select
//             https://stackoverflow.com/questions/53657560/react-select-cannot-change-color-of-text-in-placeholder-within-text-box
// code source from https://www.youtube.com/watch?v=nrJIJuaZsjA&list=PL_kAgwZgMfWyZ6m8fDwdiwEarr_g6nFxz&index=3
//                  https://upmostly.com/tutorials/how-to-refresh-a-page-or-component-in-react
