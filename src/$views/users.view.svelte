<script>

    import { UserStore } from '../stores'

    import Menu from '../$layouts/menu.svelte'
    import Modal from '../$components/modal.svelte'
    import Dropdown from '../$components/dropdown.svelte'

    import Users from '../users/users.svelte'
    import UserRead from '../users/user.read.svelte'
    import UserCreate from '../users/user.create.svelte'
    import UserUpdate from '../users/user.update.svelte'
    import UserDelete from '../users/user.delete.svelte'

    export let currentRoute = null

</script>

<Menu path={ currentRoute.path }>
    <Users />
</Menu>

<Modal id="UserRead" title="Información" >
    <div class="items right">
        <Dropdown icon="cog" color="white" isRight options={[
            {value: 'edit', text: 'Editar', click: () => UserStore.modalUpdate()},
            {value: 'delete', text: 'Borrar', click: () => UserStore.modalDelete()},
        ]} />
    </div>
    <UserRead />
</Modal>

<Modal id="UserCreate" title="Crear" >
    <UserCreate on:created={ UserStore.modalClose } on:canceled={ UserStore.modalClose } />
</Modal>

<Modal id="UserUpdate" title="Editar" >
    <UserUpdate on:updated={ UserStore.modalClose } on:canceled={ UserStore.modalClose } />
</Modal>

<Modal id="UserDelete" title="Borrar" >
    <UserDelete on:deleted={ UserStore.modalClose } on:canceled={ UserStore.modalClose } />
</Modal>