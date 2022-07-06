import axios from 'axios';

export class CreditCardService {
    getCreditCards() {
        return axios.get('assets/data/credit-cards.json').then(res => res.data.data);
    }
}