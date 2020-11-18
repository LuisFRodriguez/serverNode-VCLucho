let hollidaysChibchombia = require("colombia-holidays")
let dateFormat = require('date-format');
let DateDiff = require('date-diff');

class HandleDate {

    constructor(date1, date2){
        this.date1 = date1;
        this.date2 = date2;
        
    }

ToChangeFormatDate () {
    var d = new Date(this.date1),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
return [year, month, day].join('-');


}







}

module.exports={
    HandleDate: HandleDate
}