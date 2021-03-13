import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KitchenIcon from '@material-ui/icons/Kitchen';
import PurchaseList from '../PurchaseList/PurchaseList';
// import PurchaseList from './components/PurchaseList'
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function PurchaseHistory() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PurchaseList/>
      {/* <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery 1" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery 2" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery 3" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery 4" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery 5" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <KitchenIcon />
          </ListItemIcon>
          <ListItemText primary="Grocery 6" />
        </ListItem>
      </List> */}
      
    </div>
  );
}