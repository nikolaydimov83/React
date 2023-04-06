import moment from "../../node_modules/moment/moment"

export function dateToString(date){
    return moment(date).format('MMMM Do YYYY')
}