<script>

    import UserLogin from '../users/user.login.svelte'

</script>

<style>

    .columns {
        height: 100vh;
    }

    .column.background {
        background-color: #8950F0;
    }

</style>

<div class="columns">
    <div class="column items center">
        <div class="box" style="min-width: 50%;">
            <div class="items center">
                <img src="favicon.png" alt="Favicon" style="padding: 32px 0;">
            </div>
            <UserLogin />
        </div>
    </div>
    <div class="column background">
    </div>
</div>