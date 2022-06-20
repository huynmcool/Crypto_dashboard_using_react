import axios from 'axios';

export class CoinsService {

    getCoinsLogo() {
        return axios.get('assets/data/credit-cards.json').then(res => res.data.data);
    }
}