import React, { Component } from 'react';
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import TradeService from '../services/TradeService';

class CreateTradeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
          version:"",
          counterPartId:"",
          bookId:"",
          maturityDate:new Date(),
          createdDate:new Date(),
          expiredStatus:""
        }
        this.saveTrade=this.saveTrade.bind(this);
    }

    saveTrade= (e)=>
    {

    e.preventDefault();
        
  let trade={version:this.state.version,counterPartId:this.state.counterPartId,      
    bookId:this.state.bookId,maturityDate:this.state.maturityDate
    ,createdDate:this.state.createdDate,expiredStatus:this.state.expiredStatus
    };
    console.log("trade details"+JSON.stringify(trade));
    TradeService.createTrade(trade).then(res=>{this.props.history.push('/trades');});
}


    render() {
        return (
            <div>
             <div className="container">
                 <div className="row">
<div className="card col-md-6  offset-md-3  offset-md-3">
    <h3 className="text-center">Trade details Entry Form</h3>
</div>
<div className="card-body">
    <form>
        <div className="form-group">
        <label>
    version  
    </label>                            
    <input type="text" name="version" className="form-control"  value={this.state.version} onChange=

{(data)=>{this.setState({version:data.target.value})}} />
  
        </div>

        <div className="form-group">
        <label>
    CouterpartID  
    </label>                            
    <input type="text" name="counterPartId" className="form-control"  value={this.state.counterPartId} onChange=

{(data)=>{this.setState({counterPartId:data.target.value})}} />
  
        </div>

        <div className="form-group">
        <label>
    BookID  
    </label>                            
    <input type="text" name="bookId" className="form-control"  value={this.state.bookId} onChange=

{(data)=>{this.setState({bookId:data.target.value})}} />
  
        </div>
        <div className="form-group">
        <label>
        Maturity Date     
    </label>
    <DatePicker
      selected={ this.state.maturityDate }
      onChange={ (date) =>this.setState({
        maturityDate: date
      }) }
      name="maturityDate"
      className="form-control"
      dateformat="MM/dd/yyyy"
      className="form-control" 
  />  
    </div>
    <div className="form-group">
        <label>
        CreatedDate     
    </label>
    <DatePicker
    className="form-control" 
      selected={ this.state.createdDate }
      onChange={ (date) =>this.setState({
        createdDate: date
      }) }
      name="createdDate"
      className="form-control"
      dateformat="MM/dd/yyyy"
  />  
    </div>

    <div className="form-group">
        <label>
        expiredStatus  
    </label>                            
    <input type="text" name="expiredStatus" className="form-control"  value={this.state.expiredStatus} onChange=

{(data)=>{this.setState({expiredStatus:data.target.value})}} />
  
        </div>
<button className="btn btn-success" onClick={this.saveTrade}>Save</button>

    </form>
</div>
                 </div>
                 </div>  
            </div> 
        );
    }
}

export default CreateTradeComponent;