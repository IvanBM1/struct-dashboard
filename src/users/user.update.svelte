<script>

    import { createEventDispatcher } from 'svelte'
    import { UserStore, UsersStore, ToastStore } from '../stores'

    import UsersService from '../$services/users.service'

    import Form from '../$components/form.svelte'
    import InputText from '../$components/input.text.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let data = {
        name: $UserStore.name,
    }

    async function updateUser() {

        loading = false
        const response = await UsersService.updateUser($UserStore._id, data)
        loading = true

        if(response.error)
            return ToastStore.error(response.error)

        UsersStore.replace(response.data)

        ToastStore.success('¡actualizado!')
        dispatch('updated')
    }

</script>

<Form on:submit={ updateUser } on:canceled { loading } >
    <div class="columns">
        <InputText bind:value={ data.name } label="Nombre" icon="tag" placeholder="Ingrese el nombre" />
    </div>
</Form>