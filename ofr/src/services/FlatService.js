import axios from 'axios';

const FLAT_API_BASED_URL = "http://localhost:8086/flatbooking";

class FlatService {

    viewAllFlat() {
        return axios.get(FLAT_API_BASED_URL + '/viewAllFlat');
    }

    viewFlat(flatId) {
        return axios.get(FLAT_API_BASED_URL + '/viewAllFlat/' + flatId );
    }

    addFlat(flat) {
        return axios.post(FLAT_API_BASED_URL + '/addFlat' , flat);
    }

    updateFlat(flat) {
        return axios.put(FLAT_API_BASED_URL + '/updateFlat' );
    }

    deleteFlatById(flatId) {
        return axios.delete(FLAT_API_BASED_URL + '/deleteFlat/' + flatId);
    }

    viewAllFlatByCost(cost,availability) {
        return axios.get(FLAT_API_BASED_URL + '/viewByCost/' + cost + '/' + availability);
    }
}

export default new FlatService()