import UserContext from "../Usercontext/Usercontext";
import Navigation from "../Navigation/Navigation"
import SaladMaker from "../Saladmaker/Saladmaker";
import { Footer} from '../common/'

const user = {
  name: 'Lorenzo',
  favourites: [
    'avocado',
    'carrot'
  ]
}

function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation/>
      <SaladMaker/>
    </UserContext.Provider>
  );
}

export default App;
