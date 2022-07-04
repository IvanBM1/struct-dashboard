<script>

    import { onMount } from 'svelte'
    import { BillsStore, BillStore, ToastStore } from '../stores'

    import BillsService from '../$services/bills.service'
    import Utils from '../utils'

    import Table from '../$components/table.svelte'
    import Search from '../$components/search.svelte'
    import Button from '../$components/button.svelte'

    let loading = false
    let query = {}
    let metadata = {}

    onMount(getBills)

    async function getBills() {

        loading = true
        const response = await BillsService.getBills(query)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        BillsStore.set(response.data.bills)
        metadata = response.data.metadata
    }

</script>

<Search on:enter={ getBills } bind:value={ query.find } >
    <Button on:click={() => BillStore.modalCreate()} text="Agregar" icon="plus" color="primary" size="small" />
</Search>

<Table bind:query on:change={ getBills } { metadata } { loading }>
    <thead>
        <th>#</th>
        <th>Tipo</th>
        <th>Etiqueta</th>
        <th>Monto</th>
        <th>Fecha</th>
    </thead>
    <tbody>
        {#each $BillsStore as bill, index}
            <tr on:click={() => BillStore.modalRead(bill)}>
                <td>{ (index+1) + ( metadata.page * metadata.limit ) }</td>
                <td>{ Utils.translate(bill.type) }</td>
                <td>{ bill.tag }</td>
                <td>{ Utils.cash(bill.amount) }</td>
                <td>{ Utils.dateLarge(bill.created) }</td>
            </tr>
        {/each}
    </tbody>
</Table>