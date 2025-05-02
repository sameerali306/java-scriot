const date=document.getElementById("date")
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")

const today=new Date()
const weekDays=["sunday","monday","tuesday","wensday","thursday","friday","saturday"]
const allMonths=["january","febuary","march","april","may","june","july","august","september","october","november","december"]
date.innerHTML=(today.getDate()<10?"0":"")+today.getDate()
day.innerHTML=weekDays[today.getDay()]
month.innerHTML=allMonths[today.getMonth()]
year.innerHTML=today.getFullYear()
