// convert.onclick = function(){
// 	fetch('https://open.er-api.com/v6/latest/UAH')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.rates.USD);

// //   uah.value = (usd.value*data.rates.UAH).toFixed(2);
// 	usd.value = (uah.value*data.rates.USD).toFixed(2);
	
  

// 	});



// }

fetch('https://open.er-api.com/v6/latest/USD')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.rates);
    console.log(Object.keys(data.rates));

	for(let el of Object.keys(data.rates)){
	$("select").append(`<option value='${data.rates[el]}'>${el}</option>`);

	}

function sum() {
        if ($("#amount").val() != "") {
          let curTo = inputCurenncyTo.options[inputCurenncyTo.selectedIndex].text;
          let curFrom = inputCurenncyFrom.options[inputCurenncyFrom.selectedIndex].text;
        
          let finsihSum = (data.rates[curTo] / data.rates[(curFrom)] * $("#amount").val()).toFixed(2);
          return $("#amount").val() + curFrom + " = " + finsihSum + curTo;
          
          } else {
               $(".Total").text("0");
          } 
      }
  
$("#amount").on('input', function () {
  $(".sum__text").text(sum())
	
});


$("#inputCurenncyTo").on('change', function () {
  $(".sum__text").text(sum())
  let toCurr = inputCurenncyTo.options[inputCurenncyTo.selectedIndex].text;
  flag(toCurr, imsgeTo)
 
	
});

$("#inputCurenncyFrom").on('change', function () {
  $(".sum__text").text(sum())
  let fromCurr = inputCurenncyFrom.options[inputCurenncyFrom.selectedIndex].text;
  flag(fromCurr, imsgeFrom)
	
});




function flag(curenncy, image){
             if(curenncy == "USD"){
              $(image).css('background-image', 'url("' + `../img/usa.png` + '")');
             }else{

             
              let url = `https://restcountries.com/v3.1/currency/${curenncy}`
              fetch(url)
                  .then((response) => {
                      return response.json();
                  })
                  .then((data) => {
      
                    $(image).css('background-image', 'url("' + `${data[0].flags.png}` + '")');
                    console.log(data[0].flags.png)

                  });
                }
                 
}


$(".cart__arrows").click(function () {
  let toCurr = inputCurenncyTo.options[inputCurenncyTo.selectedIndex].text;
  let fromCurr = inputCurenncyFrom.options[inputCurenncyFrom.selectedIndex].text;
  inputCurenncyTo.options[inputCurenncyTo.selectedIndex].text = fromCurr;
  inputCurenncyFrom.options[inputCurenncyFrom.selectedIndex].text = toCurr;
  let imgfrom = $("#imsgeFrom").css("background-image");
  let imgTo = $("#imsgeTo").css("background-image");
  $("#imsgeFrom").css('background-image', imgTo);
  $("#imsgeTo").css('background-image', imgfrom);
  $(".sum__text").text(sum());



});




});








