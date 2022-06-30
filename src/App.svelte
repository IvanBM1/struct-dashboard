<script>

    import { Router } from 'svelte-router-spa'
    import { routes } from './routes'

    import Toast from './$components/toast.svelte'

</script>

<Toast />
<Router {routes} />