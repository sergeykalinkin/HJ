'use strict'

let money = prompt("Привет! Каков ваш бюджет на месяц? (в рублях)");
let time = prompt("Ввведите дату в формате YYYY-MM-DD");
let expen = prompt("Введите обязательную статью расходов в этом месяце");
let expen1 =prompt("Во сколько обойдется?")


var savings = false;
var oexpen = {};
var income = [];

alert(" Бюждет на один день: "+(money/30)+"рублей"
);
var appData = {a:money, b:time, c:{expen:expen1}, d:oexpen, e:income, f:savings}
