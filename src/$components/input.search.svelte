<script>

    import { createEventDispatcher } from 'svelte'
    import InputText from './input.text.svelte'

    const dispatch = createEventDispatcher()

    export let value = null
    export let label = ''

    function onKeyup(event) {
        dispatch('input', value)
        if(event.code === 'Enter')
            dispatch('enter', value)
    }

</script>

<style>
    .field {
        position: relative;
    }
    .label {
        font-size: 14px;
        font-weight: 200;
        position: absolute;
        z-index: 1;
        background: white;
        left: 8px;
        top: -16px;
        padding: 4px;
    }
</style>

<InputText on:keyup={ onKeyup } on:focus bind:value icon="search" placeholder="Buscar" { label } />