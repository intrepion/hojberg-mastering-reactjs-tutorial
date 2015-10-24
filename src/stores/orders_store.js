import alt from '../alt';
import ImmutableUtil from 'alt/utils/ImmutableUtil';
import Immutable from 'immutable';
import OrdersActions from '../actions/orders_actions';

class OrdersStore {
    constructor() {
        this.orders = Immutable.List();
        this.selectedStatus = 'all';
        this.amountFilter = null;

        this.bindListeners({
            handleUpdateOrders: OrdersActions.UPDATE_ORDERS,
            handleUpdateSelectedStatus: OrdersActions.UPDATE_SELECTED_STATUS,
            handleUpdateAmountFilter: OrdersActions.UPDATE_AMOUNT_FILTER,
            handleFetchOrders: OrdersActions.FETCH_ORDERS
        });
    }

    handleUpdateOrders(orders) {
        this.orders = orders;
    }

    handleUpdateSelectedStatus(status) {
        this.selectedStatus = status;
    }

    handleUpdateAmountFilter(amount) {
        this.amountFilter = amount;
    }

    handleFetchOrders() {
        this.orders = [];
    }
}

export default alt.createStore(ImmutableUtil(OrdersStore));
