<script>

    import { createEventDispatcher } from 'svelte'
    import { BillStore, BillsStore, ToastStore } from '../stores'

    import BillsService from '../$services/bills.service'
    import Utils from '../utils'

    import Form from '../$components/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false

    async function deleteBill() {

        loading = true
        const response = await BillsService.deleteBill($BillStore._id)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        BillsStore.remove($BillStore._id)

        ToastStore.success('¡borrado!')
        dispatch('deleted')
    }

</script>

<Form on:submit={ deleteBill } on:canceled { loading } >
    <div class="columns">
        <div class="column">
            <div class="title">¿Seguro que quieres borrar?</div>
            <div class="subtitle">{ Utils.translate($BillStore.type) } { Utils.cash($BillStore.amount) }</div>
        </div>
    </div>
</Form>