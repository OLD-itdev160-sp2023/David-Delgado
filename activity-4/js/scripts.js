//welcome message
var user = 'David'
var salutation = 'Hello'
var greeeting = salutation + user + ' Here are the lastest Atom Reviews'
var greetingEl = document.getElementById('greeting')

greeeting.textContent = greeting;

//product price 
var price = 20
studentDiscount = .10
studentPrice = price - (price* studentDiscount)
priceEl = document.getElementById('price')
studentPriceEL = document.getElementById('student-price')

priceEl.textContent = price.toFixed(2)
studentPriceEL.textContent = studentPrice.toFixed(2)