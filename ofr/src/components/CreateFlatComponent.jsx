import React, { Component } from 'react'
import FlatService from '../services/FlatService';

class CreateFlatComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            flatId: this.props.match.params.flatId,
            cost: '',
            availability: '',
            flatAddress: {
                addressId: '',
                houseNo: '',
                street: '',
                city: '',
                state: '',
                pin: '',
                country: ''
            }
        }
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeAvailabilityHandler = this.changeAvailabilityHandler.bind(this);
        this.changeFlatAddressHandler = this.changeFlatAddressHandler.bind(this);
        this.saveOrUpdateFlat = this.saveOrUpdateFlat.bind(this);
    }

    componentDidMount() {

        if(this.state.flatId === '_add') {
            return
        } else {
            FlatService.viewFlat(this.state.flatId).then( (res) =>{
                let flat = res.data;
                this.setState({ cost : flat.cost,
                    availability : flat.availability,
                    flatAddress : flat.flatAddress
                });
            });
        }
    }
    saveOrUpdateFlat = (e) => {
        e.preventDefault();
        let flat = { cost: this.state.cost, availability: this.state.availability, flatAddress: { houseNo: this.state.flatAddress.houseNo ,
             street: this.state.flatAddress.street , city: this.state.flatAddress.city , state: this.state.flatAddress.state ,
             pin: this.state.flatAddress.pin , country: this.state.flatAddress.country} };
        console.log('flat => ' + JSON.stringify(flat));

        if(this.state.flatId === '_add'){
            FlatService.addFlat(flat).then(res =>{
                this.props.history.push('/flat');
            });
        } else {
            FlatService.updateFlat(flat).then(res =>{
                this.props.history.push('/flat');
            }); 
        }
    }

    changeCostHandler = (event) => {
        this.setState({cost: event.target.value});
    }

    changeAvailabilityHandler = (event) => {
        this.setState({availability: event.target.value});
    }

    changeFlatAddressHandler = (event) => {
        this.setState( { flatAddress : event.target.value}  );
    }

    handleFlatAddressChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flatAddress[inputPropName] = event.target.value;
        this.setState(newState);
       
    }

    cancel(){
        this.props.history.push('/flat');
    }

    getTitle(){
        if(this.state.flatId === '_add'){
            return <h3 className="text-center">Add Flat</h3>
        } else {
            return <h3 className="text-center">Update Flat</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                       <div className = "row">
                           <div className = "card col-md-6 offset-md-3 offset-md-3">
                               {
                                    this.getTitle()
                               }
                               <div className = "card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Cost: </label>
                                           <input placeholder="cost" className="form-control"
                                                value={this.state.cost} onChange={this.changeCostHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Availability: </label>
                                           <input placeholder="availability" className="form-control"
                                                value={this.state.availability} onChange={this.changeAvailabilityHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat House No: </label>
                                           <input placeholder="houseNo" className="form-control"
                                                value={this.state.flatAddress.houseNo} onChange={event => this.handleFlatAddressChange(event, 'houseNo')}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Street: </label>
                                           <input placeholder="street" className="form-control"
                                                value={this.state.flatAddress.street} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat City: </label>
                                           <input placeholder="city" className="form-control"
                                                value={this.state.flatAddress.city} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat State: </label>
                                           <input placeholder="state" className="form-control"
                                                value={this.state.flatAddress.state} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Address Pin: </label>
                                           <input placeholder="pin" className="form-control"
                                                value={this.state.flatAddress.pin} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Country: </label>
                                           <input placeholder="country" className="form-control"
                                                value={this.state.flatAddress.country} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <button className="btn btn-success" onClick={this.saveOrUpdateFlat}>Save</button>
                                       <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={ { marginLeft: "10px"}}>Cancel</button>
                                   </form>
                               </div>
                            </div>
                       </div>
                   </div>
            </div>
        )
    }
}

export default CreateFlatComponent