import $ from 'jquery';
import _ from 'lodash';
import './body.css';



let clickCount = 0;

function updateCounter() {
    clickCount += 1;
    $('#count').text(`${clickCount} clicks on the button`);
}
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");

const debouncedUpdateCounter = _.debounce(updateCounter, 500, { leading: true, trailing: false });
$('button').on('click', debouncedUpdateCounter);