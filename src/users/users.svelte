<script>

    import { onMount } from 'svelte'
    import { UsersStore, UserStore, ToastStore } from '../stores'

    import UsersService from '../$services/users.service'
    import Utils from '../utils'
    
    import Table from '../$components/table.svelte'
    import Search from '../$components/search.svelte'
    import Button from '../$components/button.svelte'
    import Select from '../$components/select.svelte'

    let loading = false
    let query = {}
    let metadata = {}

    onMount(getUsers)

    async function getUsers() {

        loading = true
        const response = await UsersService.getUsers(query)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        UsersStore.set(response.data.users)
        metadata = response.data.metadata
    }

</script>

<Search on:enter={ getUsers } bind:value={ query.find } filters >
    <Button on:click={() => UserStore.modalCreate()} text="Agregar" icon="plus" color="primary" size="small" />
    <div slot="filters">
        <Select on:change={ getUsers } bind:value={ query.role } size="small" placeholder="Rol" narrow options={[
            {value: 'user', text: 'Usuarios'},
            {value: 'admin', text: 'Administradores'}
        ]} />
    </div>
</Search>

<Table bind:query on:change={ getUsers } { metadata } { loading }>
    <thead>
        <th>#</th>
        <th>Nombre</th>
        <th>Rol</th>
        <th>Fecha</th>
    </thead>
    <tbody>
        {#each $UsersStore as user, index}
            <tr>
                <td>{ (index+1) + ( metadata.page * metadata.limit ) }</td>
                <td>{ user.name }</td>
                <td>{ user.role }</td>
                <td>{ Utils.dateLarge(user.created) }</td>
            </tr>
        {/each}
    </tbody>
</Table>