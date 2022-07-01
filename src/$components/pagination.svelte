<script>

    import { createEventDispatcher } from 'svelte'

    export let query = {
        page: 0
    }

    export let metadata = {
        page: 0,
        next: null,
        previous: null
    }

    const dispatch = createEventDispatcher()

    function onNext() {

        if(metadata.next != null)
            query.page = metadata.next
        
        dispatch('change')
    }

    function onPrevious() {

        if(metadata.previous != null)
            query.page = metadata.previous
        
        dispatch('change')
    }

    function onReset() {
        query.page = 0
        dispatch('change')
    }

</script>

<div class="field has-addons">
    <p class="control">
        <button on:click={ onPrevious } class="button is-small is-white" disabled={ metadata.previous === null }>
            <span class="icon is-small"><i class="fas fa-arrow-left" /></span>
        </button>
        <button class="button is-small is-white">
            <span>{ metadata.page + 1 } de { metadata.pages }</span>
        </button>
        <button on:click={ onNext } class="button is-small is-white" disabled={ metadata.next === null }>
            <span class="icon is-small"><i class="fas fa-arrow-right" /></span>
        </button>
    </p>
</div>