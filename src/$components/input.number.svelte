<script>

    export let value = null
    export let label = null

    export let icon = null
    export let iconType = 'fas'

    export let size = null
    export let color = null
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
                on:change
                bind:value
                step="0.001"
                class="input is-{ color } is-{ size }" type="number"
                { placeholder }
                { disabled }
                { readonly }
            />

            {#if icon}
                <span class="icon is-small is-left"><i class="{ iconType } fa-{ icon }" /></span>
            {/if}
        </p>
    </div>
</div>