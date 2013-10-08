var top_ScoresCover = function()
{
    // top of the screen scores
  $('.score').each(function(i)
  {
      if(this.innerHTML != "")
        this.innerHTML = "?";
  });
}

var bottom_HideScores = function()
{
  // nhl tonight main scores on middle bottom of page
  $('[class="highlightgame_cell"][align="right"]').each(function(i)
  {
      this.innerHTML = "?"  // DOM element version of $('this')
  });
}

var right_HideGoals = function()
{
  // hide goals table on the right side of screen.
  $('#highlight_game_goals_tbl').each(function(e){
    this.style.display = "none";
  });
}

var middleRight_HideFeatureGameScore = function()
{
  $('#tdDetailsComingSoon #content_Details td[nowrap]')[0].innerHTML = "? - ?"
}

var hideAllSpoilers = function()
{

  top_ScoresCover();

  bottom_HideScores();

  right_HideGoals();

  middleRight_HideFeatureGameScore();
}


// var period = 10000; // milliseconds
// (function()
// {
//   window.setInterval( hideAllSpoilers, period)
// })();

// need to strip finished game info from json
var j = "";
(function() {
  // log all calls to setArray
  var proxied = loadScoreboard;
  loadScoreboard = function(json)
  {
    j = json;
    j.refreshInterval = 30;              // remove for final draft
    proxied.apply( this, arguments );
    top_ScoresCover();
    return true;
  };
})();


// after mouse up, then hide all spoilers
(function()
{
  var proxied = jQuery.fn.mouseup;
  $.fn.mouseup = function()
  {
    proxied.apply( this, arguments );
    hideAllSpoilers();
    return true;
  };

  // onload take away the inline function call to function and bind it

  $('[onclick="onClickNextHighlightDate(false)"]:contains("PREV")').removeAttr('onclick')

})();







window.addEventListener("click", hideAllSpoilers, false);

