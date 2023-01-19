//ROTATE AND EQUAL CHECK
let clickList = [];

$(document).ready(function(){
    $(document).on('click', '.card', function () {
        if(!$(this).children('.card-front').hasClass('card-front-rotate')) {
        $(this).children('.card-front').toggleClass('card-front-rotate');
        $(this).children('.card-back').toggleClass('card-back-rotate');
        
        if(clickList.length == 2) {

            let object1 = $(clickList[0]).children('.card-back').css('background-image');
            let object2 = $(clickList[1]).children('.card-back').css('background-image');
           
            if(object1 == object2) {
                clickList = [];
            }

            for(var j = 0; j < clickList.length; j++) {
                $(clickList[j]).children('.card-front').toggleClass('card-front-rotate');
                $(clickList[j]).children('.card-back').toggleClass('card-back-rotate');
            }
            clickList = [];
        }
        clickList.push($(this));
        console.log(clickList);
    }
    });

    $('.restart-button').click(function() {
        location.reload();
    });

});

//AJAX
let cardDiv = "";
let cardList = [];
$.ajax({
    url: "cardData.json",
    data: "{}",
    dataType: "json",
    success: function (data) {
        console.log(Object.keys(data.cards).length);
        for(var k = 0; k < 2; k++) {
            $.each(data.cards, function(){

                cardList.push(this);
            
            });
        }
        shuffle(cardList);
        listCards();

    },
    error: function (result) {
        console.log("hata");
    }
});

//CARD LİSTİNG
function listCards() {
    $('.main-container').html("");
    for(var i = 0; i < cardList.length; i++) {

        cardDiv += ` 
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back" style="background-image:url(images/${cardList[i].image})"></div>
            </div> 
            `;
    }

    $(".main-container").append(cardDiv);
}

//ARRAY SHUFFLER
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

