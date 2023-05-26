import {defineStore} from "pinia";
import  axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL="http://192.168.43.10:3001/v1";
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';
//GET USER TOKEN FROM LOCAL STORAGE
const user = localStorage.getItem('userToken');
// CHECK IF TOKEN IS NULL AND ASSIGN aUTHENTICATION STATE
const initialState = user 
? {status: {loggedIn:true}, user}
:{status:  {loggedIn:false }, user:null};
// DEFINE OR DEFINE AUTH STORE  STATE AND ACTIONS
export const useAuthStore = defineStore("auth",{
    state: () => ({initialState}),
    actions: {
      // GOOGLE LOGIN METHOD
        async googlelogin(idToken){
          const tokenjson = {idToken: idToken}
          const response = await axios.post("/auth/google/callback",tokenjson);
          try {
             const Token = response.data.data.token;
            localStorage.setItem("userToken", Token);
          } catch (error) {
            console.error("error logging in",error);
          }
        },

        
        // NORMAL LOGIN ACTION
        async login(values){
          const data = values;
          const response = await axios.post("/auth/login",data);
          try {
            const Token = response.data.data.token;
            localStorage.setItem("userToken", Token);
          } catch (error) {
            console.error("error logging in",error);
          }
        },
    }
});

