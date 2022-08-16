//Shoe Data
var shoes = [
    {
        "id": "shoe1",
        "name": "ATL Trek",
        "gender": "Mens",
        "style": "Running",
        "sizes": [5, 6, 7],
        "price": 115,
        "colour": "Black",
        "description": "Built for the toughest outdoor terrain and to withstand all weathers, walking boot ATL Trek Lo GTX helps you make the most of getting off the beaten track. Waterproof GORE-TEX® technology keeps feet dry and comfortable, and a rugged, cleated Mimic Grip recycled Rock-engineered rubber sole optimises traction and stability. Premium black leathers team with an airy EVA midsole, breathable footbed, and recycled laces, lining and sock to boost sustainability and cushion every step.",
        "picture": "images/shoe1_0.jpg",
        "url": "shoe1.html"
    },
    {
        "id": "shoe2",
        "name": "Nature Ramble",
        "gender": "Mens",
        "style": "Formal",
        "sizes": [4, 5, 7],
        "price": 89,
        "colour": "Brown",
        "description": "Crafted in rich tan nubuck, casual lace-up shoe Nature Ramble brings together iconic Clarks heritage and supreme comfort features. Keeping feet fresh and supported, Active Air™ technology complements a deep Cushion Plus™ foam footbed, and the partly recycled high-traction sole, laces and cushioning champion an eco-friendly ethos.",
        "picture": "images/shoe2_0.jpg",
        "url": "shoe2.html"
    },
    {
        "id": "shoe3",
        "name": "King Ease",
        "gender": "Mens",
        "style": "Flats",
        "sizes": [5, 7, 8],
        "price": 35,
        "colour": "Blue",
        "description": "Timeless everyday slipper King Ease creates a minimal yet cosy silhouette in a tactile navy textile upper. Elasticated panels help this pair slip on and off with ease, and lightweight grippy soles give a flexible feel and reliable traction.",
        "picture": "images/shoe3_0.jpg",
        "url": "shoe3.html"
    },
    {
        "id": "shoe4",
        "name": "Un Maui",
        "gender": "Women",
        "style": "Flats",
        "sizes": [4, 5, 6],
        "price": 79,
        "colour": "White",
        "description": "Explore your city in style with Un Maui Lace. This super-comfy lace-up melds luxury and leisure, with a white leather upper on a flexible rubber sole that won't weigh you down.",
        "picture": "images/shoe4_0.jpg",
        "url": "shoe4.html"
    },
    {
        "id": "shoe5",
        "name": "Hero Lite",
        "gender": "Women",
        "style": "Running",
        "sizes": [4, 5, 6, 7],
        "price": 79,
        "colour": "Brown",
        "description": "A crafted, contemporary profile that embraces Clarks' DNA design codes, minimalist sneaker Hero Lite Lace is made for effortless styling. Responsibly sourced black leather creates the sleek athleisure-inspired upper, teaming with a lightweight EVA flatform sole for a modern look that feels easy on feet. Adding comfort where it counts, a removable Cushion Plus™ footbed and padded collar combine for feel-good steps all day. Simplicity at your feet.",
        "picture": "images/shoe5_0.jpg",
        "url": "shoe5.html"
    },
    {
        "id": "shoe6",
        "name": "CourtLite",
        "gender": "Universal",
        "style": "Running",
        "sizes": [4, 5, 6, 7],
        "price": 100,
        "colour": "Black",
        "description": "A minimal, subtly retro sneaker stacked with ultimate comfort features, Court Lite Lace complements life on-the-move. Game-changing Mi-X technology combines an airy part-recycled EVA midsole with a removable, breathable footbed for supreme underfoot cushioning and added bounce. Boosting its planet-friendly credentials, this trainer is finished with responsibly sourced black leather, a part-recycled rubber sole and laces that utilise recycled polyester.",
        "picture": "images/shoe6_0.jpg",
        "url": "shoe6.html"
    },
    {
        "id": "shoe7",
        "name": "CourtLite",
        "gender": "Universal",
        "style": "Running",
        "sizes": [4, 5, 6, 7],
        "price": 100,
        "colour": "Brown",
        "description": "A minimal, subtly retro sneaker stacked with ultimate comfort features, Court Lite Lace complements life on-the-move. Game-changing Mi-X technology combines an airy part-recycled EVA midsole with a removable, breathable footbed for supreme underfoot cushioning and added bounce. Boosting its planet-friendly credentials, this trainer is finished with responsibly sourced black leather, a part-recycled rubber sole and laces that utilise recycled polyester.",
        "picture": "images/shoe7_0.jpg",
        "url": "shoe7.html"
    }
]
var products = "";

