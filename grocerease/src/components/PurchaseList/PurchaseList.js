import React, { Component } from 'react';
import PurchaseDataService from '../../service/PurchaseDataService';
class PurchaseList extends Component{
    // constructor(props) {
    //     super(props)
    //     // this.refreshCourses = this.refreshCourses.bind(this)
    // }

    // componentDidMount() {
    //     // this.refreshCourses();
    // }

    // refreshPurchases() {
    //     PurchaseDataService.retrieveAllCourses()//HARDCODED
    //         .then(
    //             response => {
    //                 console.log(response);
    //             }
    //         )
    // }

    // render() {
    //     return (
    //         <div className="container">
    //             <h3>All Courses</h3>
    //             <div className="container">
    //                 <table className="table">
    //                     <thead>
    //                         <tr>
    //                             <th>Id</th>
    //                             <th>Description</th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {
    //                             this.state.courses.map(
    //                                 course =>
    //                                     <tr key={course.id}>
    //                                         <td>{course.id}</td>
    //                                         <td>{course.description}</td>
    //                                     </tr>
    //                             )
    //                         }
    //                     </tbody>
    //                 </table>
    //             </div>
    //         </div>
    //     )
    // }
    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
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
                                <td>Learn Full stack with Spring Boot and Angular</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default PurchaseList