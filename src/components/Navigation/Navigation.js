import React from 'react';
import { createUseStyles } from 'react-jss';

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
  const classes = useStyles();
    return (
    <div className={classes.wrapper}>
      Welcome, Lorenzo
    </div>
  )
}

export default Navigation;