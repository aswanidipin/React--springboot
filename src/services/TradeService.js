import axios from 'axios'

const TRADE_REST_API_URL="http://localhost:8080/api/v1/trades";

class TradeService
{
    getTadeDetails()
    {
       return axios.get(TRADE_REST_API_URL);
    }

  createTrade(trade)
    {

       return axios.post(TRADE_REST_API_URL,trade);
   }
}


export default new TradeService();