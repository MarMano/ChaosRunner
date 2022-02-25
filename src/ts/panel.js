document.querySelector("#doStuffBtn").addEventListener("click", function()
{
    sendObjectToInspectedPage({action: "code", content: `(${doStuff})()`});
    //sendObjectToInspectedPage({action: "script", content: "js/some-script.js"});
});

document.querySelector("#injectJsBtn").addEventListener("click", function()
{
    sendObjectToInspectedPage({action: "script", content: `js/some-script.js`});
    //sendObjectToInspectedPage({action: "script", content: "js/some-script.js"});
});

document.querySelector("#callJsBtn").addEventListener("click", function()
{
    sendObjectToInspectedPage({action: "code", content: `testClass.Echo();`});
    //sendObjectToInspectedPage({action: "script", content: "js/some-script.js"});
});

document.querySelector("#parameterCallJsBtn").addEventListener("click", function()
{
    sendObjectToInspectedPage({action: "code", content: `testClass.EchoStr("${document.querySelector("#parameterInput").value}");`});
    //sendObjectToInspectedPage({action: "script", content: "js/some-script.js"});
});


function doStuff()
{
    var elements = Array.from(document.querySelectorAll("a"));
    console.log(elements);

    var element = elements[Math.floor(Math.random() * elements.length)];
    console.log(element);

    element.click();
}