import axios from 'axios';

export class RecentTransactionsService {

    getRecentTransactions() {
        return axios.get('assets/data/recent-transactions.json').then(res => res.data.data);
    }
}