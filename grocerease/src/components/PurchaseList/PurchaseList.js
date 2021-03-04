// import React, { Component } from 'react';
// import Tab from '@material-ui/core/Tab';
// import PurchaseDataService from '../../service/PurchaseDataService';
// // import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// // import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// class PurchaseList extends Component{

    
//     // constructor(props) {
//     //     super(props)
//     //     // this.refreshCourses = this.refreshCourses.bind(this)
//     // }

//     // componentDidMount() {
//     //     // this.refreshCourses();
//     // }

//     // refreshPurchases() {
//     //     PurchaseDataService.retrieveAllCourses()//HARDCODED
//     //         .then(
//     //             response => {
//     //                 console.log(response);
//     //             }
//     //         )
//     // }

//     // render() {
//     //     return (
//     //         <div className="container">
//     //             <h3>All Courses</h3>
//     //             <div className="container">
//     //                 <table className="table">
//     //                     <thead>
//     //                         <tr>
//     //                             <th>Id</th>
//     //                             <th>Description</th>
//     //                         </tr>
//     //                     </thead>
//     //                     <tbody>
//     //                         {
//     //                             this.state.courses.map(
//     //                                 course =>
//     //                                     <tr key={course.id}>
//     //                                         <td>{course.id}</td>
//     //                                         <td>{course.description}</td>
//     //                                     </tr>
//     //                             )
//     //                         }
//     //                     </tbody>
//     //                 </table>
//     //             </div>
//     //         </div>
//     //     )
//     // }
//     // render() {
//     //     return (
//     //         <div class="row">
//             <div class="column">
//                 <h3>All Purchases</h3>
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Description</th>
//                                 <th>Quantity</th>
//                                 <th>Date Purchased</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>1</td>
//                                 <td>Chicken Nuggets</td>
//                                 <td>2</td>
//                                 <td>3/2/21</td>
//                             </tr>
//                         </tbody>
                        
//                     </table>
//                 </div>
// //     //             <h3>Most Commonly Purchased</h3>
// //     //             <div class="column">
// //     //                 <table className="table">
// //     //                     <thead>
// //     //                         <tr>
// //     //                             <th>Id</th>
// //     //                             <th>Description</th>
// //     //                         </tr>
// //     //                     </thead>
// //     //                     <tbody>
// //     //                         <tr>
// //     //                             <td>1</td>
// //     //                             <td>Chicken Nuggets</td>
// //     //                         </tr>
// //     //                     </tbody>
// //     //                 </table>
// //     //             </div>
// //     //         </div>
//     //         </div>

            
//     //     )
//     // }

// }

// export default PurchaseList
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchBar from "material-ui-search-bar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PurchaseList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="All Purchases" {...a11yProps(0)} />
          <Tab label="Most Commonly Purchased" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <SearchBar
      />   
      <div class="column">
                <h3>All Purchases</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Date Purchased</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Chicken Nuggets</td>
                                <td>2</td>
                                <td>3/2/21</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div class="column">
                <h3>Most Commonly Purchased</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Chicken Nuggets</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
    </div>
      </TabPanel>
    </div>
  );
}
// export default PurchaseList