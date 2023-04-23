<script setup>
import { ref } from 'vue'
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
const TopBuses = [
  {
    id: "1",
    image:
      "https://drive.google.com/uc?export=download&id=1saMIKxm2w_OTmTl6tlQiTcjo8RMCst-u",
    name: "olivia volvo",
    features:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil animi tempora officia culpa tenetur hic optio doloremque fugiat facere.",
    href: "#",
    rating: "4.5",
  },
  {
    id: "2",
    image:
      "https://drive.google.com/uc?export=download&id=1Xj-YX2eaPHeBGEIQ2coWs2X8YmKmKkZ2",
    name: "olivia volvo",
    features:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil animi tempora officia culpa tenetur hic optio doloremque fugiat facere.",
    href: "#",
    rating: "4.5",
  },
  {
    id: "3",
    image:
      "https://drive.google.com/uc?export=download&id=1nO91i3qO1Zr4aYeHv2zpV-8iWcBoJdfh",
    name: "olivia volvo",
    features:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil animi tempora officia culpa tenetur hic optio doloremque fugiat facere.",
    href: "#",
    rating: "4.5",
  },
];
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
}

const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow:3,
    snapAlign: 'start',
  },
}
const currentSlide = ref(0)
// const carouselRef = ref(null)

const next = () => {
  if (currentSlide.value !== null &&  currentSlide.value < (TopBuses.length-1) ) {
    // console.log('hi')
    currentSlide.value++
    // console.log(TopBuses.length)
  }
}

const prev = () => {
  
  if (currentSlide.value > 0) {
    currentSlide.value--
    // console.log(currentSlide.value);
  }
}

</script>

<template>
  <main class="container my-5 px-6 mx-auto">
    <!-- Section: How To -->
    <section class="mb-10 text-gray-800 text-center lg:text-left">
      <div class="flex justify-center">
        <div class="text-center max-w-[700px]">
          <h2 class="text-3xl font-bold mb-6">How it works ?</h2>
          <p class="text-primary-50 mb-12">
            Nunc tincidunt vulputate elit. Mauris varius purus malesuada neque
            iaculis malesuada. Aenean gravida magna orci, non efficitur est
            porta id. Donec magna diam.
          </p>
        </div>
      </div>
      <div class="grid lg:grid-cols-3 gap-x-6 lg:gap-x-12">
        <div
          class="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <div class="relative overflow-hidden bg-no-repeat bg-cover">
            <img src="@/assets/how2img1.png" class="w-full rounded-t-lg" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a>
            <svg
              class="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style="left: 0; bottom: 0"
            >
              <path
                fill="#fff"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">Book online</h5>
            <p class="mb-4 pb-2">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-primary-100 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Learn more</a
            >
          </div>
        </div>

        <div class="bg-white block rounded-lg shadow-lg mb-6 lg:mb-0">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img src="@/assets/how2img2.png" class="w-full rounded-t-lg" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a>
            <svg
              class="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style="left: 0; bottom: 0"
            >
              <path
                fill="#fff"
                d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">Payment</h5>
            <p class="mb-4 pb-2">
              Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam
              orci, nec ornare metus semper sed. Integer volutpat ornare erat
              sit amet rutrum.
            </p>
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-primary-100 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Learn more</a
            >
          </div>
        </div>

        <div class="bg-white block rounded-lg shadow-lg">
          <div
            class="relative overflow-hidden bg-no-repeat bg-cover"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <img src="@/assets/how2img3.png" class="w-full rounded-t-lg" />
            <a href="#!">
              <div
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                style="background-color: rgba(251, 251, 251, 0.15)"
              ></div>
            </a>
            <svg
              class="absolute"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              style="left: 0; bottom: 0"
            >
              <path
                fill="#fff"
                d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div class="p-6">
            <h5 class="font-bold text-lg mb-3">Get Ticket</h5>
            <p class="mb-4 pb-2">
              Curabitur tristique, mi a mollis sagittis, metus felis mattis
              arcu, non vehicula nisl dui quis diam. Mauris ut risus eget massa
              volutpat feugiat.
            </p>
            <a
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block px-6 py-2.5 bg-primary-100 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >Learn more</a
            >
          </div>
        </div>
      </div>
    </section>
    <!-- Section: How to -->

    <!-- Section: Buses  -->
    <section class="mb-32 text-gray-800 text-center lg:text-left"></section>
    <!-- Section: Buses -->
    <div class="max-w-[700px]">
      <h3 class="text-3xl font-bold mb-6">Best Service Car</h3>
      <p class="text-primary-50 mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem?,Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ex, rem?
      </p>
    </div>
    <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 "> -->
      
  <div class="flex justify-end gap-x-4 m-3">
    <button @click="prev" class="bg-blue-200 text-primary rounded-[100%] p-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg> </button>
    <input type="hidden" min="0" max="9" v-model="currentSlide" class="hidden" />
    <button @click="next" class="bg-blue-200 text-primary rounded-[100%] p-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
  </div>
    <Carousel v-bind="settings" :breakpoints="breakpoints" ref="carousel" v-model="currentSlide">
      <Slide v-for="item in TopBuses" :key="item.id">
        <div class="md:mr-4">
          <div class="relative overflow-hidden bg-no-repeat bg-cover">
            <img :src="item.image" class="w-full rounded-t-sm h-60" />
          </div>
          <div class="container mx-auto px-6">
            <div class="text-primary-100">
              <div
                class="grid grid-cols-1 rounded-lg shadow-lg gap-4 py-2 md:py-6 mt-[-60px] bg-[hsla(0,0%,100%,0.7)] backdrop-blur-[30px]"
              >
                <div class="flex flex-row px-3">
                  <h3 class="px-3 text-gray-500 font-bold">Bus name</h3>
                  <h3 class="text-primary-100 font-bold">{{ item.name }}</h3>
                </div>
                <div class="flex flex-row px-3">
                  <h3 class="px-3 text-gray-500 font-bold">Features</h3>
                  <p class="text-gray-500 text-sm text-left">{{ item.features }}</p>
                </div>
                <div class="flex flex-row px-3">
                  <h3 class="px-3 text-gray-500 font-bold">Rating</h3>

                  <div class="flex items-center px-3">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-300 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <p
                      class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400 px-3"
                    >
                      {{ item.rating }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      
    </Carousel>

    <!-- </div> -->
  </main>
  <!-- main -->
</template>
