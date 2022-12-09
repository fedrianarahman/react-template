import axios from "axios";

let config = require("./config.json");

 export const ApiService = {

    get: (url, param)=>{
        return axios.get
    },

    post : (url, params, configLocal) =>{
        const getToken = localStorage.getItem("token");
        const localConfigAcios = {
            headers : {
                'Authorization': `Bearer ${getToken}`,
            },
            ...configLocal
        }

        return axios.post(config.host + url, params, localConfigAcios)
    }

    
}