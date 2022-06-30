<script>

    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let value = ''
    export let label = null
    export let text = null
    export let icon = null
    export let size = ''
    export let required = true
    export let iconType = 'fa'
    export let options = []

    function onChange() {
        dispatch('change', value)
    }

</script>

<style>
    select, .select {
        width: 100%;
    }
    .margin {
        margin: 0 !important;
    }
    .space {
        margin-right: 8px !important;
    }
</style>

<div class="column">
    <div class="field">
        {#if label}
            <label for="" class="label">{ label }</label>
        {/if}
        <div class="control" class:has-icons-left={ icon }>
            <div class="select is-{ size } ">
                <select bind:value={ value } on:change={ onChange } { required } >
                    <option value="">{ text || 'Selecciona una opción' }</option>
                    {#each options as option}
                        <option value={ option.value }>{ option.text }</option>
                    {/each}
                </select>
            </div>
            {#if icon}
                <span class="icon is-{ size } is-left">
                    <i class="fas { iconType }-{ icon }" />
                </span>
            {/if}
        </div>
    </div>
</div>