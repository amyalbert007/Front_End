import React, { Component } from 'react'
import FlatService from '../services/FlatService'

class ListFlatComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            flat : []
        }
        this.addFlat = this.addFlat.bind(this);
        this.editFlat = this.editFlat.bind(this);
        this.deleteFlat = this.deleteFlat.bind(this);
    }

    deleteFlat(flatId) {
        FlatService.deleteFlatById(flatId).then( res => {
            this.setState({flat: this.state.flat.filter(flat => flat.flatId !== flatId)});
        });
    }

    viewFlat(flatId) {
        this.props.history.push(`/view-flat/${flatId}`);
    }

    editFlat(flatId) {
        this.props.history.push(`/update-flat/${flatId}`);  
    }

    componentDidMount() {
        FlatService.viewAllFlat().then((res) => {
            this.setState({ flat: res.data});
        });
    }

    addFlat(){
        this.props.history.push('/add-flat/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Flat List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFlat}> Add Flat</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Flat Id </th>
                                <th> Flat Cost </th>
                                <th> Flat Availability </th>
                            {/* <th> Flat Address Id </th> */}
                                <th> House No </th>
                                <th> Street </th>
                                <th> City </th>
                                <th> State </th>
                                <th> Pin </th>
                                <th> Country </th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.flat.map(
                                    flat=>
                                    <tr key = {flat.flatId}>
                                        <td> { flat.flatId} </td>
                                        <td> { flat.cost} </td>
                                        <td> { flat.availability} </td>
                                       {/* <td> { flat.flatAddress.addressId} </td> */}
                                        <td> { flat.flatAddress.houseNo} </td>
                                        <td> { flat.flatAddress.street} </td>
                                        <td> { flat.flatAddress.city} </td>
                                        <td> { flat.flatAddress.state} </td>
                                        <td> { flat.flatAddress.pin} </td>
                                        <td> { flat.flatAddress.country} </td>
                                        <td>
                                            <button onClick={ () => this.editFlat(flat.flatId)} className="btn btn-info">Update </button>
                                            <button  style={{marginLeft: "10px"}} onClick={ () => this.deleteFlat(flat.flatId)} className="btn btn-danger">Delete  </button>
                                            <button  style={{marginLeft: "10px"}} onClick={ () => this.viewFlat(flat.flatId)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListFlatComponent

