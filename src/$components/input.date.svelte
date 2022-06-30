<script>

	import 'flatpickr/dist/flatpickr.css'
    
    import Moment from 'moment'
    import Flatpickr from 'svelte-flatpickr'

    export let label = ''
    export let value = Moment().toDate()
    
    export let min = null
    export let max = null
    export let showTime = false

    const options = {
        minDate: min,
        maxDate: max,
        altInput: true,
        allowInput: true,
        enableTime: showTime,
        dateFormat: 'DD MM YYYY'
    }

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
        <div class="control has-icons-left">
            <span class="icon"><i class="fas fa-calendar"></i></span>
            <Flatpickr {options} bind:value />
        </div>
    </div>
</div>