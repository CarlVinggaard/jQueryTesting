console.log("myScript is being used.");

$(document).ready(function() {
    $('h2').addClass("text-decoration");
    $('tr:first th').addClass("lightblue-background");
    $('tr:nth-of-type(even) td').addClass("red-background");
    $('tr:nth-of-type(odd) td').addClass("orange-background");
});