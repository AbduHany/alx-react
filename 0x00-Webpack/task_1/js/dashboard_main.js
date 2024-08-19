import $ from "jquery";
import _ from 'lodash';


let clickCount = 0

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');


function updateCounter() {
    clickCount += 1
    $('#count').text(`${clickCount} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 300, { leading: true, trailing: false });
$('button').on('click', debouncedUpdateCounter);