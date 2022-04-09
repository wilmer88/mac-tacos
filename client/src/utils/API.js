import axios from "axios";

export default {
    saveOrden: function(ordenData) {
        return axios.post("http://localhost:3001/api/orden", ordenData);
    },
    getOrdens: function() {
        return axios.get("api/orden")
    }
}