<script>

    import { BillStore } from '../stores'

    import Utils from '../utils'

</script>

<div class="table-container">
    <table class="table is-fullwidth">
        <tbody>
            <tr>
                <th>Tipo</th>
                <td>{ Utils.translate($BillStore.type) }</td>
            </tr>
            <tr>
                <th>Etiqueta</th>
                <td>{ $BillStore.tag }</td>
            </tr>
            <tr>
                <th>Monto</th>
                <td>{ Utils.cash($BillStore.amount) }</td>
            </tr>
            <tr>
                <th>Fecha de registro</th>
                <td>{ Utils.dateTimeLarge($BillStore.created) }</td>
            </tr>
        </tbody>
    </table>
</div>