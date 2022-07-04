<script>

    import { createEventDispatcher } from 'svelte'
    import { fade } from 'svelte/transition'

    import { ModalStore } from '../stores'

    const dispatch = createEventDispatcher()

    export let block = false
    export let title = ''
    export let id = ''

    $: show = $ModalStore === id

    function onClose() {
        ModalStore.set(null)
        dispatch('closed')
    }

    window.onkeydown = function(event) {
        if(!block && event.keyCode === 27)
            onClose()
    }

</script>

{#if show}
    <div class="modal" class:is-active={ show } in:fade="{{duration: 200}}" out:fade="{{duration: 100}}">
        <div on:click={() => !block && onClose()} class="modal-background"></div>
        <div class="modal-card">
            {#if title}
                <header class="modal-card-head">
                    <p class="modal-card-title">{ title }</p>
                    <button on:click={() => !block && onClose()} class="delete" aria-label="close"></button>
                </header>
            {/if}
            <section class="modal-card-body">
                <div class="columns is-centered">
                    <div class="column is-11">
                        <slot></slot>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
            </footer>
        </div>
    </div>
{/if}