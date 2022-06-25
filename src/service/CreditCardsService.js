import axios from 'axios';

export class CreditCardService {

    // getCreditCardsSmall() {
    //     return axios.get(creditCardData).then(res => res.creditCardData.data).catch(err => console.log(err));
    // }

    getCreditCardsSmall() {
        return axios.get('assets/data/credit-cards.json').then(res => res.data.data);
    }

    getCreditCards() {
        return axios.get('../data.json').then(res => res.json()).then(data => data.data);
    }

    getCreditCardsWithOrdersSmall() {
        return axios.get('assets/data/credit-cards.json').then(res => res.json()).then(data => data.data);
    }
}