import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
            <MenuIcon />
            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Link to="/list">
                  List
                  </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/create">
                  Create Work Order
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/calendar">
                  Calendar
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/export">
                  Export
                </Link>
              </MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Capstone Schedule
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;



// - - - - - - - - - - -


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Link } from 'react-router-dom';

 

// function NavBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   function handleClick(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleClose() {
//     setAnchorEl(null);
//   }

//   return (
//     <div>
//       <Button
//         aria-owns={anchorEl ? 'simple-menu' : undefined}
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         <MenuIcon />
//       </Button>
//       <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
//         <MenuItem onClick={handleClose}>
//           <Link to="/list">
//             List
//             </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to="/create">
//             Create Work Order
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to="/calendar">
//             Calendar
//           </Link>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Link to="/export">
//             Export
//           </Link>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }

// export default NavBar;



// -

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from "../CapstoneLogo1x.png";

// export default class Nav extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       menu: false
//     };
//     this.toggleMenu = this.toggleMenu.bind(this);
//   }

//   toggleMenu(){
//     this.setState({ menu: !this.state.menu })
//   }
  
//   render() {

//     const show = (this.state.menu) ? "show" : "" ;

//     return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <img src={logo} width="30" height="30" />
//         <Link to="/" className="navbar-brand">Capstone Schedule</Link>
//         <div className={"collapse navbar-collapse " + show}>
//           <ul className="navbar-nav mr-auto">
//             <li className="navbar-item">
//               <Link to="/list" className="nav-link">List</Link>
//             </li>
//             <li>
//               <Link to="/create" className="nav-link">Add</Link>
//             </li>
//             <li>
//               <Link to="/calendar" className="nav-link">Calendar</Link> 
//             </li>
//             <li>
//               <Link to="/export" className="nav-link">Export</Link> 
//             </li>
//           </ul>  
//         </div>
//       </nav>
//     )
//   }
// } 