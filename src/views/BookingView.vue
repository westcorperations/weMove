<template>
  <div>
    <!-- Main: Booking Page -->
    <main class=" ">
      <div class="container my-20 px-6 mx-auto h-full bg-gray-100">
        <div class="flex justify-center">
          <div class="text-center md:max-w-[700px]">
            <h2 class="text-3xl font-bold mb-6 text-primary-100">
              Book Your Ride
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="bg-gray-200 h-full">
            <img
              src="@/assets/bookingImg.png"
              class="w-full"
              alt="login image"
            />
          </div>
          <div class="">
            <form>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Email address</label
                >
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  type="fullname"
                  name="fullname"
                  id="fullname"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="fullname"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Fullname</label
                >
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="phone"
                    id="phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Phone number (123-456-7890)</label
                  >
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <input
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="phone2"
                    id="phone2"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone2"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Alt Phone number (123-456-7890)</label
                  >
                </div>
               
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    name="bus"
                    id="bus"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  >
                    <option value="">volvo340</option>
                    <option value="">toyota</option>
                    <option value="">limozine</option>
                  </select>
                  <label
                    for="bus"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Select Bus</label
                  >
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    name="bus"
                    id="bus"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  >
                    <option value="">10:00am</option>
                    <option value="">1:00pm</option>
                    <option value="">2:00pm</option>
                  </select>
                  <label
                    for="bus"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Select Time</label
                  >
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    name="bus"
                    id="bus"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  >
                    <option value="">seat1</option>
                    <option value="">seat2</option>
                    <option value="">seat3</option>
                  </select>
                  <label
                    for="bus"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Select Seat</label
                  >
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    name="bus"
                    id="bus"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-50 peer"
                  >
                    <option value="" selected >NGN1000</option>
                    
                  </select>
                  <label
                    for="bus"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Price</label
                  >
                </div>
              </div>
              
           
              <button
                type="submit"
                class="text-white bg-primary-100 hover:bg-primary-50 focus:ring-4 focus:outline-none focus:ring-primary-50 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
                 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
