<script>
	import { onMount } from 'svelte';
    import Project from "$lib/components/project.svelte";
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte'
</script>
<div id='main' class='min-h-full lg:mx-auto mx-10 max-w-5xl font-roboto'>
    <div class='header'>
        <h1 class="lg:text-6xl md:text-6xl text-darker text-5xl font-black mt-10 animate__animated animate__fadeInUp">
            Leon Borowiec
        </h1>
        <p class='text-lg leading-6 tracking-wide animate__animated animate__fadeInUp'>
            @borox • python enjoyer • front-end developer & UI/UX Designer
        </p>
    </div>
    <div class='aboutme mt-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>

    <button class="px-5 py-4 bg-darker text-white rounded-xl mt-5 hover:scale-105 transition-transform">Get in touch</button>

    <div class="technologies mt-10">
        <h1 class="text-darker text-4xl font-black">Technologies</h1>
        <p>Some tools I use in my development process. Below is list of technologies I've used more than once.</p>
        <div class="border-2 border-[#ebebeb] px-4 py-4 rounded-xl mt-4 flex gap-4">
            <a href="https://python.org"><img src="icons/python.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/pytorch.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/react.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/svelte.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/tailwindcss.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/typescript.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/nextjs.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/javascript.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            <a href="https://python.org"><img src="icons/vsc.svg" width="32px" height="32px" alt="python" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
        </div>
    </div>

    <div class='projects mt-10'>
        <h1 class='lg:text-4xl text-4xl font-black text-darker'>Projects</h1>
        <p>Below is list with some of my projects. My design projects you can check <a href="https://dribbble.com/borox345" class="text-second">here</a>.</p>
        <div class="grid lg:grid-cols-3 grid-cols-1">
            <Project title="Rocki" description="Simple Discord Bot written in Python using Discord.py with external libraries and feauters." link="https://github.com/borox345/rocki" technology="Python"></Project>
            <Project title="borox.site" description="Source code of what you see now. And a few other landing pages I've used earlier." link="https://github.com/borox345/borox.site" technology="Svelte"></Project>
            <Project title="Dental office website" description="Front-end project for Dental office. Created in Svelte." link="https://dribbble.com/borox345" technology="Svelte" commercial=true></Project>
        </div>
    </div>

    <Footer footerType="socialmedia" class="font-roboto py-10">
        <hr class="color-black"/>
        <div class="pt-5 text-grey flex gap-6">
            <a href="mailto:leon.borowiec@gmail.com" class="hover:text-darker">mail</a>
            <a href="github.com/borox345" class="hover:text-darker">github</a>
            <a href="discord.com/users/314424536256872449" class="hover:text-darker">discord</a>
            <a href="https://dribbble.com/borox345" class="hover:text-darker">dribbble</a>
            <!-- <div class="mt-2 flex space-x-2">
                <a href="https://github.com/borox345"><img src="icons/github.svg" width="32px" height="32px" alt="github" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
                <a href="https://discord.com/users/314424536256872449"><img src="icons/discord.svg" width="32px" height="32px" alt="discord" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
                <a href="https://x.com/borox345"><img src="icons/twitter.svg" width="32px" height="32px" alt="twitter or x wtf" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
                <a href="https://dribbble.com/borox345"><img src="icons/dribbble.svg" width="32px" height="32px" alt="dribbble" class="hover:scale-110 transition-transform hover:cursor-pointer"/></a>
            </div> -->
        </div>
        <!-- <div class="md:flex md:justify-between lg:mx-40 pt-10">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mx-6">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-dark uppercase">Nasze usługi</h2>
              <FooterLinkGroup>
                <FooterLink liClass="mb-4 text-primary hover:text-dark" href="/stomatologia">Stomatologia</FooterLink>
                <FooterLink liClass="mb-4 text-primary hover:text-dark" href="/estetyczna">Medycyna estetyczna</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-dark">Informacje</h2>
              <FooterLinkGroup>
                <FooterLink liClass="mb-4 text-primary hover:text-dark" href="#team">Zespół</FooterLink>
                <FooterLink liClass="mb-4 text-primary hover:text-dark" href="#gabinet">O gabinecie</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-dark">Kontakt</h2>
              <FooterLinkGroup>
                <FooterLink liClass="mb-4 text-primary hover:text-dark" href="tel:501060288">tel. 501 060 288</FooterLink>
                <FooterLink liClass="mb-4 text-primary hover:text-dark" href="https://goo.gl/maps/uRae15x9AFAzkzbD8">ul. Nowogródzka 15, Kraków</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
          
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="flex items-center justify-center text-center">
            <FooterCopyright href="/" aClass="text-primary" spanClass="text-dark font-medium" by="GreenMed™" />
        </div> -->
    </Footer>

    <!-- <div class='socials'>
        <a href='mailto:leon.borowiec@gmail.com' class='text-lg leading-6 tracking-wide font-black pt-4 hover:underline animate__animated animate__fadeInUp'>mail</a>
        <a href='https://github.com/borox345' class='text-lg leading-6 tracking-wide font-black pt-4 hover:underline animate__animated animate__fadeInUp'>github</a>
        <a href='discrdo.com' class='text-lg leading-6 tracking-wide font-black pt-4 hover:underline animate__animated animate__fadeInUp'>discord</a>
    </div> -->
</div>

