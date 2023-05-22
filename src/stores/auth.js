import {defineStore} from "pinia";
import  axios from "axios";
const baseURL =" https://wemoveapi.up.railway.app/v1";
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
          const response = await axios.post(baseURL+"/auth/google/callback",token);
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
