window.onload = function(){
  console.log("loaded");

  document.getElementById('submit-btn').addEventListener('click', function(ev){
    ev.preventDefault();

    var topic = document.querySelector('.topicDropdown');
    var userInput = document.getElementById('userInput');



    // /2/open_events?key=1153924241c41273b2d4b4f235e1d13&sign=true&zip=11206&topic=beer&time=,1w

    if (topic.value === "beer") {
      var query = 'https://api.meetup.com/2/open_events?key=' + apiKey +'&sign=true&zip=' + userInput.value + '&topic=beer&time=,1w';
      console.log('beer dawg');

    } if (topic.value === "photo") {
        var query = 'https://api.meetup.com/2/open_events?key=' + apiKey +'&sign=true&zip=' + userInput.value + '&topic=photo&time=,1w';
        console.log('photo dawg');

    } if (topic.value === "music") {
        var query = 'https://api.meetup.com/2/open_events?key=' + apiKey +'&sign=true&zip=' + userInput.value + '&topic=music&time=,1w';
        console.log('music dawg');

}

    $.ajax({
      url: query,
      dataType: 'jsonp',
      jsonpCallback: 'callback'
    }).done(function(response){

      var beerObj = {

      };
      beerObj.results = response.results;



    var templateSource= document.getElementById("name-template").innerHTML;
    var template = Handlebars.compile(templateSource);
    var compiledHtml = template(beerObj);
    var container = document.getElementById("name-container");
     container.innerHTML = compiledHtml;
    //  console.log(compiledHtml);



      console.log(beerObj.results);

    }).fail(function(ev){
      console.log("wtf you thinking??");
    }); //end fail

  // } //end if statement


  } //end event listener


);


//
}; //end function
