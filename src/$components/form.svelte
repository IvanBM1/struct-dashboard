<script>

    import { createEventDispatcher } from 'svelte'

    import Loading from './loading.svelte'

    const dispatch = createEventDispatcher()

    export let loading = false

</script>

<form on:submit|preventDefault >
    
    <slot></slot>

    <Loading { loading } />

    {#if !loading}
        <slot name="buttons">
            <div class="buttons">
                <button on:click={() => dispatch('canceled')} type="button" class="button is-white">
                    <span class="icon"><i class="fas fa-ban"></i></span>
                    <span>Cancelar</span>
                </button>
                <button type="submit" class="button is-primary">
                    <span class="icon"><i class="fas fa-save"></i></span>
                    <span>Guardar</span>
                </button>
            </div>
        </slot>
    {/if}
</form>