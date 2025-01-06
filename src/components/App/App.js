import UserContext from "../UserContext/UserContext";
import Navigation from "../Navigation/Navigation"
import SaladMaker from "../SaladMaker/SaladMaker";

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
