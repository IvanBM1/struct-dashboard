<script>

    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    const dispatch = createEventDispatcher()

    export let value = null
    export let filters = false
    
    let input = null
    let showInput = false
    let showFilters = false

    function onKeyup(event) {
        
        dispatch('input', value)

        if(event.code === 'Enter')
            dispatch('enter', value)

        if(!value)
            dispatch('enter')
    }

    function inputFocus() {
        showInput = true
        setTimeout(() => input.focus(), 100)
    }

    function inputBlur() {
        if(!value) showInput = false
    }

</script>

<style>
    .control {
        width: 100%;
    }
    .is-filters {
        width: 94%;
    }
</style>

<div class="space bottom">
    <div class="items space">
        {#if showInput}
            <div class="control has-icons-left" class:is-filters={ filters } in:fade>
                <input bind:this={ input } bind:value on:keyup={ onKeyup } on:blur={ inputBlur } type="text" class="input is-small" placeholder="Buscar">
                <span class="icon is-small is-left"><i class="fas fa-search"></i></span>
            </div>
        {/if}
        {#if !showInput}
            <div in:fade>
                <slot></slot>
                <button on:click={ inputFocus } class="button is-small">
                    <span class="icon"><i class="fas fa-search"></i></span>
                    <span>Buscar</span>
                </button>
            </div>
        {/if}
        {#if filters}
            <button on:click={() => showFilters = !showFilters} class="button is-small" class:is-primary={ showFilters }>
                <span class="icon"><i class="fas fa-filter"></i></span>
            </button>
        {/if}
    </div>
</div>

{#if showFilters && filters}
    <div class="columns">
        <slot name="filters"></slot>
    </div>
{/if}