// animated headline
$(function(){
    $('#nav').click(function() {
      $(this).toggleClass('open');
    });
  });

  var animationDelay = 5000;
 
animateHeadline($('.cd-headline'));
 
function animateHeadline($headlines) {
	$headlines.each(function(){
		var headline = $(this);
		setTimeout(function(){ hideWord( headline.find('.is-visible') ) }, animationDelay);
	});
}

function hideWord($word) {
	var nextWord = takeNext($word);
	switchWord($word, nextWord);
	setTimeout(function(){ hideWord(nextWord) }, animationDelay);
}
 
function takeNext($word) {
	return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
}
 
function switchWord($oldWord, $newWord) {
	$oldWord.removeClass('is-visible').addClass('is-hidden');
	$newWord.removeClass('is-hidden').addClass('is-visible');
}

singleLetters($('.cd-headline.letters').find('b'));
 
function singleLetters($words) {
	$words.each(function(){
		var word = $(this),
			letters = word.text().split(''),
			selected = word.hasClass('is-visible');
		for (i in letters) {
			letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
		}
	    var newLetters = letters.join('');
	    word.html(newLetters);
	});
}


// preloader js

$(window).on('load', function() {
    $('#status').fadeOut(); 
    $('#preloader').delay(350).fadeOut('slow'); 
    $('body').delay(550).css({'overflow':'visible'});
})