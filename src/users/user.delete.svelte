<script>

    import { createEventDispatcher } from 'svelte'
    import { UserStore, UsersStore, ToastStore } from '../stores'

    import UsersService from '../$services/users.service'

    import Form from '../$components/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false

    async function deleteUser() {

        loading = true
        const response = await UsersService.deleteUser($UserStore._id)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        UsersStore.remove($UserStore._id)

        ToastStore.success('¡borrado!')
        dispatch('deleted')
    }

</script>

<Form on:submit={ deleteUser } on:canceled { loading } >
    <div class="columns">
        <div class="column">
            <div class="title">¿Seguro que quieres borrar?</div>
            <div class="subtitle">{ $UserStore.name }</div>
        </div>
    </div>
</Form>