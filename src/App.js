
import './App.css';
import Photo from './Components/Profile/Profilephoto/ProfilePhoto'
import FullName from './Components/Profile/Fullname/FullName';
import Address from './Components/Profile/Address/Address';

function App() {
  return (
    <div className="App">
      <Photo />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
