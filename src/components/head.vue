<template class="mt-96">
  <div class="bg-[#26474E] pb-[20%]">
    <div class="sm:ml-20 sm:mt-10 py-10 mt-5 text-center">
      <h2 class="font-bold text-2xl text-white py-4">Obtenez une Cotation</h2>
      <h2 class="text-white sm:mx-[30%] sm:text-sm text-[14px] sm:w-[40%] sm:text-center ">
        Le calculateur est capable de faire une estimation des coûts
        d'expédition pour le produit en prenant en compte les différentes
        options de fret : aérien, maritime et terrestre.
      </h2>
    </div>
  </div>
  <div class="bg-[#f9f7ef] sm:-mt-[15%] mt-[-70px] grid grid-rows-1 relative">
    <div class="absolute inset-x-0 top-0 z-0">
      <div class="grid grid-cols-1 grid-rows-1 shadow-2xl sm:mt-10 mt-5 bg-[#ffffff] sm:w-10/12 w-11/12 mx-auto">
        <div class="sm:grid sm:grid-cols-2 bg-white my-8">
          <div class="mx-auto">
            <h6 class="text-black text-opacity-90 sm:ml-0 ml-4 mb-1 mt-1 font-bold">
              Envoye de
            </h6>
            <div class="inline-block relative sm:mt-4">
              <select
                class="block sm:w-96 w-[270px] border border-neutral-300 sm:text-sm text-xs sm:px-4 px-2 sm:py-2 sm:pr-8 pr-5 sm:h-16 h-12 text-opacity-0 sm:ml-0 ml-4">
                <option>Chez vous</option>
                <option>l'entrepôt</option>
              </select>
            </div>
            <div class="grid sm:grid-cols-2 grid-cols-1 grid-rows-1 sm:mt-6 mt-4">
              <div class="sm:ml-0 ml-4 sm:mb-0 mb-4">
                <label class="text-black text-md">Longueur</label><br />
                <input type="text" class="sm:mt-3 mt-1 sm:h-14 h-11 border-neutral-300 border" /><br />
              </div>
              <div class="sm:ml-0 ml-4">
                <label class="text-black text-md">Hauteur</label><br />
                <input type="text" class="sm:mt-3 mt-1 sm:h-14 h-11 border border-neutral-300" /><br />
              </div>
            </div>

            <div class="sm:mt-10 mt-5">
              <input type="checkbox" class="mr-2 sm:ml-0 ml-4"/>
              <label class="font-bold">Livraison express</label>
              <input type="checkbox" class="sm:ml-7 ml-[25px] mr-2"/>
              <label class="font-bold">Assurance</label>
              <input type="checkbox" class="sm:ml-9 ml-4 mr-2 sm:mt-0 mt-4" />
              <label class="font-bold">Emballage</label>
            </div>
          </div>
          <div class="mx-auto sm:mt-[-8px] mt-0">
            <h6 class="text-black text-opacity-90 sm:ml-0 ml-4 mb-1 sm:mt-3 mt-6 font-bold">
              Destination
            </h6>
            <div class="inline-block relative sm:mt-4 ">
              <select
                class="block sm:w-96 w-[270px] border border-neutral-300 sm:text-sm text-xs sm:px-4 px-2 sm:py-2 sm:pr-8 pr-5 sm:h-16 h-12 text-opacity-0 sm:ml-0 ml-4">
                <option>Région proche</option>
                <option>Internationale</option>
                <option></option>
              </select>
            </div>
            <div class="grid sm:grid-cols-2 grid-cols-1 grid-rows-1 sm:mt-6 mt-4">
              <div class="sm:ml-0 ml-4 sm:mb-0 mb-4">
                <label class="text-black text-md">Poids</label><br />
                <input type="text" class="sm:mt-3 mt-1 sm:h-14 h-11 border-neutral-300 border" /><br />
              </div>
              <div class="sm:ml-6 ml-4">
                <h6 class="sm:ml-5">FRAGILE</h6>
                <div class="sm:mt-5 mt-2">
                  <label class="font-bold mr-2 sm:text-xl">OUI</label>
                  <input type="checkbox" class="mr-2" id="" />
                  <label class="font-bold mr-2 sm:text-xl">NON</label>
                  <input type="checkbox" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:ml-[400px] ml-[55px] space-y-4 w-[20%] my-16 justify-center sm:mt-24 mt-[-0px]">
          <button class="p-3 bg-black rounded-full text-white sm:w-full w-[210px] font-semibold sm:text-[16px] text-[12px]">
            Demandez une cotation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "getCotation",
};
</script>
<style>
.bg-content {
  background-image: url(../assets/head.jpg);
}
</style>
