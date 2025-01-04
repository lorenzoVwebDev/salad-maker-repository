import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    borderBottom: 'solid 1px black',
    height: 'calc(2vw + 2vh)',
    paddingRight: '2vw'
  }
})
function Navigation() {
  const user = useContext(UserContext);
  const classes = useStyles();
    return (
    <div className={classes.wrapper}>
      Welcome, {user.name}
    </div>
  )
}

export default Navigation;