<script>
    import Typewriter from 'svelte-typewriter';
	import { onMount } from 'svelte';
    
    var text = ["te"]


</script>

<div class="bg-[#4F80FF] w-full h-screen text-white font-heading">
    <div class="lg:flex lg:grid-cols-2 grid-cols-1 justify-between items-center lg:space-x-20 lg:max-w-7xl md:max-w-4xl max-w-xl lg:mx-auto">
        <div class="relative lg:w-1/2 top-[225px]">
            <Typewriter>
                <h1 class="lg:text-8xl text-6xl font-bold max-w-xl ml-4">I make cool things</h1>
            </Typewriter>
        </div>
        <div class="lg:relative lg:top-[225px] absolute bottom-2 mt-4 lg:w-[550px] w-full mr-2 lg:h-[410px] h-[250px] bg-white rounded-3xl">
            <h1 class="text-[#354264] text-6xl font-semibold lg:pt-24 pt-16 lg:ml-16 ml-8">Leon</h1>
            <h1 class="text-[#4F80FF] text-3xl font-medium lg:ml-16 ml-8">borox.tv@gmail.com</h1>

            <div class="lg:ml-16 ml-8 lg:mt-36 mt-2 flex space-x-2">
                <a href="https://github.com/borox345"><img src="icons/github.svg" width="32px" height="32px" alt="github" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
                <a href="https://discord.com/users/314424536256872449"><img src="icons/discord.svg" width="32px" height="32px" alt="discord" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
                <a href="https://x.com/borox345"><img src="icons/twitter.svg" width="32px" height="32px" alt="twitter or x wtf" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
                <a href="https://dribbble.com/borox345"><img src="icons/dribbble.svg" width="32px" height="32px" alt="dribbble" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            </div>
        </div>
    </div>
</div>
