<script>

    import { createEventDispatcher } from 'svelte'
    import { UsersStore, ToastStore } from '../stores'

    import UsersService from '../$services/users.service'

    import Form from '../$components/form.svelte'
    import InputText from '../$components/input.text.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let data = {}

    async function createUser() {

        loading = true
        const response = await UsersService.createUser(data)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        UsersStore.append(response.data)

        ToastStore.success('¡creado!')
        dispatch('created')
    }

</script>

<Form on:submit={ createUser } on:canceled { loading } >
    <div class="columns">
        <InputText bind:value={ data.name } label="Nombre" icon="tag" placeholder="Ingrese el nombre" />
    </div>
</Form>