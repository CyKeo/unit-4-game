var win = 0;

var loss = 0;

var counter =0;

var target = Math.floor(Math.random() * (( 120 - 19 )+ 1) + 19);

$(".target").text(target);


var nums = ["assets/images/diamond.png", "assets/images/emerald.png", "assets/images/gem.png", "assets/images/ruby.png"];

for(i = 0; i < nums.length; i++){

	var imageGem = $("<img>");

	imageGem.addClass("gem-image");

	imageGem.attr("src", nums[i]);

	imageGem.attr("data-gemvalue", Math.floor(Math.random() * 19)+ 1);

	$(".gems").append(imageGem);

	console.log(imageGem)
}

$(".gem-image").on("click", function(){

	var gemValue = ($(this).attr("data-gemvalue"));

	gemValue = parseInt(gemValue);

	counter+=gemValue;

	$(".score").text(counter)

	if(counter === target){
		win++;

		$(".wins").text(win);

		reset();
	}else if(counter >= target){
		loss++;

		$(".losses").text(loss);

		reset();
	}
})

var reset = function(){
	$(".score").text("0");

	counter = 0;

	

}