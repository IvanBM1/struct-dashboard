<script>

    import Menu from '../$layouts/menu.svelte'

    export let currentRoute = null

</script>

<Menu path={ currentRoute.path }>
    <h1>Home</h1>
</Menu>