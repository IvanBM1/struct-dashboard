<script>

    import { onMount } from 'svelte'
    import { navigateTo } from 'svelte-router-spa'
    import { SessionStore, ToastStore } from '../stores'

    import SessionsService from '../$services/sessions.service'
    import Storage from '../storage'

    export let path = null

    let loading = false

    onMount(verifySession)

    async function verifySession() {

        loading = true
        const response = await SessionsService.verifySession($SessionStore.token)
        loading = false

        if(response.success)
            return SessionStore.set(response.data)

        ToastStore.error(response.error)
        Storage.deleteItem('session')
        navigateTo('login')
    }

    function logout() {
        localStorage.removeItem('session')
        navigateTo('/')
    }

</script>

{#if $SessionStore}
    
    <!-- svelte-ignore a11y-missing-attribute -->
    <a on:click={ logout }>Salir</a>

    <div class="container">
        <slot></slot>
    </div>
{/if}