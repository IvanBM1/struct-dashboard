<script>

    import Columns from './columns.svelte'
    import Column from './column.svelte'

    export let size = '12'

</script>

<Columns center >
    <Column { size }>
        <div class="card">
            <div class="card-content">
                <slot></slot>
            </div>
        </div>
    </Column>
</Columns>