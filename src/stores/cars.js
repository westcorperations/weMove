import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://192.168.43.10:3001/v1";
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


// let carsData = [];

export const useCarsStore = defineStore('cars', {
    state: () => ({
        carsData: null
    }),
    getters: {
        getCarsData: (state) => state.carsData
    },
    actions: {
        async allCars() {
            return await axios.get('/cars').then(
                response => {
                    this.carsData = response.data.data.all_cars.data;
                    // console.table( this.carsData);
                    return Promise.resolve(response);
                },
                error => {
                    return Promise.reject(error);
                }
            )
        }
    }
});