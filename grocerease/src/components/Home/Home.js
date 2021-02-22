// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// export default function Home() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItem button>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItem>
//       </List>
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folders">
//         <ListItem button>
//           <ListItemText primary="Trash" />
//         </ListItem>
//         <ListItemLink href="#simple-list">
//           <ListItemText primary="Spam" />
//         </ListItemLink>
//       </List>
//     </div>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import KitchenIcon from '@material-ui/icons/Kitchen';

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

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
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
      </List>
      
    </div>
  );
}