$(document).ready(function() {
    $.ajax({
        url: "https://fakestoreapi.com/products", 
        success: function(result){
            console.log(result);
            var div = "";
            for(var i = 0; i < result.length; i++){
                div += "<div class='card col' id='card-"+(i+1)+"'>";
                div += "<img src="+result[i].image+ " class='image-fix'/>";
                div += "<div class='card-heading-descp' id='card-head-'"+(i+1)+">";
                div += "<a href='./single-product/single-product.html?"+(i+1)+"' id='"+i+ "'class='ref-url'><h5 class='prod-title'>"+result[i].title+"</h5></a>";
                div += "<p class='text-desc'>"+result[i].description+"</p></div>";
                div += "<ul class='product-details-list list-group-flush'>";
                div += "<li class='list-values'>category: "+ result[i].category+"</li>";
                div += "<li class='list-values'>Price: "+ result[i].price+"</li>";
                div += "<li class='list-values'>Count: "+ result[i].rating.count+"</li>";
                div += "<li class='list-values'>Rating: "+ result[i].rating.rate+"</li></ul>";
                div += "<div class='card-heading-descp'>";
                div += "<a href=# class='me-3 buy-add-link'>Add to cart</a>";
                div += "<a href=# class='buy-add-link'>Buy now</a></div></div>";
            }
            $("#product-details").append(div);
    }});
    
    // $(document).on('click','.ref-url',function(e){
    //     // e.preventDefault();
    //     var id = 0;
    //     id += +this.id;
    //     id += 1;
    //     console.log(this.href);
    //     // var id = this.id+1;
    //    console.log("https://fakestoreapi.com/products/"+ id);
    //    $.ajax({
    //     url: "https://fakestoreapi.com/products/"+ id, 
    //     success: function(result){
    //         console.log(result);
    //     }});
    //     return false;
       
    //    });

});
