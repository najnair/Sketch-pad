

$(document).ready(function(){
	
	var numsq = 12;
	createGrid(numsq);
	
	
	$('#start').click(function(){
		basic();
		     
	   });	
	
	
	$('#reset').click(function(){
		
		reset();
		
		
	});
	
	
	$('#colors').click(function(){
		
		colorIt();
		
	});
	
	$('#gridnum').click(function(){
		changeGrid();
		
		});
	
	
});


function createGrid(numsq){
	
	for (x= 0; x<numsq; x++ ){
		
		for(y = 0; y<numsq ; y++){
			$('.container').append("<div class='grid'</div>");		
		}
		
	};
	
	$('.grid').height(660/numsq);
	$('.grid').width(660/numsq);
	$('.grid').css("background-color", "#000000");

}


function basic(){
	
		$('.grid').mouseover(function() {
			
			$(this).css("background-color", "#CCCCCC");
         });	
}

function reset(){
	
		$('.grid').css("background-color", "#000000");	
}


function colorIt(){
	$('.grid').mouseover(function() {
			var randomcol = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';	
			$(this).css("background-color", randomcol);
			});
}

function changeGrid(){
	
	numsq = prompt("Enter the number of grids required between 1 and 30:");
	createGrid(numsq);
	reset();
}

