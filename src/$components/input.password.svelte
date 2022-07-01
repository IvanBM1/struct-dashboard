<script>

    export let value = null
    export let label = null
    export let icon = null

    export let placeholder = ''
    export let color = ''
    export let size = ''

    export let disabled = false
    export let readonly = false

    export let column = true

</script>

<div class:column={ column }>
    <div class="field">
        {#if label}
            <label for="" class="label">{ label }</label>
        {/if}
        <p class="control" class:has-icons-left={ icon }>
            
            <input 
                bind:value 
                type="password" 
                class="input is-{ color } is-{ size }" 
                { placeholder } 
                { disabled } 
                { readonly } 
            />
            
            {#if icon}
                <span class="icon is-small is-left"><i class="fas fa-lock" /></span>
            {/if}
        </p>
    </div>
</div>