<template>
    <div class="grid grid-cols-1  grid-rows-1 bg-stone-900  ">
        <div class="">
            <form action="" method="post" class=" pl-4 w-12/12 h-full mt-12 ml-10 pb-6 border-[#db0f31] ">
                <h1 class="text-4xl mb-4  ml-32 text-[#db0f31] font-bold  ">Login</h1>

                <div class="relative mb-3 pb">
                    <input type="email"
                        class="peer m-0 block h-[58px] w-96 rounded border-solid border-[#db0f31] border-2 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-[#db0f31] transition duration-200 ease-linear placeholder:text-[#db0f31] focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                        id="floatingInput" placeholder="Email Adress" />
                    <label for="floatingInput"
                        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-[#db0f31] transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Email
                        Adress</label>
                </div>

                <!--Password input-->
                <div class="relative mb-3">
                    <input type="Password"
                        class="peer m-0 block h-[58px] w-96 rounded border-solid border-[#db0f31] border-2 bg-white bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-[#db0f31] transition duration-200 ease-linear placeholder:text-[#db0f31] focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                        id="floatingInput" placeholder="Password" />
                    <label for="floatingInput"
                        class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-[#db0f31] transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary">Password</label>
                </div>
                <button
                    class="bg-[#db0f31] text-white rounded-md hover:bg-slate-950  mt-7 text-lg w-32  h-14 ml-8 font-mono ">Login</button>
                <button
                    class=" bg-[#db0f31] text-white rounded-md hover:bg-slate-950  ml-10 mt-7 text-lg w-32  h-14  font-mono ">Sign
                    in</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {

}
</script>