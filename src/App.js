import './App.css';
import Baitap2 from './baitap2';
import Baitap1 from './baitap1';
import Baitap3 from './baitap3';
import RenderingElements from './rendering-elements';
import HandlingEvents from './handling-events';
import State from './state';
import ChangeColorCar from './changeColorCar';
import ListKey from './list-key';
import Example from './list-key/example';
import Communication from './communication';
import LiftingStateUpCart from './shopping-cart';
import Home from './user-management'


function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap3 /> */}
      <RenderingElements/>
      <hr/>
      <HandlingEvents/>
      <hr/>
      <State/>
      <hr/>
      <ChangeColorCar/>
      <hr/>
      <ListKey/>
      <hr/>
      <Example/>
      <hr/>
      <Communication/>
      <hr/>
      <LiftingStateUpCart/>
      <hr/>
      <Home/>
    </div>
  );
}

export default App;
