import { useContext } from 'react';
import UserContext from '../UserContext/UserContext';

function Navigation() {
  const user = useContext(UserContext);

  return (
    <header className="salad-navigation-header">Welcome<span>{user.name}</span></header>
  )
}

export default Navigation