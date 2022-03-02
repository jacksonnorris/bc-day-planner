$('#currentDay').text(moment().format('dddd MMMM Do'));
var currentHour = parseInt(moment().format('HH'));
console.log(currentHour);

$('.form-horizontal').on('click', '.saveBtn', storeData)

$('.time-block').each(function(index) {
    console.log(index);
    if (index + 9 < currentHour) { this.classList.add('past'); }
    else if (index + 9 === currentHour) { this.classList.add('present'); }
    else { this.classList.add('future'); }
})
var localData = JSON.stringify(localStorage.getItem('9am'));
console.log("local data", localData)
console.log("local storage", localStorage)
for (const [key, value] of Object.entries(localStorage)) {
    console.log(key, value);
    $('#' + key).attr('value', value);
 }
function storeData(event) {
    // event.preventDefault()
    // console.log(time);
    // var formDiv = time.children("div");
    // console.log(formDiv);
    // var inputGroup = formDiv.children("div");
    // console.log(inputGroup);
    // var formInput = inputGroup.children("input");
    // console.log(formInput);
    // console.log(formInput[0]);
    // var data = $('#' + time).val();
    var currentTag = $(event.target).siblings(".hour").text().toLowerCase();
    var data = $('#' + currentTag).val();
    console.log(data);
    // alert(data);
    // console.log(data);
    
    
    localStorage.setItem(currentTag, data);
}