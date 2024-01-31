window.onload = function () {
 
    fetch('https://wiki-shop.onrender.com/categories')
    .then(response => response.json())
    .then(data => {
        var template = document.getElementById('template').innerHTML;
        var compiled_template = Handlebars.compile(template);
        var rendered = compiled_template(data);
        if (data.length != 0) {
            document.getElementById('container').innerHTML = rendered;
        }
        else {
            document.getElementById('container').innerHTML = "<h2 id='error-text'>No categories were found.<br>Please try again later</h2>";
        }
    });
}