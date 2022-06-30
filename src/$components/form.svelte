<script>

    import { createEventDispatcher } from 'svelte'

    import Button from './button.svelte'
    import Loading from './loading.svelte'

    const dispatch = createEventDispatcher()

    export let loading = false

</script>

<form on:submit|preventDefault >
    
    <slot></slot>

    <Loading { loading } />

    {#if !loading}
        <slot name="buttons">
            <div class="columns">
                <div class="column">
                    <div class="buttons">
                        <Button text="Cancelar" icon="ban" color="white" on:click={() => dispatch('canceled')} />
                        <Button text="Guardar" icon="save" color="primary" type="submit" />
                    </div>
                </div>
            </div>
        </slot>
    {/if}
</form>