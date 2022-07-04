<script>

    import { onMount } from 'svelte'
    import { navigateTo } from 'svelte-router-spa'
    import { SessionStore, ToastStore } from '../stores'

    import SessionsService from '../$services/sessions.service'
    import Storage from '../storage'

    import Button from '../$components/button.svelte'

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

<style>

    li {
        padding: 16px;
        font-weight: bold;
        cursor: pointer;
    }

    li.active {
        color: #E7E7FB;
        background: #8950F0;
        border-top-right-radius: 32px;
        border-bottom-right-radius: 32px;
    }
</style>

{#if $SessionStore}    
    <div class="columns" style="height: 100vh;">
        <div class="column is-2" style="background: whitesmoke;">
            <br>
            <div class="items center">
                <figure class="image is-96x96">
                    <img src="favicon.png" alt="brand">
                </figure>
            </div>
            <br>
            <ul>
                <li on:click={() => navigateTo('/home')} class:active={ path === '/home' }>Home</li>
                <li on:click={() => navigateTo('/bills')} class:active={ path === '/bills' }>Gastos</li>
            </ul>
            <br>
            <div class="items right">
                <!-- svelte-ignore a11y-missing-attribute -->
                <a on:click={ logout }>Salir</a>
            </div>
        </div>
        <div class="column">
            <div class="columns">
                <div class="column">
                    <div class="items right">
                        <Button icon="user" text={ $SessionStore.user.name } color="white" />
                    </div>
                </div>
            </div>
            <div class="columns is-centered">
                <div class="column is-11">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
{/if}