import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'22b0da571951406480a099089bf58a91'
    }
})
