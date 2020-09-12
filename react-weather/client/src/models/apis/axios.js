import axios from 'axios';

export default class Axios {
    static async getUrlData(url) {
        return await axios.get(`${url}`).then(response => {
            let { data } = { ...response };
            return data;
        });
    }
}