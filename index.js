/* Your Code Here */
const createEmployeeRecord = (data) => {
    return {
        firstName: data[0],
        familyName: data[1],
        title:data[2],
        payPerHour: data[3],
        timeInEvents:[],
        timeOutEvents: [], 
    }
};

const createEmployeeRecords = arrays => {
    return arrays.map(createEmployeeRecord)
}

const createTimeInEvent = function(dateStamp){
    this.timeInEvents.push({
        type:"TimeIn",
        date:dateStamp.split("")[0],
        hour: parseInt(dateStamp.split("")[1])
    })

    return this
}

const createTimeOutEvent = function(dateStamp){
    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateStamp.split("")[0],
        hour: parseInt(dateStamp.split("")[1])
    })
    return this
}

const hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(e => e.date === date)
    let timeOut = this.timeOutEvents.find(e => e.date ===date)
    return (timeOut.hour - timeIn.hour)/100
}

const wagesEarnedOnDate = function (date){
    return hoursWorkedOnDate.call(this,date)*this.payPerHour
}
const findEmployeeByFirstName = (array, name) => {
    return array.find(rec => rec.firstName === name)
}

let calculutePayroll = function(employeeRec){
    return employeeRec.reduce((memo, rec)=> memo + allWagesFor.call(rec),-0)
}















/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

