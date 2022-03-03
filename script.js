$('#currentDay').text(moment().format('dddd MMMM Do'));
var currentHour = parseInt(moment().format('HH'));
$('.form-horizontal').on('click', '.saveBtn', storeData)
$('.form-horizontal').on('click', '.fa-save', clickParent)
$('.time-block').each(function(index) {
    if (index + 9 < currentHour) { this.classList.add('past'); }
    else if (index + 9 === currentHour) { this.classList.add('present'); }
    else { this.classList.add('future'); }
})
var localData = JSON.stringify(localStorage.getItem('9am'));
for (const [key, value] of Object.entries(localStorage)) {
    $('#' + key).attr('value', value);
 }
function storeData(event) {
    var currentTag = $(event.target).siblings(".hour").text().toLowerCase();
    var data = $('#' + currentTag).val();
    localStorage.setItem(currentTag, data);
}
function clickParent(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).parent().click();
}