var moves = ["Rock.png", "Paper.png", "Scissor.png" ];
var cwins = 0;
var uwins = 0;


$(".btn").click(function(){
	userMove = this.innerHTML;
	compMove = computerMove();
	$(".img2").attr("src","images/" + userMove + ".png");
	switch (userMove){
		case "Rock": switch(compMove){
					case 0: console.log("Draw");
							$("h1").text("Draw!");
					break;
					case 1: console.log("Computer wins")
							$("h1").text("🚩 Player 1 Wins!")
							cwins++;
							$("#comp").text("Score: " + cwins)
					break;
					case 2: console.log("User wins")
							$("h1").text("Player 2 Wins! 🚩")
							uwins++;
							$("#user").text("Score: " + uwins)
					break;
					default: console.log()
					}
		break;

		case "Paper": switch(compMove){
					case 0: console.log("User wins")
							$("h1").text("Player 2 Wins! 🚩")
							uwins++;
							$("#user").text("Score: " + uwins)
					break;
					case 1: console.log("Draw");
							$("h1").text("Draw!");
					break;
					case 2: console.log("Computer wins")
							$("h1").text("🚩 Player 1 Wins!")
							cwins++;
							$("#comp").text("Score: " + cwins)
					break;
					default: console.log();
					}
		break;
		case "Scissor": switch(compMove){
					case 0: console.log("Computer wins")
							$("h1").text("🚩 Player 1 Wins!")
							cwins++;
							$("#comp").text("Score: " + cwins)
					break;
					case 1: console.log("User wins")
							$("h1").text("Player 2 Wins! 🚩")
							uwins++;
							$("#user").text("Score: " + uwins)
					break;

					case 2: console.log("Draw");
							$("h1").text("Draw!");
					break;
					default: console.log();
					}
		break;
		default:console.log();
	}
 
	checkGame();
});


function computerMove() {
	var randomMove = Math.floor(Math.random() * 3);

	$(".img1").attr("src","images/" + moves[randomMove]);

	return randomMove;

}


function checkGame(){
	if (uwins === 3){
		console.log("gameend");
		$("h1").text("You win this round")
		cwins = 0
		uwins = 0
		setTimeout(function(){
		$("img").attr("src","images/rpc.gif");
		$("h3").text("Score: " + cwins)
		}, 2000)
	}
	else if (cwins === 3){
		console.log("gameend");
		$("h1").text("You loose this round")
		cwins = 0
		uwins = 0
		setTimeout(function(){
		$("img").attr("src","images/rpc.gif");
		$("h3").text("Score: " + uwins)
		}, 2000)
	}
}
