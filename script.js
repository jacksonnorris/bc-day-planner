$('#currentDay').text(moment().format('dddd MMMM Do'));
var currentHour = parseInt(moment().format('HH'));
console.log(currentHour);
$('.time-block').each(function(index) {
    console.log(index);
    if (index + 9 < currentHour) { this.classList.add('past'); }
    else if (index + 9 === currentHour) { this.classList.add('present'); }
    else { this.classList.add('future'); }
})