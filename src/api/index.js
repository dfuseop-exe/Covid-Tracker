import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (req, res) => {
    try {

        // const resData =await axios.get(url);
        // const response = {
        //     confirmed : resData.data.confirmed,
        //     recovered : resData.data.recovered,
        //     deaths : resData.data.deaths
        // }
        // return response;

        const {data : {confirmed ,recovered , deaths , lastUpdate}} = await axios.get(url);
        return {confirmed ,recovered, deaths,lastUpdate}
         
    } catch (error) {
        
    }
}

export const fecthDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const ModifiedData = data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
            date : dailyData.reportDate,
        }))
        
        return ModifiedData;
    } catch (error) {
        console.log(error)
    }
}