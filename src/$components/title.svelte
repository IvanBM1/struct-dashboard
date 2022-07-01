<script>

    export let title = null
    export let titleIcon = null
    export let titleSize = null

    export let subtitle = null
    export let subtitleIcon = null
    export let subtitleSize = null

    export let center = false

</script>

<div class="items" class:center={ center }>
    <div class="title is-{ titleSize }">
        <span class="icon-text">
            {#if titleIcon}
                <span class="icon"><i class="fas fa-{ titleIcon }"></i></span>
            {/if}
            <span>{ title }</span>
        </span>
    </div>
    {#if subtitle != undefined && subtitle != null}
        {#if subtitleIcon}
            <span class="icon"><i class="fas fa-{ subtitleIcon }"></i></span>
        {/if}
        <div class="subtitle is-{ subtitleSize }">{ subtitle }</div>
    {/if}
</div>