<script>

    import { navigateTo } from 'svelte-router-spa'

    import Button from '../$components/button.svelte'

</script>

<div class="items center">
    <div>
        <div class="title">Página no encontrada</div>
        <div class="title">404</div>
        <Button on:click={() => navigateTo('home')} text="Regresar" icon="home" color="primary" outlined fullwidth />
    </div>
</div>