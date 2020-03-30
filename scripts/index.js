var slideIndex = 0;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlides(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	if($("#feedback").is(":visible") === false)
	{
		var slidesText = $("#feedback_mobile .top_area .big_paragraph");
		var slidesAuthor = $("#feedback_mobile .bottom_area .author");
		var indexerSquares = $("#feedback_mobile .indexer .square");
	}
	else
	{
		var slidesText = $("#feedback .top_area .big_paragraph");
		var slidesAuthor = $("#feedback .bottom_area .author");
		var indexerSquares = $("#feedback .indexer .square");
	}
	
	if(n > slidesText.length-1) {
		slideIndex = 0;
	}

	if(n < 0) {
		slideIndex = slidesText.length-1;
	}

	for(i = 0; i < slidesText.length; i++)
	{
		slidesText[i].style.display = "none";
		slidesAuthor[i].style.display = "none";
	}

	for(i = 0; i < indexerSquares.length; i++ )
	{
		indexerSquares[i].className = indexerSquares[i].className.replace("active", "");
	}

	slidesText[slideIndex].style.display = "flex";
	slidesAuthor[slideIndex].style.display = "flex";
	indexerSquares[slideIndex].className += " active";
}
