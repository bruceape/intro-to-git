(function(window, document, people, undefined) {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        // Cache the elements
        var person = document.querySelector('body'),
          personButton = document.querySelector('#personme'),
          randomPerson = function() { return people[Math.floor(Math.random() * people.length)]; };

        // On Click...
        personButton.addEventListener('click', function(e){
            e.preventDefault();
            person.style.background = 'url(beautifulpeople/' + randomPerson() + ')';
            person.style.backgroundSize = 'cover';
            person.style.backgroundPosition = 'center';
        }, false);
    }, false);
}(this, this.document, this.people));