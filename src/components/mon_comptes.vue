<template>
    <div class="sm:mb-0 mb-[55px]">
        <!-- navbar for laptop version -->
        <div
            class="flex  border-y bg-orange-600 border-opacity-20 border-gray-900 sm:h-[70px] h-[50px] sm:w-[1200px] w-[330px] mt-8 rounded border-2 mx-auto  ">
            <!-- <img src="../assets/coli.png" alt="" class="sm:h-10 sm:w-10 sm:mt-4 mt-2 sm:ml-5 ml-8  mb-1 h-10 w-10" /> -->
            <span class="sm:text-3xl text-[24px] ml-4 sm:text-start my-auto sm:ml-10 font-bold text-white sm:text-white  ">Suivre mon colis</span>
            <div
                class="sm:ml-[580px] mr-3 hidden sm:flex rounded border-white border-2 border-opacity-90  sm:h-[38px] h-[28px] sm:w-[220px] w-[100px] my-auto">
                <img src="../assets/searc.png" alt="" class=" sm:h-[18px] h-[14px] ml-1 sm:mt-[9px] mt-1">
                <input type="search" name=""
                    class=" placeholder-opacity-90 sm:ml-1 bg-orange-600 placeholder-white outline-none focus:ring-0 place"
                    id="" placeholder="Rechercher ici">
            </div>
            <div
                class="hidden sm:flex rounded border-white border-2 border-opacity-90  sm:h-[38px] h-[28px] sm:w-[100px] w-[160px] my-auto">
                <img src="../assets/filtr.png" alt="" class=" sm:h-[25px] sm:ml-1 sm:mt-[6px] ">
                <button type="submit" class=" text-opacity-90  sm:ml-1 text-white ">Filtrer</button>
            </div>
        </div>
        <!-- input for mobile -->
        <div class="block sm:hidden mt-[9px]">
            <div class="flex">
                <div class=" mr-3 flex rounded border-gray-900 border-2 border-opacity-40 h-[40px] w-[220px] mt-3 ml-3">
                    <img src="../assets/search.png" alt="" class="  h-[18px] ml-1  mt-2">
                    <input type="search" name=""
                        class=" placeholder-opacity-40 ml-1 placeholder-gray-900 w-[190px] outline-none focus:ring-0 place"
                        id="" placeholder="Rechercher ici">
                </div>
                <div class=" rounded border-black border-2 border-opacity-40  h-[40px] w-[99px] mt-[13px] ">
                    <button type="submit" class=" text-opacity-70 ml-1 text-gray-800 "><img src="../assets/filtre.png" alt="" class=" h-[40px] w-[40px] sm:ml-1">
    </button>
                </div>
            </div>
        </div>

        <div class="sm:mt-10 mt-8 rounded">
            <!-- table for laptop -->
            <table class="w-[1200px] divide-y mx-auto border-2  hidden sm:table rounded">
                <thead class="">
                    <tr>
                        <th class="px-6 py-1 bg-gray-50 text-left text-[16px] font-bold text-black "> <input type="checkbox"
                                name="" id="" class=" mr-2"> Date</th>
                        <th class="px-6 py-1 bg-gray-50 text-left text-[16px] font-bold text-black "> Status</th>
                        <th class="px-6 py-1 bg-gray-50 text-left text-[16px] font-bold  text-black"> Localisation</th>
                        <th class="px-6 py-1 bg-gray-50 text-left text-[16px] font-bold  text-black "> Id du colis</th>
                        <th class="px-2 py-1 bg-gray-50 text-left text-[16px] font-bold  text-black "> Nom et prenoms</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y-2 divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 font-bold text-[15px]"> <input type="checkbox" name="" id="" class=" mr-2">
                            08/05/23</td>
                        <td class="px-6 py-4 ">
                            <div class="bg-fuchsia-600  text-[16px] rounded text-white w-[82px] h-[29px] "><label for=""
                                    class="ml-2 mt-2 font-bold">En cours</label></div>
                        </td>
                        <td class="px-6 py-4 text-[15px]">New York</td>
                        <td class="px-6 py-4 text-[15px]">ACFG-0987</td>
                        <td class="px-2 py-4 text-[15px]">Junior RAMIREZ</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold text-[15px]"> <input type="checkbox" name="" id="" class=" mr-2">
                            20/04/23</td>
                        <td class="px-6 py-4 ">
                            <div class="bg-green-600  text-[16px] rounded text-white w-[82px] h-[28px]"><label for=""
                                    class="ml-5 font-bold">Livré</label></div>
                        </td>
                        <td class="px-6 py-4 text-[15px]">Los Angeles</td>
                        <td class="px-6 py-4 text-[15px]">9BG9-1235</td>
                        <td class="px-2 py-4 text-[15px]">Marc ANSI</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold text-[15px]"> <input type="checkbox" name="" id="" class=" mr-2">
                            08/05/23</td>
                        <td class="px-6 py-4 ">
                            <div class="bg-cyan-600  text-[16px] rounded text-white w-[82px] h-[29px]"><label for=""
                                    class="ml-1 mt-1 font-bold">En transit</label></div>
                        </td>
                        <td class="px-6 py-4 text-[15px]">New York</td>
                        <td class="px-6 py-4 text-[15px]">ACFG-0987</td>
                        <td class="px-2 py-4 text-[15px]">Junior RAMIREZ</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold text-[15px]"> <input type="checkbox" name="" id="" class=" mr-2">
                            20/04/23</td>
                        <td class="px-6 py-4 ">
                            <div class="bg-rose-600  text-[16px] rounded text-white w-[82px] h-[29px]"><label for=""
                                    class="ml-3 mt-1 font-bold">Annulé</label></div>
                        </td>
                        <td class="px-6 py-4 text-[15px]">Los Angeles</td>
                        <td class="px-6 py-4 text-[15px]">9BG9-1235</td>
                        <td class="px-2 py-4 text-[15px]">Marc ANSI</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold text-[15px]"> <input type="checkbox" name="" id="" class=" mr-2">
                            08/05/23</td>
                        <td class="px-6 py-4 ">
                            <div class="bg-fuchsia-600  text-[16px] rounded text-white w-[82px] h-[29px]"><label for=""
                                    class="ml-2 mt-1 font-bold">En cours</label></div>
                        </td>
                        <td class="px-6 py-4 text-[15px]">New York</td>
                        <td class="px-6 py-4 text-[15px]">ACFG-0987</td>
                        <td class="px-2 py-4 text-[15px]">Junior RAMIREZ</td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 font-bold text-[15px]"> <input type="checkbox" name="" id="" class=" mr-2">
                            20/04/23</td>
                        <td class="px-6 py-4 ">
                            <div class="bg-stone-500   text-[16px] rounded text-white w-[83px] h-[29px]"><label for=""
                                    class="ml-1 mt-1 font-bold">En attente</label></div>
                        </td>
                        <td class="px-6 py-4 text-[15px]">Los Angeles</td>
                        <td class="px-6 py-4 text-[15px]">9BG9-1235</td>
                        <td class="px-2 py-4 text-[15px]">Marc ANSI</td>
                    </tr>
                </tbody>
            </table>
            <!-- table for mobile -->
            <table class="w-[328px] divide-y mx-auto border-2  sm:hidden table">
                <thead class="">
                    <tr>
                        <th class="px-3 bg-gray-50 text-left text-[16px] font-bold text-black "> <input type="checkbox"
                                name="" id="" class=" mr-1"> Date</th>
                        <th class="px-6 pl-24  bg-gray-50 text-left text-[16px] font-bold text-black "> Status</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y-2 divide-gray-200">
                    <tr>
                        <td class="px-3  font-bold text-[14px]"> <input type="checkbox" name="" id="" class=" mr-1">
                            08/05/23</td>
                        <td class="px-6 pl-24 py-4 ">
                            <div class="bg-fuchsia-600  text-[14px] rounded text-white w-[72px] h-[26px] "><label for=""
                                    class="ml-2  font-bold">En cours</label></div>
                        </td>

                    </tr>
                    <tr>
                        <td class="px-3 font-bold text-[14px]"> <input type="checkbox" name="" id="" class=" mr-1">
                            20/04/23</td>
                        <td class="px-6 pl-24 py-4 ">
                            <div class="bg-green-600  text-[14px] rounded text-white w-[74px] h-[26px]"><label for=""
                                    class="ml-5 font-bold">Livré</label></div>
                        </td>

                    </tr>
                    <tr>
                        <td class="px-3 font-bold text-[14px]"> <input type="checkbox" name="" id="" class=" mr-1">
                            08/05/23</td>
                        <td class="px-6 pl-24 py-4 ">
                            <div class="bg-cyan-600  text-[14px] rounded text-white w-[72px] h-[26px]"><label for=""
                                    class="ml-1 mt-1 font-bold">En transit</label></div>
                        </td>

                    </tr>
                    <tr>
                        <td class="px-3 font-bold text-[14px]"> <input type="checkbox" name="" id="" class=" mr-1">
                            20/04/23</td>
                        <td class="px-6 pl-24 py-4 ">
                            <div class="bg-rose-600  text-[14px] rounded text-white w-[72px] h-[26px]"><label for=""
                                    class="ml-3 mt-1 font-bold">Annulé</label></div>
                        </td>

                    </tr>
                    <tr>
                        <td class="px-3 font-bold text-[14px]"> <input type="checkbox" name="" id="" class=" mr-1">
                            08/05/23</td>
                        <td class="px-6 pl-24 py-4 ">
                            <div class="bg-fuchsia-600  text-[14px] rounded text-white w-[72px] h-[26px]"><label for=""
                                    class="ml-2 mt-1 font-bold">En cours</label></div>
                        </td>

                    </tr>
                    <tr>
                        <td class="px-3 font-bold text-[13px]"> <input type="checkbox" name="" id="" class=" mr-1">
                            20/04/23</td>
                        <td class="px-6 pl-24 py-4 ">
                            <div class="bg-stone-500   text-[14px] rounded text-white w-[76px] h-[26px]"><label for=""
                            class="ml-1 mt-1 font-bold">En attente</label></div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
export default {
    name: "moncomptes",

};
</script>
<style></style>