<script>

	import 'flatpickr/dist/flatpickr.css'
    import Flatpickr from 'svelte-flatpickr'

    export let label = ''
    export let value = new Date()

    export let min = null
    export let max = null

    export let time = false
    export let column = true

    const options = {
        minDate: min,
        maxDate: max,
        altInput: true,
        allowInput: true,
        enableTime: time,
        dateFormat: time? 'd m Y h:i K' : 'd m Y'
    }

</script>

<div class:column={ column }>
    <div class="field">
        {#if label}
            <label for="" class="label">{ label }</label>
        {/if}
        <div class="control has-icons-left">
            <span class="icon"><i class="fas fa-calendar"></i></span>

            <Flatpickr {options} bind:value />

        </div>
    </div>
</div>