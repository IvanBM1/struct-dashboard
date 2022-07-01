<script>

    import { createEventDispatcher } from 'svelte'

    export let options = []
    export let label = null
    export let icon = null
    
    export let selectedId = null
    export let selected = null
    export let value = null
    
    export let isActive = false
    export let column = true

    const dispatch = createEventDispatcher()

    function setSelected(option) {

        selected = option
        selectedId = option._id
        value = option.text

        options = []
        isActive = false

        dispatch('select', {...option})
    }

    function clear() {
        selected = null
        selectedId = null
        value = null
        isActive = false
        options = []
    }

    function onKeyup(event) {

        if(event.code === 'Enter') {
            dispatch('enter', options[0])
            clear()
            return
        }

        dispatch('input')
    }

</script>

<style>
    .fullwidth {
        min-width: 100%;
    }
</style>

<div class:column={ column }>
    <div class="dropdown fullwidth" class:is-active={ isActive }>
        <div class="dropdown-trigger fullwidth">
            <div class="field">
                {#if label}
                    <label for="" class="label">{ label }</label>
                {/if}
                <div class="control" class:has-icons-left={ icon }>
                    {#if icon}
                        <span class="icon is-small is-left"><i class="fas fa-{ icon }" /></span>
                    {/if}
                    <input
                        on:blur={() => setTimeout(() => isActive = false, 500)}
                        on:keyup={ onKeyup }
                        bind:value={ value }
                        type="text"
                        class="input"
                        placeholder="Buscar"
                    >
                </div>
            </div>
        </div>
        <div class="dropdown-menu fullwidth" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
                {#each options as option}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={() => setSelected(option)} class="dropdown-item" class:is-active={ value === option.text }>{ option.text }</a>
                {/each}
            </div>
        </div>
    </div>
</div>