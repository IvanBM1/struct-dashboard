<script>

    import { createEventDispatcher } from 'svelte'
    import { BillsStore, ToastStore } from '../stores'

    import BillService from '../$services/bills.service'

    import InputNumber from '../$components/input.number.svelte'
    import InputText from '../$components/input.text.svelte'
    import Select from '../$components/select.svelte'
    import Form from '../$components/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let data = {}

    async function createBill() {

        loading = true
        const response = await BillService.createBill(data)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        BillsStore.append(response.data)

        ToastStore.success('¡creado!')
        dispatch('created')
    }

</script>

<Form on:submit={ createBill } on:canceled { loading } >
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