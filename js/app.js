$(document).foundation();

var colors = [
  "#d32f2f",
  "#C2185B",
  "#7B1FA2",
  "#512DA8",
  "#303F9F",
  "#1976D2",
  "#0288D1",
  "#0097A7",
  "#00796B",
  "#388E3C",
  "#689F38",
  "#AFB42B",
  "#FBC02D",
  "#FFA000",
  "#F57C00",
  "#5D4037",
  "#616161",
  "#455A64"
];

//console.log('"'+ randomColor +'"');

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "9So4CzbJ6omshTLD7BaGBXYLiQV7p1T6U5cjsnLwdLrD9t0bTb",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",

    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies'

  }).done(function(data) {
    //    console.log( "Data Saved: " + data.quote );

    //console.log(parseData);
    var randomColor = colors[Math.round(Math.random() * (colors.length))];

    $(".quote").animate({
      opacity: 0
    }, 500, function() {
      $(this).animate({
        opacity: 1,
        color: randomColor
      }, 500);
      $(this).text(data.quote);
    })

    $(".author").animate({
      opacity: 0
    }, 500, function() {
      $(this).animate({
        opacity: 1,
        color: randomColor
      }, 500);
      $(this).text(data.author);
    })
    //$(".quote").text(parseData.quote);
    //$(".author").text(parseData.author);

    //$(".author").animate({color: randomColor},500);
    $(".button").animate({
      backgroundColor: randomColor
    }, 300);
    $("body").animate({
      backgroundColor: randomColor
    }, 1000);
  });


};

//$("body").css("background-color", randomColor);
//$(".quote, .author").css("color", randomColor);




$(document).ready(function() {
  getQuote();
  $(".button").on("click", getQuote);
});