for (var i = 0; i < shoes.length; i++) {
    var id = shoes[i].id,
        name = shoes[i].name,
        gender = shoes[i].gender,
        style = shoes[i].style,
        size = shoes[i].sizes,
        price = shoes[i].price,
        colour = shoes[i].colour,
        image = shoes[i].picture,
        link = shoes[i].url;

    //Create Product Cards
    products += "<li class='product' data-id='" + id + "'>" + "<a href='" + link + "' data-link='" + link + "'>"
        + "<img class='card-img' src='" + image + "' alt=''>"
        + "<h3 class='name-id' name='" + name + "'>" + name + "</h3>"
        + "<hr><p gender='" + gender + "'>" + gender + "</p>"
        + "<p style='" + style + "'>" + style + "</p>"
        + "<p size='" + size + "'>Sizes: " + size + "</p>"
        + "<p colour='" + colour + "'>" + colour + "</p>"
        + "<p price='" + price + "'>Price: $" + price + "</p>"
        + "</a>" + "<button class='product-btn'>❤</button>"
        + "</li>";

}
//Adding Product Cards to Html
$(".products-list").html(products);

//Loading in from Local Storage
//localStorage.removeItem("toStore");
var toStore = [];
if (localStorage.getItem("toStore") != null) {
    toStore = JSON.parse(localStorage["toStore"]);
}
for (var k = 0; k < toStore.length; k++) {
    $(".fav-ul").append(toStore[k][1]);

}

//UI Interactions
$(function () {

        //Draggable Widget
        $("#products-col li").draggable({
            revert: true,
            drag: function () {
                $(this).addClass("active");
                $(this).closest("#products-col").addClass("active");
            },
            stop: function () {
                $(this).removeClass("active").closest("#products-col").removeClass("active");
            }
        });

        //Droppable Widget
        $(".favorites").droppable({

            activeClass: "active",
            hoverClass: "hover",
            tolerance: "touch",
            drop: function (event, ui) {
                var favList = $(this),
                    move = ui.draggable,
                    itemId = favList.find("ul li[data-id='" + move.attr("data-id") + "']");
                if (itemId.html() != null) {
                    alert("Already Added to Favorites!");
                } else {
                    addToFav(favList, move);
                }
            }
        });

        //Adding to Favorites
        $(".product-btn").click(function () {
            var favList = $("#favorites-col"),
                move = $(this).closest("li"),
                itemId = favList.find("ul li[data-id='" + move.attr("data-id") + "']");

            if (itemId.html() != null) {
                alert("Already Added to Favorites!");
            } else {
                btnToFav($(this).closest("li"));
            }
        });

        function addToFav(favList, move) {
            favList.find("ul").append("<li class='product-fav' id='product-fav' data-id='" + move.attr("data-id") + "'>"
                + "<a href='" + move.find("a").data("link") + "'>"
                + "<img class='card-img' src='" + move.find(".card-img").attr("src") + "' alt=''>"
                + "<h3 name='" + move.find("h3").html() + "'>" + move.find("h3").html() + "</h3></a>"
                + "<button class='delete-btn'><i class='bx bx-x'></i></button>" + "</li>");
            storeLocal(move);
        }

        function btnToFav(move) {
            $("#favorites-col").find("ul").append("<li class='product-fav' id='product-fav' data-id='" + move.attr("data-id") + "'>"
                + "<a href='" + move.find("a").data("link") + "'>"
                + "<img class='card-img' src='" + move.find(".card-img").attr("src") + "' alt=''>"
                + "<h3 name='" + move.find("h3").html() + "'>" + move.find("h3").html() + "</h3></a>"
                + "<button class='delete-btn'><i class='bx bx-x'></i></button>" + "</li>");
            storeLocal(move);
        }

        //Storing to Local Storage
        function storeLocal(move) {
            var temp = [];
            var itemId = move.attr("data-id");
            var itemData = "<li class='product-fav' id='product-fav' data-id='" + move.attr("data-id") + "'>"
                + "<a href='" + move.find("a").data("link") + "'>"
                + "<img class='card-img' src='" + move.find(".card-img").attr("src") + "' alt=''>"
                + "<h3 name='" + move.find("h3").html() + "'>" + move.find("h3").html() + "</h3></a>"
                + "<button class='delete-btn'><i class='bx bx-x'></i></button>" + "</li>"

            temp.push(itemId);
            temp.push(itemData);
            toStore.push(temp);
            localStorage["toStore"] = JSON.stringify(toStore);
        }

        //Remove From Local Storage
        function removeLocal(move) {
            for (var i = 0; i < toStore.length; i++) {
                if (toStore[i][0] === move.attr("data-id")) {
                    toStore.splice(i, 1);
                }
            }
            localStorage["toStore"] = JSON.stringify(toStore);
        }

        //Delete from Favorites
        $(".delete-btn").live("click", function () {
            $(this).closest("li").remove();
            var move = $(this).closest("li");
            removeLocal(move);
        });
    }
);
// Jquery UI Widgets
var nameTemp = "all",
    genderTemp = "all",
    styleTemp = "all",
    sizeTemp = "all",
    colourTemp = "all",
    minPriceTemp = 50,
    maxPriceTemp = 100;

