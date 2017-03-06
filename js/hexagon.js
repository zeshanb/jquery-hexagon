//hexigon
//Zeshan B.
//11-7-2016

(function(){

	//x by x
	var starChars;
	var enteredNum;
	var numberOfSpacesFirstLine;
	var even = function(x){	//A function to determine if a number is even
		return x % 2 === 0;
	};
	
	var lineSize = function(){
		
		starChars  = '';
	
		for(var i=0; i < enteredNum; i++){
			
			starChars += '*';

		}
	
	};
	
	var makeShape = function(){
	
		var numOfSpaces = numberOfSpacesFirstLine;
			
		var descSpace = 0;
	
		lineSize();
			
		for(var i=0; i <= numberOfSpacesFirstLine; i++){
			
			for(var j=0; j <= numberOfSpacesFirstLine; j++){
				
				$('.shape').append('\u00A0');
				
			}

			$('.shape').append(''+ starChars +'');

			$('.shape').append('</br>');
				
			starChars += '*';
				
			numberOfSpacesFirstLine--;

		}
		
		for(numberOfSpacesFirstLine;
		numberOfSpacesFirstLine <= numOfSpaces; 
		numberOfSpacesFirstLine++)
		{

			for(var k=0; k <= numberOfSpacesFirstLine; k++){

				$('.shape').append('\u00A0');
				
			}
			
			$('.shape').append(''+ starChars.substr(descSpace) +'');
			
			$('.shape').append('</br>');
			
			descSpace++;
			
		}
		
	};

	$('.NumUpdate').click(function()
	{
		//clear printed shape
		$('.shape').text(' ');
		enteredNum = $('input[name$=\'enteredNum\']').val();
		
		switch(even(enteredNum)){
		
		case true:
			numberOfSpacesFirstLine = enteredNum / 2;
			break;
		case false:
			numberOfSpacesFirstLine = Math.round((Math.floor(enteredNum) + 2) / 2);
			break;
		
		}
		
		$('.notice').text('You Entered '+ enteredNum +' x '+ enteredNum +', Spaces equals ' + numberOfSpacesFirstLine+ '');

		makeShape();
		
	});
	
})();