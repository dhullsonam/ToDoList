const months = ["January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]

let dateHandler = new Date();

const todayDate = dateHandler.getDate()
const month = months[dateHandler.getMonth()]
const year = dateHandler.getFullYear()

export {
    todayDate,
    month,
    year
}