// ===========================================================================
//  function createXmlDoc
//  create XML document using the form name as the root node / element name
//    this function assumes that all of the desired elements are on the form that's passed in for the rootNodeName
// 
function createXmlDoc(rootNodeName) {

	// create empty document object
	var xmlDoc = document.implementation.createDocument("", "", null);

	// Create root node using the form name passed in from the calling function as rootNodeName
	// This node should be appended to the xmlDoc at the end
	//   note: all of the form elements should be appended as children to this root node and not to the xml doc directly
	var nodeRoot = xmlDoc.createElement(rootNodeName);

	// get the form as an object with all of it's elements
	var theForm = document.getElementById(rootNodeName);

	// add the form input, select, & textarea elements to the form ------------------
	var inputElements = theForm.elements;
	addElementsToRootNode(inputElements, nodeRoot, xmlDoc);

	// add root node to document - after all of the input and textarea elements have been appended to the root node
	xmlDoc.appendChild(nodeRoot);

	return xmlDoc;

} // END createXmlDoc


// ===========================================================================
//  function addElementsToRootNode
//
function addElementsToRootNode(inputElements, nodeRoot, xmlDoc) {
	// create a temporary node object that will hold each of the elements from the form as a node to be added to the rootNode
	//alert("addelementsto root");
	var node;
	var element;

	// loop through each input element from the form, create a new node from each, and append the node to the rootNode as a child
	for (var i = 0; i < inputElements.length; i++) {
		element = inputElements[i];

		// Look at tagName first - select and textarea are handled differently from input elements
		//   all other tagnames are discarded
		switch (element.tagName) {
			// select and textarea are just added as is
			case "SELECT":
			case "TEXTAREA":
				node = xmlDoc.createElement(element.name);
				node.innerHTML = element.value;
				nodeRoot.appendChild(node);
				break;

			// input tags require additional decision making based on the element type
			case "INPUT":

				switch (element.type) {
					// radio input elements must be checked to be included
					//    each instance of a radio element is included in the elements passed to this loop we only want one
					//    XML node per radio button name so we only take the value of the radio button that is checked
					case "radio":
						if (element.checked == true) {
							node = xmlDoc.createElement(element.name);
							node.innerHTML = element.value;
							nodeRoot.appendChild(node);
						}
						break;
					// checkbox input elements are 1 if checked and 0 if not checked - evaluating the checked property instead of taking the value
					//    we use 1 for true and 0 for false for reporting purposes.  the report sums up the checkbox instances for all rows
					//    and the total shows how many times that situation occured for that robot - such as dead bot
					case "checkbox":
						node = xmlDoc.createElement(element.name);
						if (element.checked == true) {
							node.innerHTML = 1;
						} else {
							node.innerHTML = 0;
						}
						nodeRoot.appendChild(node);
						break;
					// text and number input element types are just added as is
					// also accounting for other types that have simple values that could go into an XML file - just in case
					case "text":
					case "number":
					case "date":
					case "range":
					case "tel":
					case "time":
					case "url":
					case "week":
						node = xmlDoc.createElement(element.name);
						node.innerHTML = element.value;
						nodeRoot.appendChild(node);
						break;
					// default is to do nothing for input types that do not go into an XML file ex) submit and button
					default:
						break;
				} // END SWITCH	for element.type

			// default for SWITCH for element.tagName - just discard the other tagnames
			default:
				break;
		} // END SWITCH for element.tagName



	} // END FOR loop through input elements

	return nodeRoot;

} // END addElementsToRootNode



// ===========================================================================
//  function download
//  download document by creating a hidden "a" element, setting the attributes, and similating a user click
//  pass in the file name and the document content
//
function download(filename, text) {

	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);

}// END download
