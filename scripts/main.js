$( "#door1" ).bind("click", (function() {
  $('#door2').replaceWith('<img src="images/orange_door_fire.png">');
  $('#title').replaceWith('<div id="title">You Picked the Blue Door!</div>');
  $('#host').replaceWith('<p id="host">I opened the Orange Door which held a BAD THING.<br>Now if you want to switch you can choose to DOUBLE CLICK the Green Door<br>or you can keep your first choice and DOUBLE CLICK the Blue Door.</p>');
})
);

$( "#door1" ).bind("dblclick", (function() {
	$('#title').replaceWith("<div id='title'>YOU LOSE!</div>");
  $('#door_container').replaceWith('<center><iframe width="420" height="315" src="https://www.youtube.com/embed/J---aiyznGQ" frameborder="0" allowfullscreen></iframe></center>');
  $('#host').replaceWith('<p id="host">Ouch! Too bad. Here is your BAD THING!</p>');
  $('#make_a_deal').append('<p><center><a href="index.html">Try Again?</a></center></p>');
})
);

$( "#door3" ).bind("dblclick", (function() {
	$('#title').replaceWith("<div id='title'>YOU WIN!</div>");
  $('#door_container').replaceWith('<center><iframe width="420" height="315" src="https://www.youtube.com/embed/fzzjgBAaWZw" frameborder="0" allowfullscreen></iframe></center>');
  $('#host').replaceWith('<p id="host">Booyah! Here is your AWESOME THING!</p>');
  $('#make_a_deal').append('<p><center><a href="index.html">Play Again?</a></center></p>');
})
);

$( "#door2" ).bind("click", (function() {
  $('#door1').replaceWith('<img src="images/blue_door_fire.png">');
  $('#title').replaceWith('<div id="title">You Picked the Orange Door!</div>');
  $('#host').replaceWith('<p id="host">I opened the Blue Door which held a BAD THING.<br>Now if you want to switch you can choose to DOUBLE CLICK the Green Door<br>or you can keep your first choice and DOUBLE CLICK the Orange Door.</p>');
})
);

$( "#door2" ).bind("dblclick", (function() {
	$('#title').replaceWith("<div id='title'>YOU LOSE!</div>");
  $('#door_container').replaceWith('<center> <iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe></center>');
  $('#host').replaceWith('<p id="host">Well that sucks. Here is your BAD THING!</p>');
  $('#make_a_deal').append('<p><center><a href="index.html">Wanna try Again?</a></center></p>');
})
);

$( "#door3" ).bind("click", (function() {
  $('#door2').replaceWith('<img src="images/orange_door_fire.png">');
  $('#title').replaceWith('<div id="title">You Picked the Green Door!</div>');
  $('#host').replaceWith('<p id="host">I opened the Orange Door which held a BAD THING.<br>Now if you want to switch you can choose to DOUBLE CLICK the Blue Door<br>or you can keep your first choice and DOUBLE CLICK the Green Door.</p>');
})
);