<script>

    import { UserStore } from '../stores'

    import Utils from '../utils'

</script>

<div class="table-container">
    <table class="table is-fullwidth">
        <tbody>
            <tr>
                <th>Nombre</th>
                <td>{ $UserStore.name }</td>
            </tr>
            <tr>
                <th>Fecha de registro</th>
                <td>{ Utils.dateTimeLarge($UserStore.created) }</td>
            </tr>
        </tbody>
    </table>
</div>