$(function () {
    var availableTags = [
        "ATL Trek",
        "Nature Ramble",
        "King Ease",
        "Un Maui",
        "Hero Lite",
        "CourtLite",
        "Mens",
        "Women",
        "Universal",
        "Flats",
        "Formal",
        "Running",
        "Black",
        "Brown",
        "White",
        "Blue"
    ];
    $(".search-bar").autocomplete({
        source: availableTags
    });
    $(".search-btn").button();
    $("#name").selectmenu({
        change: function (event, data) {
            nameTemp = data.item.value;
        }
    });
    $("#gender").selectmenu({
        change: function (event, data) {
            genderTemp = data.item.value;
        }
    });
    $("#style").selectmenu({
        change: function (event, data) {
            styleTemp = data.item.value;
        }
    });
    $("#colour").selectmenu({
        change: function (event, data) {
            colourTemp = data.item.value;
        }
    });
    $("#size").selectmenu({
        change: function (event, data) {
            sizeTemp = data.item.value;
        }
    });
    $("#price-slider").slider({
        range: true,
        min: 35,
        max: 115,
        values: [50, 100],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            minPriceTemp = ui.values[0];
            maxPriceTemp = ui.values[1];
        }
    });
    $("#amount").val("$" + $("#price-slider").slider("values", 0) +
        " - $" + $("#price-slider").slider("values", 1));

    $(function () {
        $("#tabs").tabs();
    });
});

