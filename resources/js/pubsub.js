var countries = (function() {

    var codes = ["ar", "au", "at", "be", "br", "bg", "ca", "cn", "co", "cu", "cz", "eg", "fr", "de", "gr", "hk", "hu", "in", "id", "il", "it", "jp", "lv", "lt", "my", "mx", "ma", "nl", "no", "ph", "pt", "ro", "ru", "ru", "sa", "rs", "sg", "sk", "si", "za", "kr", "se", "tw", "th", "tr", "ae", "ua", "gb", "us", "ve", ]
    var countriesUrl = "https://restcountries.eu/rest/v2/all";

    var temp = $("#template").html();
    var temp2 = $("#template2").html();
    var $news = $("#news");
    var $flags = $("#flags");

    var init = function() {

        events.on("getcountries", render);

        callCountries();

        events.on("getNews", callNews);




    }

    var callCountries = function() {
        var data
        $.ajax({
            url: countriesUrl,

            success: function(result) {
                for (var i = 0; i < result.length; i++) {
                    for (var j = 0; j < 50; j++) {
                        if (result[i].alpha2Code.toLowerCase() == codes[j]) {


                            events.emit3("getcountries", result[i], temp, $flags);

                        }

                    }
                }


            }
        });



    }

    var callNews = function(alpha2Code) {
        var newsUrl = `https://newsapi.org/v2/top-headlines?country=${alpha2Code}&apiKey=33cf42b6565f4cba947b345e703ab34d`;
        $.ajax({

            url: newsUrl,

            success: function(result) {
                for (var i = 0; i < result.articles.length; i++) {

                    events.emit3(result.articles[i], temp2, $news);
                }




            }

        });

    }

    var render = function(result, temp, el) {


        var output = Mustache.render(temp, result);

        el.append(output);

    }


    return ({
        init: init
    });
})();