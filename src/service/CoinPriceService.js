import axios from 'axios';

export class CoinPriceService {
    getCoinPrice() {
        return axios.get('assets/data/coin-price.json').then(res => res.data.data);
    }
}