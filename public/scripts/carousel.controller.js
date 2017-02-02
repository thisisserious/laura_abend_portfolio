angular.module('myApp')
    .controller('CarouselController', CarouselController);

function CarouselController() {
  var carousel = this;
  var i = 0;
  var currentIndex = 0;
  var id = 0;

  $(document).ready(function() {
          $.ajax({
            type: 'GET',
            url: '/data',
            success: function(data) {
                  // console.log('GET /data returns ', data);

                  appendDom(data[i]); // append the data to the DOM
                  data.forEach(function() {
                    appendDivs();
                  });

                  // begin with a default color for 1st index position
                  $('#0').css('background-color', '#069b90');

                  // empty and appendDom to show next person on click
                  $('#next').on('click', function() {
                    if (i < data.length - 1) {
                      currentIndex = i++;
                      data[i];
                    } else {
                      i = 0;
                      data[i];
                      currentIndex = i;
                    }

                    $('.index').css('background-color', 'darkgray');
                    $('#' + i).css('background-color', '#069b90');
                    $('#rho').empty().hide().fadeOut('fast');
                    $('#rho').fadeIn('slow');
                    appendDom(data[i]);
                  });

                  // update index point highlighting
                  $('.button').on('click', function() {
                    if (i <= data.length) {
                      $('.index').css('background-color', 'darkgray');
                      $('#' + i).css('background-color', '#069b90');
                    }
                  });

                  // empty and appendDom to show previous person on click
                  $('#prev').on('click', function() {
                    if (i >= 1) {
                      currentIndex = i--;
                      data[i];
                    } else {
                      i = data.length - 1;
                      data[i];
                      currentIndex = i;
                    }

                    $('#rho').empty().hide().fadeOut('fast');
                    $('#rho').fadeIn('slow');
                    appendDom(data[i]);
                  });
                },
          });

        });

  // append a div & data info to the DOM
  function appendDom(person) {
    var $personDiv = $('<div class="person"></div>');
    $personDiv.append('<h3>' + person.name + '</h3>');
    $personDiv.append('<p><strong>GitHub Username: </strong><a href="http://github.com/' + person.githubUserName + '" target="_blank">' + person.githubUserName + '</a></p>');
    $personDiv.append('<p id="shoutOut"><strong>Shoutout:</strong> "' + person.shoutout + '"</p>');
    $('#rho').append($personDiv);
  }

  // append divs to the DOM for the index point
  function appendDivs() {
    var $indexDiv = $('<div id=' + id++ + ' class="index"></div>');
    $indexDiv.append();
    $('#currentRhobot').append($indexDiv);
  }

}
