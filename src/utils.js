import Moment from 'moment'
import Numeral from 'numeral'

Moment.updateLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sept_Oct_Nov_Dic'.split('_'),
    weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mier_Jue_Vier_Sab'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
})

export default {
    translate,
    dateLarge,
    dateTimeLarge,
    cash
}

function translate(value) {
    switch(value) {
        case 'enabled': return 'Habilitado'
        case 'disabled': return 'Deshabilitado'
        case 'success': return 'Finalizado'
        case 'error': return 'Error'
        default: return value
    }
}

function dateLarge(date) {
    return Moment(date).locale('es').format('dddd DD MMMM YYYY')
}

function dateTimeLarge(date) {
    return Moment(date).locale('es').format('dddd DD MMMM YYYY hh:mm A')
}

function cash(value) {
    return Numeral(value).format('$0,0.00')
}