window.onload = function () {
    
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    var pathArray = window.location.search.split('=');

    fetch('https://wiki-shop.onrender.com/categories/'+pathArray[1]+'/subcategories')
    .then(response => response.json())
    .then(datasub => {
        
        var template3 = document.getElementById('template-3').innerHTML;
        var compiled_template3 = Handlebars.compile(template3);
        var rendered3 = compiled_template3(datasub);
        document.getElementById('filter').innerHTML = rendered3;   
     
        fetch('https://wiki-shop.onrender.com/categories/'+pathArray[1]+'/products')
            .then(response => response.json())
            .then(data => {
                //loads the first time all the products
                var template2 = document.getElementById('template-2').innerHTML;
                var compiled_template2 = Handlebars.compile(template2);
                var rendered2 = compiled_template2(data);
                document.getElementById('product-details').innerHTML = rendered2; 
                var radio = document.getElementsByName("selection");
                var button = document.getElementById("btn");
                button.addEventListener("click", function(e) {
                    e.preventDefault();
                    var check=0;
                    for(let j=0;j<radio.length;j++){
  
                        if(radio[j].checked){
                            check=j;
                            break;
                        }
                    }
                    var temp_table = new Array(data.length);
                    var k=0;
                    for(let i=0;i<data.length;i++){
                          
                        if(data[i].subcategory_id == radio[check].id){
                            temp_table[k]=data[i];
                            k++;
                        
                        }                                   
                    } 
                    if(check==0){//loads all the products
                        temp_table=data;
                    }
                    var template2 = document.getElementById('template-2').innerHTML;
                    var compiled_template2 = Handlebars.compile(template2);
                    var rendered2 = compiled_template2(temp_table);
                    document.getElementById('product-details').innerHTML = rendered2;        
            })
        });   
    });
}