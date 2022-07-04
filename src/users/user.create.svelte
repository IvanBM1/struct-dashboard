<script>

    import { createEventDispatcher } from 'svelte'
    import { UserStore, ToastStore } from '../stores'

    import UserService from '../$services/users.service'

    import InputText from '../$components/input.text.svelte'
    import Form from '../$components/form.svelte'

    const dispatch = createEventDispatcher()

    let loading = false
    let data = {}

    async function createUser() {

        loading = true
        const response = await UserService.createUser(data)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        UserStore.append(response.data)

        ToastStore.success('¡creado!')
        dispatch('created')
    }

</script>

<Form on:submit={ createUser } on:canceled { loading } >
    <div class="columns">
        <InputText bind:value={ data.name } label="Nombre" icon="tag" placeholder="Ingrese el nombre" />
    </div>
</Form>