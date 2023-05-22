import {defineStore} from "pinia";
import  axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://wemove-navy.vercel.app';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Requested-With, Authorization';
axios.defaults.baseURL="https://wemoveapi.up.railway.app/v1";
export const useAuthStore = defineStore("auth",{
    state: () => ({
        userToken: "",
        adminToken: "",
        isAdminAuthenticated:false,
        isUserAuthenticated: false,
    }),
    actions: {
        async googlelogin(idToken){
          let token = {"idToken": idToken}
          console.log(token);
          const response = await axios.post("/auth/google/callback",token);
          try {
            // this.userToken = response.data.token;
            // this.isUserAuthenticated = true;
            console.log(response);
          } catch (error) {
            console.error("error logging in",error);
            
          }
         
        },
    }
})
