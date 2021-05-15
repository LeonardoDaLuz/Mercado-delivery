import store from '../';

export function teste() {
    console.log(store);
}

export function getState() {
    console.log(store.getState());
}