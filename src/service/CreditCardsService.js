import axios from 'axios';
export class CreditCardService {

    getCreditCardsSmall() {
        return axios.get('assets/data/credit-cards.json').then(res => res.data.data);
    }

    getCreditCards() {
        return axios.get('assets/data/credit-cards.json').then(res => res.data.data);
    }

    getCreditCardsWithOrdersSmall() {
        return axios.get('assets/data/credit-cards.json').then(res => res.data.data);
    }
}