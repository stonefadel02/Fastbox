<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navOndem: false,
    };
  },
  components: {},
  methods: {
    navOnDemand() {
      if (this.navOndem) {
        this.navOndem = false;
      } else {
        this.navOndem = true;
      }
    },
  },
  setup() { },
};
</script>
<template>
  <header class="">
    <!-- Navigation bar -->

    <!-- <div class="bg-white h-16 px-12 pb-[8%]">
      <div
        class="bg-white h-16 mt-2 hidden flex-grow basis-[100%] items-center justify-center sm:mt-0 sm:!flex sm:basis-auto"
        id="navbarSupportedContentX" data-te-collapse-item>
        <div class="flex sm:ml-10 mr-auto sm:mb-9 mb-9">
          <h1 class="sm:text-[12px] text-sm sm:mt-10 mt-5 text-gray-400 text-center sm:text-sm:text-left">
            Téléphone:
            <span class="text-gray-700 decoration-2 decoration-[#5e33ff]">+229 96 96 96 96</span>
          </h1>
        </div>
        <div class="flex sm:ml-10 mr-auto sm:mb-9 mb-9">
          <h1 class="sm:text-[12px] text-sm sm:mt-10 mt-5 text-gray-400 text-center sm:text-sm:text-left">
            Email:
            <span class="text-gray-700 decoration-2 decoration-[#5e33ff]">support@shippackage.com</span>
          </h1>
        </div>
        <ul class="list-style-none flex flex-col pl-0 sm:mt-1 sm:flex-row">
          <li class="mt-2 sm:mb-0 sm:pr-2 text-gray-400">
            <span class="block sm:text-[12px] text-gray-400">Suivez nous</span>
          </li>
          <li class="mb-4 sm:mb-0 sm:pr-2">
            <a class="block sm:text-[12px] transition duration-150 ease-in-out text-gray-700 hover:text-neutral-900 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
              href="#!">Facebook</a>
          </li>
          <li class="mb-4 sm:mb-0 sm:pr-2">
            <a class="block sm:text-[12px] transition duration-150 ease-in-out text-gray-700 hover:text-neutral-900 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
              href="#!">Twitter</a>
          </li>
          <li class="mb-2 sm:mb-0 sm:pr-2">
            <a class="block sm:text-[12px] transition duration-150 ease-in-out text-gray-700 hover:text-neutral-900 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
              href="#!">Linkedin</a>
          </li>
          <li class="mb-2 sm:mb-0 sm:pr-2">
            <a class="block sm:text-[12px] transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
              href="#!">Contact</a>
          </li>
        </ul>
      </div>
    </div> -->
    <!-- Menu  -->
    <div
      class="absolute w-[90%] sm:h-[100px] h-20  mx-[5%] sm:mt-[10px] mt-[19px] bg-slate-100 bg-opacity-[0.7]  px-8 flex items-center rounded">
      <!-- for mobile device -->
      <div class="sm:ml-10 mr-auto sm:mb-9 mb-9 flex">

        <img src="../assets/logo4.svg" class="sm:ml-[-30px] ml-[-20px] sm:h-20 h-14 sm:mt-9 mt-9" />
        <div class="block sm:hidden ml-[100px] mt-[55px]">
          <button
            class="flex items-center px-3 py-2 border rounded text-orange-600 border-orange-600 hover:text-white hover:border-white"
            @click="navOnDemand">
            <svg class="fill-current h-2 w-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- for mobile device end -->
      <ul class="hidden sm:flex list-style-none flex-col pl-0 sm:mt-6 sm:flex-row text-[18px] ">
        <li class="mb-4 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out  text-blue-900 font-bold hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Acceuil</a>
        </li>
        <li class="mb-4 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-orange-600  font-bold hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Contacts</a>
        </li>
        <li class="mb-4 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-blue-900 font-bold hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="./mon_comptes.vue">Mon compte</a>
        </li>
        <!-- <li class="mb-4 sm:mb-0 sm:pr-2">
          <div class="flex bg-white rounded border-white border-2 border-opacity-40  sm:h-[37px] sm:w- my-auto">
            <input type="search" name=""
              class=" placeholder-opacity-70 sm:ml-0 bg-[#26474E] placeholder-white outline-none focus:ring-0 w-[130px] " id=""
              placeholder="">
              <button class="bg-white"> 
              <img src="../assets/search.png" alt="" class=" sm:h-[18px] sm:mr-2 sm:mt-[2px] ">
              </button>
          </div>
        </li> -->
        <!-- <li class="mb-2 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-black hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">A propos</a>
        </li>
        <li class="mb-2 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-black hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Nous contacter</a>
        </li>
        <li class="mb-2 sm:mb-0 sm:pr-2 bg-{#5e33ff}">
          <button class="bg-[#5e33ff] hover:bg-blue-700 text-black font-bold py-2 px-4 border border-blue-700 rounded">
            Mon compte
          </button>
        </li> -->
      </ul>
    </div>
    <!-- Nav on demand -->
    <div :class="navOndem ? 'block' : 'hidden'"
      class="fixed top-0 left-0 w-[60%] h-full py-[50%] pl-20 bg-gray-900 sm:hidden">
      <ul class="">
        <li class="mb-4 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Logistique</a>
        </li>
        <li class="mb-4 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Services</a>
        </li>
        <li class="mb-4 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Nouveautées</a>
        </li>
        <li class="mb-2 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">A propos</a>
        </li>
        <li class="mb-2 sm:mb-0 sm:pr-2">
          <a class="block transition duration-150 ease-in-out text-white hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white sm:p-2 [&.active]:text-black/90"
            href="#!">Nous contacter</a>
        </li>
        <li class="mb-2 sm:mb-0 sm:pr-2 bg-{#5e33ff}">
          <button class="bg-[#5e33ff] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Mon compte
          </button>
        </li>
      </ul>
    </div>
    <!-- Nav on demand -->
    <!-- Carroussel -->
    <div class="">
      <img class="w-full sm:h-[700px] h-80" src="../assets/image4.jpg" alt="" />
    </div>
  </header>
</template>
