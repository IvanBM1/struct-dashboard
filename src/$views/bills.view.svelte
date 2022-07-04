<script>

    import { BillStore } from '../stores'

    import Menu from '../$layouts/menu.svelte'
    import Modal from '../$components/modal.svelte'
    import Dropdown from '../$components/dropdown.svelte'

    import Bills from '../bills/bills.svelte'
    import BillRead from '../bills/bill.read.svelte'
    import BillCreate from '../bills/bill.create.svelte'
    import BillUpdate from '../bills/bill.update.svelte'
    import BillDelete from '../bills/bill.delete.svelte'

    export let currentRoute = null

</script>

<Menu path={ currentRoute.path }>
    <div class="title">Gastos</div>
    <hr>
    <Bills />
</Menu>

<Modal id="BillRead" title="Información" >
    <div class="items right">
        <Dropdown icon="cog" color="white" isRight options={[
            {value: 'edit', text: 'Editar', click: () => BillStore.modalUpdate()},
            {value: 'delete', text: 'Borrar', click: () => BillStore.modalDelete()},
        ]} />
    </div>
    <BillRead />
</Modal>

<Modal id="BillCreate" title="Crear" >
    <BillCreate on:created={ BillStore.modalClose } on:canceled={ BillStore.modalClose } />
</Modal>

<Modal id="BillUpdate" title="Editar" >
    <BillUpdate on:updated={ BillStore.modalClose } on:canceled={ BillStore.modalClose } />
</Modal>

<Modal id="BillDelete" title="Borrar" >
    <BillDelete on:deleted={ BillStore.modalClose } on:canceled={ BillStore.modalClose } />
</Modal>