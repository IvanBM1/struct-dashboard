<script>

    import Loading from './loading.svelte'

    export let items = 0
    export let loading = false

</script>

<Loading { loading } />

{#if !items}
    <div class="notification">Sin resultados</div>
{/if}

{#if !loading && items}
    <div class="column">
        <div class="table-container">
            <table class="table is-fullwidth">
                <slot></slot>
            </table>
        </div>
    </div>
{/if}