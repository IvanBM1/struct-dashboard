<script>

    export let value = null
    export let label = null
    export let icon = null
    export let iconRight = null

    export let placeholder = ''
    export let color = ''
    export let size = ''

    export let loading = false
    export let disabled = false
    export let readonly = false

</script>

<style>
    .field {
        position: relative;
    }
    .label {
        font-size: 14px;
        font-weight: 200;
        position: absolute;
        z-index: 1;
        background: white;
        left: 8px;
        top: -16px;
        padding: 4px;
    }
</style>

<div class="column">
    <div class="field">
        {#if label}
            <label for="" class="label">{ label }</label>
        {/if}
        <p class="control" class:has-icons-left={ icon } class:has-icons-right={ iconRight } class:is-loading={ loading } >
            <input bind:value class="input is-{ color } is-{ size }" type="password" { placeholder } { disabled } { readonly } />
            {#if icon}
                <span class="icon is-small is-left"><i class="fas fa-lock" /></span>
            {/if}
        </p>
    </div>
</div>