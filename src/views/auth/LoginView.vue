<script setup>
import {useTokenClient} from "vue3-google-signin"
import {useAuthStore} from "@/stores/auth.js"
import {ref} from "vue"
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup' 
import { useRouter } from "vue-router";
//Authentican store 
const router = useRouter();
const AuthStore = useAuthStore();
const authState = AuthStore.initialState;
// eslint-disable-next-line no-unused-vars
const loginStatus = ref(authState.status.loggedIn);
//validation schema
const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

if(loginStatus.value){
   router.push('/');
}

//google login 
const handleOnSuccess = (response) => AuthStore.googlelogin(response.access_token).then(
  () => {
    // console.log(res)
    window.location.reload();
  }).catch((error) => {
          console.log(error);
          // this.errored = true;
        })
        .finally(() => 
        {   
          //  router.push('/');

        });

    


const handleOnError = (errorResponse) =>  console.log("Error: ", errorResponse);
const { isReady, login } = useTokenClient({ onSuccess: handleOnSuccess, onError: handleOnError});
//normal login
const Login = (values) => AuthStore.login(values).then(
  () => {
    // console.log(res)
    router.push('/');
  },
  (error) => {
    console.error(error);
  }
);

</script>

<template>
  <div>
    <section class="h-screen">
      <div class="container h-full px-6 py-24 text-primary-100">
        <div
          class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between"
        >
          <!-- Left column container with background-->
          <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img src="@/assets/loginimg.svg" class="w-full" alt="login image" />
          </div>

          <!-- Right column container with form -->
          <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
            <Form @submit ="Login" :validation-schema="schema">
              <!-- Email input -->
              <div class="relative mb-6" data-te-input-wrapper-init>
                <Field
                  type="text"
                  name="email"
                  class="peer block min-h-[auto] w-full rounded border-2 border-primary-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput3"
                  placeholder="Email address"
                />
                <ErrorMessage name="email" />
                                 


                <label
                  for="exampleFormControlInput3"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary-100 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >Email address
                </label>
              </div>

              <!-- Password input -->
              <div class="relative mb-6" data-te-input-wrapper-init>
                <Field
                  type="password"
                  name="password"
                  class="peer block min-h-[auto] w-full rounded border-2 border-primary-100 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                />
              <ErrorMessage name="password" />
                <label
                  for="exampleFormControlInput33"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-transparent transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary-100 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                  >Password
                </label>
              </div>

              <!-- Remember me checkbox -->
              <div class="mb-6 flex items-center justify-between">
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary-100 checked:bg-primary-50 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                    value=""
                    id="exampleCheck3"
                    checked
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                <!-- Forgot password link -->
                <a
                  href="#!"
                  class="text-primary-100 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >Forgot password?</a
                >
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                class="inline-block w-full rounded bg-primary-100 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Sign in
              </button>

              <!-- Divider -->
              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
              >
                <p
                  class="mx-4 mb-0 text-center font-semibold "
                >
                  OR
                </p>
              </div>

              <!-- Social login buttons -->
             
              <span
                class="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                style="background-color: #55acee"
                :disabled="!isReady" @click="login"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <!-- Google -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
                Continue with Google
              </span>
              <router-link
                to="/"
                class="mb-3 flex w-full items-center lg:justify-end justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-primary-100 shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  /></svg
                >Back Home</router-link
              >
            </Form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>



<style lang="scss" scoped></style>
