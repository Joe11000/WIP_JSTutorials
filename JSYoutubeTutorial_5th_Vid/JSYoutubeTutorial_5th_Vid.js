$(function()
{
	 $('#divEx').click(function(e)
	 {
   		replaceNodeText( $(this).nodeName," This is replacement text");
	 });
});


function replaceNodeText(id, newText)
{
	var node =  document.getElementById(id);
	while(node.firstChild)
		node.removeChild(node.firstChild);

	node.appendChild(document.createTextNode(newText));

	document.getElementById(id).style.color = "red";
	document.getElementById(id).style.color = "blue";
}
