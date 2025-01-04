import './App.css';
import Navigation from '../Navigation/Navigation';
import Saladmaker from '../Saladmaker/Saladmaker.js';
import Saladsummary from '../Saladsummary/Saladsummary';
import UserContext from '../User/User.js';

const user = {
  name: 'Lorenzo',
  favourites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <div>
      <UserContext.Provider value={user}>
      <Navigation/>
      <Saladmaker/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
