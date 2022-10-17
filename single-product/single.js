$(document).ready(function() {
    var sPageURL  = window.location.href;
    var splited_url = sPageURL.split("?");
    var id = 0;
    id += +splited_url[1];
    console.log(id);
    $.ajax({
            url: "https://fakestoreapi.com/products/"+ id, 
            success: function(result){
                console.log(result);
                var div = "<div class='row'>";
                div += "<div class='col-md-4 d-flex justify-content-center'> <img src="+result.image+ " class='image-fix '/></div>";
                div += "<div class='col-md-8'>";
                div += "<div class='card-body'>";
                div += "<h5>"+result.title+"</h5><br/>";
                div += "<p class='prod-desc'>"+result.description+"</p><br/><hr/>";
                div += "<p class='item-list'>"+result.category+"</p><br/><hr/>";
                div += "<p class='item-list'>"+result.price+"</p><br/><hr/>";
                div += "<p class='item-list'>"+result.rating.rate+"</p><br/><hr/>";
                div += "<p class='item-list'>"+result.rating.count+"</p><br/><hr/></div></div></div>";

                $(".single-prod").append(div);
            }});
});