import { useContext } from 'react';
import Usercontext from '../Usercontext/Usercontext';

function Navigation() {
  const user = useContext(Usercontext);

  return (
    <header className="salad-navigation-header">Welcome<span>{user.name}</span></header>
  )
}

export default Navigation