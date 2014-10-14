Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--)
    {
        if (this[i] === obj)
        {
            return true;
        }
    }
    return false;
}

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

var $data;

$(document).ready(function()
{
	$.getJSON("courses.json", function(json)
	{
			$data = json;

			var orderedByOpen = orderByIfItsOpen(json);
		
			displayData(orderedByOpen);
	});

function displayData(data)
{	
	dataHtml = "<ul>";

	var dayTag = getDayTag();

	for (var s = 0; s < data.length; s++)
	{
		dataHtml += makePoolHtml(data[s], isOdd(s), dayTag);

		// break;
	}
	
	dataHtml += "</ul>";
	
	$('ul.ourHolder').quicksand($(dataHtml).find('li'), {
		duration: 500,
		easing: 'easeOutQuad'
	});
	
}
