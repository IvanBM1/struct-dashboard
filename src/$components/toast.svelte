<script>

    import { ToastStore } from '../stores'

</script>

<style>
    .notification {
        position: absolute;
        right: 16px;
        top: 16px;
        z-index: 99;
    }
</style>

{#if $ToastStore}
    <div class="notification is-{ $ToastStore.color }">
        <button on:click={() => ToastStore.set(null)} class="delete"></button>
        { $ToastStore.message }
    </div>
{/if}