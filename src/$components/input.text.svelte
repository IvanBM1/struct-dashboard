<script>

    export let value = null
    export let label = null
    export let icon = null
    export let color = null
    export let size = null
    export let placeholder = null

    export let loading = false
    export let disabled = false
    export let readonly = false

    export let column = true

</script>

<div class:column={ column }>
    <div class="field">

        {#if label}
            <label for="" class="label">{ label }</label>
        {/if}

        <p class="control" class:has-icons-left={ icon } class:is-loading={ loading }>
            <input
                bind:value
                on:keyup
                on:focus
                class="input is-{ color } is-{ size }"
                type="text"
                { placeholder }
                { disabled }
                { readonly }
            />
            {#if icon}
                <span class="icon is-small is-left"><i class="fas fa-{ icon }" /></span>
            {/if}
        </p>
    </div>
</div>