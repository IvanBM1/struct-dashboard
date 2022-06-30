<script>

    export let text = null
    export let type = 'button'

    export let icon = null
    export let iconType = 'fa'
    export let color = null
    export let size = null

    export let fullwidth = false
    export let outlined = false
    export let loading = false

</script>

<button 
    on:click
    type={ type }
    class="button is-{ color } is-{ size }"
    class:is-outlined={ outlined }
    class:is-fullwidth={ fullwidth }
    class:is-loading={ loading }
>
    {#if icon}
        <span class="icon"><i class="{ iconType } fa-{ icon }"></i></span>
    {/if}
    {#if text}
        <span>{ text }</span>
    {/if}
</button>