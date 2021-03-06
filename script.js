replaceText(document.body)

function replaceText(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(replaceText);
        //text elements have no child nodes
    } else if (element.nodeType === Text.TEXT_NODE) {
        if(element.textContent.match(/coronavirus/gi)) {
            let newElement = document.createElement('span');
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, 
            '<span style="background-color: black; color: black;">$1 </span>')
            element.replaceWith(newElement)
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, 'poopy woopy');
    }
}