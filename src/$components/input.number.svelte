<script>

    export let value = null
    export let label = null
    
    export let icon = null
    export let iconType = 'fas'

    export let iconRight = null
    export let iconRightType = 'fas'

    export let placeholder = ''
    export let color = ''
    export let size = ''
    export let column = ''

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

<div class="column is-{ column }">
    <div class="field">
        {#if label}
            <label for="" class="label">{ label }</label>
        {/if}
        <p class="control" class:has-icons-left={ icon } class:has-icons-right={ iconRight } class:is-loading={ loading } >
            {#if icon}
                <span class="icon is-small is-left"><i class="{ iconType } fa-{ icon }" /></span>
            {/if}
            
            <input on:change bind:value step="0.001" class="input is-{ color } is-{ size }" type="number" { placeholder } { disabled } { readonly } />

            {#if iconRight}
                <span class="icon is-small is-right"><i class="{ iconRightType } fa-{ iconRight }" /></span>
            {/if}
        </p>
    </div>
</div>