//Search Function
$("#search-form").submit(function (e) {
        e.preventDefault();
        var query = $("#search-form input").val();
        $(".product").hide();
        $(".product").each(function () {

            var inRange = false;
            var found = false;
            var price = $("p:eq(4)", this).attr("price");
            if (price >= minPriceTemp && price <= maxPriceTemp) {
                inRange = true;
            }
            var temp = $("p:eq(2)", this).attr("size");
            for (var i = 0; i < temp.length; i++) {
                if (sizeTemp === temp[i] || sizeTemp === "all") {
                    found = true;
                }
            }
            var name = $(".name-id", this).attr("name"),
                gender = $("p", this).attr("gender"),
                style = $("p:eq(1)", this).attr("style"),
                colour = $("p:eq(3)", this).attr("colour");


            var searched = true;
            if (query === undefined || query === null || query === "") {
                searched = false;
            }
            if (searched) {
                if (name === query || gender === query || style === query || colour === query) {
                    if ((name === nameTemp || nameTemp === "all") && (gender === genderTemp || genderTemp === "all") && (style === styleTemp || styleTemp === "all") && (colour === colourTemp || colourTemp === "all") && inRange && found) {
                        $(this).show();
                    }
                }
            } else if (!searched) {
                if ((name === nameTemp || nameTemp === "all") && (gender === genderTemp || genderTemp === "all") && (style === styleTemp || styleTemp === "all") && (colour === colourTemp || colourTemp === "all") && inRange && found) {
                    $(this).show();
                }
            }
        });
    }
);

//Shoe Section
//Shoe Image Changer
$(".small-img").click(function preview() {
    var small = $(this).attr("src");
    var big = $(".big-img").attr("src");
    $(this).attr("src", big);
    $(".big-img").attr("src", small);

})
//Adding Info For Each Shoe
for (var z = 0; z < 7; z++) {
    var temp1 = "#col-2-" + (z + 1);
    var temp2 = "#tabs-" + (z + 1) + "-1";
    var temp3 = "#tabs-" + (z + 1) + "-2";
    var temp4 = "#tabs-" + (z + 1) + "-3";
    var content = "<h1>" + shoes[z].name + "</h1>"
        + "<h3 id='shoe-price'>$" + shoes[z].price + "</h3>"
        + "<p>" + shoes[z].gender + "</p>"
        + "<p>" + shoes[z].style + "</p>"
        + "<p>" + shoes[z].colour + "</p>"
        + "<br>"
        + "<h3>Product Details</h3>"
        + "<p>" + shoes[z].description + "</p>"
        + "<br>"
        + "<h3>Sizes: " + shoes[z].sizes + "</h3>"

    var content2 = "<h3>Name: " + shoes[z].name + "</h3>"
        + "<br>"
        + "<p>Gender: " + shoes[z].gender + "</p>"
        + "<p>Style: " + shoes[z].style + "</p>"
        + "<p>Colour: " + shoes[z].colour + "</p>"
        + "<p>Sizes: " + shoes[z].sizes + "</p>"
        + "<p>Price: $" + shoes[z].price + "</p>"

    var content3 = "<h3>Below are Shoe Size Comparison Charts</h3>"
        + "<img class='size-img' src='images/sizeguide.jpg' alt=''>"

    var content4 = "<h4>FINAL SALES</h4>"
        + "<br>"
        + "<p style='font-size: 14px;'>All sales of Gift cards and items marked as Sale are final. FINAL SALE items cannot be returned for exchange, credit, or refunds. For all other items, to be eligible for an exchange or refund as described below, the merchandise must be returned unworn with tags and in original shoe boxes. All return items must be accompanied by the original return form and customs documents (if applicable). Please note that refunds are only available after we’ve received your return items.</p>"
        + "<br>"
        + "<h4>RETURN LIMITATIONS</h4>"
        + "<br>"
        + "<p style='font-size: 14px;'>Gift Cards, E-Gift Certificates and final sale merchandise may not be returned for a refund or exchange; unless received damaged, defective, or the wrong item(s). Returns must be unworn, unaltered, and unwashed with all tags attached and in original shoe boxes.</p>"
        + "<br>"
        + "<h4>HOW TO RETURN</h4>"
        + "<br>"
        + "<p style='font-size: 14px;'>Returns are accepted within 30 days from the shipped date. Please note all Gift Cards, E-Gift Certificates and final sale merchandise may not be returned for a refund or exchange; unless received damaged, defective, or the wrong item(s). Returns must be unworn, unaltered, and unwashed with all tags attached and in the original shoe boxes.</p>"


    $(temp1).append(content);
    $(temp2).append(content2);
    $(temp3).append(content3);
    $(temp4).append(content4);


}