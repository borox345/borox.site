<script>
	/**
    * @type {any}
    */
	export let title

    /**
    * @type {any}
    */
	export let technology

    /**
    * @type {any}
    */
	export let description

    /**
    * @type {any}
    */
	export let link

    /**
    * @type {any}
    */
	export let commercial = false;
</script>

<div class='mt-2 border-2 w-[300px] border-[#ebebeb] hover:border-[#d6d5d5] transition-transform duration-750 rounded-md py-4 px-4'>
    <h2 class='text-2xl font-bold text-darker'><a href="{link}" class="hover:underline">{title}</a></h2>
    <a href="google.com" class='text-[#4F80FF]'>{technology}</a>
    <p>{description}</p>
    {#if commercial}
    <p class="pt-2 text-darker">*Commercial</p>
    {/if}
</div>