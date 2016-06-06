$(document).ready(function() {

  var start = "Search Wikipedia!";

  function address(term) {
    var addy = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&datatype=json&limit=10&search=" + term + "&callback=?";
    return addy;

  }

  function getValue(id) {
    var val = document.getElementById(id).value;
    val = val.replace(" ", "%20");
    return val;
  }

  $("#search").val(start);
  $("#search").css("text-align", "center");

  $("#search").focus(function() {
    if ($("#search").val() == start) {
      $("#search").val("");
      $("#search").css("text-align", "left");
    }
  })

  $("#searchBtn").click(function() {
    $("#search").css("margin-top","0");
    $.getJSON(address(getValue('search')), function(data) {
      var x = eval(data);
      $("#results").empty();
      $("#results").append("<div id='resList'></div>");

      $.each(x[1], function(i, val) {
        $("#resList").append("<a href=" + x[3][i] + "><div class='searchresults'>" + x[1][i] + " - " + x[2][i] + "</div></a>");

      })

      $("#results").append("<span>You searched for: " + x[0] + "</span>");

    })
  })

})