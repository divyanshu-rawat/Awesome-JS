/**
 * get links
 * Web links scraper 
 * function to get all links
 */  
/**Great content**/
function getLinks() 
{

	let anchors = document.getElementsByTagName('a');
	let links = [];
	
	for(var i = 0; i < anchors.length; i++) 
	{
	  links.push(anchors[i].href);
	}

	return links;
 }

 console.log(getLinks())
