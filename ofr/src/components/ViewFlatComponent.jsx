import React, { Component } from 'react'
import FlatService from '../services/FlatService'

class ViewFlatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            flatId: this.props.match.params.flatId,
            flat: { flatAddress: {} }
            
        }
    }

    componentDidMount() {
        FlatService.viewFlat(this.state.flatId).then( res=> {
            this.setState({flat: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Flat Details</h3>
                    <div className = "card-body">
                    <div className="row">
                            <label> Flat Id: </label>
                            <div> { this.state.flat.flatId }</div>
                        </div>
                        <div className="row">
                            <label> Flat Cost: </label>
                            <div> { this.state.flat.cost }</div>
                        </div>
                        <div className="row">
                            <label> Flat Availability: </label>
                            <div> { this.state.flat.availability }</div>
                        </div>
                        <div className="row">
                            <label> Flat Address Id: </label>
                            <div> { this.state.flat.flatAddress.addressId }</div>
                        </div> 
                        <div className="row">
                            <label> Flat House No: </label>
                            <div> { this.state.flat.flatAddress.houseNo }</div>
                        </div>
                         <div className="row">
                            <label> Flat Street: </label>
                            <div> { this.state.flat.flatAddress.street }</div>
                        </div>
                        <div className="row">
                            <label> Flat City: </label>
                            <div> { this.state.flat.flatAddress.city }</div>
                        </div>
                        <div className="row">
                            <label> Flat State: </label>
                            <div> { this.state.flat.flatAddress.state }</div>
                        </div>
                        <div className="row">
                            <label> Flat Address Pin: </label>
                            <div> { this.state.flat.flatAddress.pin }</div>
                        </div>
                        <div className="row">
                            <label> Flat Country: </label>
                            <div> { this.state.flat.flatAddress.country }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFlatComponent