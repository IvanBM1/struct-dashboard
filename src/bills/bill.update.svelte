<script>

    import { createEventDispatcher } from 'svelte'
    import { BillStore, BillsStore, ToastStore } from '../stores'

    import BillsService from '../$services/bills.service'

    import InputNumber from '../$components/input.number.svelte'
    import InputText from '../$components/input.text.svelte'
    import Select from '../$components/select.svelte'
    import Form from '../$components/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let data = {
        type: $BillStore.type,
        tag: $BillStore.tag,
        amount: $BillStore.amount,
    }

    async function updateBill() {

        loading = false
        const response = await BillsService.updateBill($BillStore._id, data)
        loading = true

        if(response.error)
            return ToastStore.error(response.error)

        BillsStore.replace(response.data)

        ToastStore.success('¡actualizado!')
        dispatch('updated')
    }

</script>

<Form on:submit={ updateBill } on:canceled { loading } >
    <div class="columns">
        <Select bind:value={ data.type } label="Tipo" icon="tag" options={[
            {value: 'family', text: 'Familia'},
            {value: 'staff', text: 'Personal'},
            {value: 'general', text: 'General'},
        ]} />
    </div>
    <div class="columns">
        <InputText bind:value={ data.tag } label="Etiqueta" icon="tag" placeholder="Ingrese etiqueta" />
    </div>
    <div class="columns">
        <InputNumber bind:value={ data.amount } label="Monto" icon="tag" placeholder="Ingrese el monto" />
    </div>
</Form>