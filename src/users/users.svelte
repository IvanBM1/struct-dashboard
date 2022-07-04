<script>

    import { onMount } from 'svelte'
    import { UsersStore, UserStore, ToastStore } from '../stores'

    import UsersService from '../$services/users.service'
    import Utils from '../utils'

    import Table from '../$components/table.svelte'
    import Search from '../$components/search.svelte'
    import Button from '../$components/button.svelte'

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

<Search on:enter={ getUsers } bind:value={ query.find } >
    <Button on:click={() => UserStore.modalCreate()} text="Agregar" icon="plus" color="primary" size="small" />
</Search>

<Table bind:query on:change={ getUsers } { metadata } { loading }>
    <thead>
        <th>#</th>
        <th>Nombre</th>
        <th>Fecha</th>
    </thead>
    <tbody>
        {#each $UsersStore as user, index}
            <tr on:click={() => UserStore.modalRead(user)}>
                <td>{ (index+1) + ( metadata.page * metadata.limit ) }</td>
                <td>{ user.name }</td>
                <td>{ Utils.dateLarge(user.created) }</td>
            </tr>
        {/each}
    </tbody>
</Table>