// Here you put how much for discount
const discount_percentage = 30

const zero_english_year_price = 300
const zero_english_month_price = 29
const zero_english_lifetime_price = 547

const ipa_course_price = 100
const grammar_course_price = 60


// Curso de Inglés desde 0
let ze_today_price = zero_english_year_price - (zero_english_year_price * (discount_percentage/100))
let ze_you_save = zero_english_year_price - ze_today_price

document.getElementById("ze-today-price").innerHTML = '$' + ze_today_price + ' USD'
document.getElementById("ze-you-save").innerHTML = '$' + ze_you_save + ' USD';
document.getElementById("ze-discount-percentage").innerHTML = ' ('+ discount_percentage + '% de descuento)'


// Curso de Fonética
let ipa_today_price = ipa_course_price - (ipa_course_price * (discount_percentage/100))
let ipa_you_save = ipa_course_price - ipa_today_price

document.getElementById("ipa-today-price").innerHTML = '$' + ipa_today_price + ' USD'
document.getElementById("ipa-you-save").innerHTML = '$' + ipa_you_save + ' USD';
document.getElementById("ipa-discount-percentage").innerHTML = ' ('+ discount_percentage + '% de descuento)'



// Grammar Course
let gc_today_price = grammar_course_price - (grammar_course_price * (discount_percentage/100))
let gc_you_save = grammar_course_price - gc_today_price

document.getElementById("gc-today-price").innerHTML = '$' + gc_today_price + ' USD'
document.getElementById("gc-you-save").innerHTML = '$' + gc_you_save + ' USD';
document.getElementById("gc-discount-percentage").innerHTML = ' ('+ discount_percentage + '% de descuento)'