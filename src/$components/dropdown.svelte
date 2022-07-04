<script>

    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    export let options = []
    export let value = null

    export let text = null
    export let icon = 'angle-down'
    export let color = ''

    export let isRight = false

    let isActive = false

    function setValue(option) {
        isActive = false
        value = option.value
        dispatch('selected', value)
        
        if(option.click)
            option.click()
    }

</script>

<div class="dropdown" class:is-active={ isActive } class:is-right={ isRight }>
    <div class="dropdown-trigger">
        <button on:click={() => isActive = !isActive} class="button is-{ color }" aria-haspopup="true" aria-controls="dropdown-menu">
            {#if text}
                <span>{ text }</span>
            {/if}
            <span class="icon is-small">
                <i class="fas fa-{ icon }" aria-hidden="true" />
            </span>
        </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
            {#each options as option}
                {#if option === 'divider'}
                    <hr class="dropdown-divider" />
                {:else}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a on:click={() => setValue(option)} class="dropdown-item">
                        { option.html || option.text }
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</div>
