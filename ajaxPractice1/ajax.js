var id= "7dc054d9";
var key="08165626c10621501a06db8a271f25cb";

var foodURL = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat"+
              "&appId="+id + "&appKey=" + key;

$.ajax({
    url: foodURL,
    success: function(data){
        //console.log(data);
        var food= data.hits[0];
        var name= food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This " + name + " has " + 
        cals +" Calories!!"   )
        }

})