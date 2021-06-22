import React, { Component } from 'react';
import TradeService from '../services/TradeService';

class ListTradeComponent extends Component {


    constructor(props){
     super(props)
     this.state={
         trade:[]
     }
     this.addTrade=this.addTrade.bind(this);
    }
    componentDidMount()
    {
        TradeService.getTadeDetails().then((res)=>{this.setState({trade:res.data});
    });
    }

    addTrade()
    {
        this.props.history.push('/addTrade');

    }
    render() {
        return (
            <div>
            <h2 className="text-center">Trade Details</h2> 
            <div className="row">
                <button className="btn btn-primary" onClick={this.addTrade}>Add Trade</button>
                </div>
            <div className="row">
                <table className="table table-striped table-bordered">
<thead>
    <tr>
        <th>Version</th>
        <th>counterpartID</th>
        <th>bookid</th>
        <th>maturity date</th>
        <th>created date</th>
        <th>expired status</th>
    </tr>
</thead>
<tbody>
    {
        this.state.trade.map(
            trade=>
            <tr key={trade.id}>
<td>{trade.version}</td>
<td>{trade.counterPartId}</td>
<td>{trade.bookId}</td>
<td>{trade.maturityDate}</td>
<td>{trade.createdDate}</td>
<td>{trade.expiredStatus}</td>
</tr>
        )
        }
    
</tbody>
                </table>
                </div>   
            </div>
        );
    }
}

export default ListTradeComponent;
