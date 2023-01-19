$(document).ready(function(){
    $(document).on('click', '.card', function () {
    $(this).children('.card-front').toggleClass('card-front-rotate');
    $(this).children('.card-back').toggleClass('card-back-rotate');
    });

});


let cardList = "";

$.ajax({
    url: "cardData.json",
    data: "{}",
    dataType: "json",
    success: function (data) {
        console.log(Object.keys(data.users).length);
        $.each(data.users, function(){
            const asd = "/";
            cardList += ` 
            <div class="card">
                <div class="card-front"></div>
                <div class="card-back" style="background-image:url(images/${this.image})"></div>
            </div> 
            `;
            /*
            let cardDiv = $(".main-container").append("<div></div>");
            $(cardDiv).addClass("card");*/

            console.log(this.name, this.surname, this.image);
        });
        $(".main-container").append(cardList);
    },
    error: function (result) {
        console.log("hata");
    }
});










//Something else 
/*
    let divide1 = 0;
    let divide2 = 0;
    let max = 30;

for (let i = 1;i<=max;i++) {
    divide1 = i / 3;
    divide2 = i / 5;

    if(Number.isInteger(divide1) && Number.isInteger(divide2)) {
        
        console.log('FizzBuzz');

    } else {

        if(Number.isInteger(divide1)) {
            console.log('Fizz');
            
        } else {

            if(Number.isInteger(divide2)) {
                console.log('Buzz');

            } else {

                console.log(i);

            }
        }
    }
}
*/