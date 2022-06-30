<script>

    import { navigateTo } from 'svelte-router-spa'
    import { ToastStore } from '../stores'

    import UsersService from '../$services/users.service'
    import Storage from '../storage'

    import Columns from '../$components/columns.svelte'
    import InputText from '../$components/input.text.svelte'
    import InputPassword from '../$components/input.password.svelte'
    import Button from '../$components/button.svelte'
    import Form from '../$components/form.svelte'

    let loading = false
    let data = {
        email: '',
        password: ''
    }

    async function userLogin() {

        loading = true
        const response = await UsersService.userLogin(data)
        loading = false

        if(response.error)
            return ToastStore.error(response.error)

        Storage.setItem('session', response.data)
        navigateTo('home')
    }

</script>

<Form on:submit={ userLogin } { loading } >
    <Columns>
        <InputText bind:value={ data.email } label="Correo" icon="envelope" placeholder="Correo electronico" />
    </Columns>
    <Columns>
        <InputPassword bind:value={ data.password } label="Contraseña" icon="lock" placeholder="• • • • • • • • • • • •" />
    </Columns>
    <div slot="buttons">
        <Button type="submit" icon="save" text="Iniciar sessión" color="primary" fullwidth />
    </div>
</Form>