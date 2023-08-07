<template>
  <div class="img sm:mt-[39%] mt-[700px] sm:h-[700px] h-[600px] bg-cover bg-center">
    <div class="left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div class="sm:max-h-full sm:w-full sm:mt-[0px] mt-[60px] w-[305px] max-w-xl overflow-y-auto sm:rounded-2xl rounded-xl bg-white">
        <div class="w-full">
          <div class="m-8 my-20 max-w-[400px] mx-auto">
            <div class="mb-8 sm:p-0 p-[44px]">
              <h1 class="mb-4 sm:text-3xl text-[18px] font-extrabold sm:mt-0 mt-[-60px] ">
                Pourquoi nous choisir ?
              </h1>
              <p class="text-gray-600 sm:text-[16px] text-[13px] ">
                Choisir Shippackage signifie opter pour un service de transport
                fiable,
                <br />sécurisé et efficace, qui met l'accent sur la satisfaction
                du client et la livraison réussie de vos marchandises.
              </p>
            </div>
            <div class="space-y-4 sm:mt-0 mt-[-50px]">
              <button class="p-3 bg-black rounded-full text-white sm:w-full w-[220px] sm:ml-0 ml-10 font-semibold sm:text-[16px] text-[12px]">
                Profitez de 20% de réduction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FeatureComponent",
};
</script>

<style>
.img {
  background-image: url(../assets/transport1.jpg);
}
</style>
