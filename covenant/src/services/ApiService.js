/* eslint-disable */
import axios from 'axios'

const baseUrl = 'http://3.7.102.213/covid_service/web/api/';
//const baseUrl = 'http://localhost:8080/covid_service/web/api/';

export default class ApiService {

  async defineHeaderAxios () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("kc-token")
  }  

  sendSms(phoneNumbers, message){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("kc-token")
    let url="sendSms?mobileNos="+phoneNumbers+"&message="+message;
    return axios
    .post(baseUrl + url)
    .then(response => {
     console.log( response.data)
    })
    .catch(err => {
      console.log(err);
    })
  }
}

