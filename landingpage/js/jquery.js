const $microphone = $('.active-mic')
const $firstWave = $('.soundwavesSVG1')
const $secondWave = $('.second-wave')
const $thirdWave = $('.third-wave')

//$secondWave.hide()
//$secondWave.show()


function colorChange() {
$($firstWave).animate([
	{fill: 'cyan'},
	{fill: '#e6e6e6'}
	
	],
	{
	duration: 1000
})
}

let firstWave = document.querySelector('.firstWave')

let animateColor = firstWave.animate([
	{fill: 'cyan'},
	{fill: '#e6e6e6'}
],

{
	duration: 1000
})


function animateCloud() {
       $($firstWave).animate([
		                     { fill: 'cyan' },
							 {fill: '#e6e6e6'}
							 ]
							 { duration: 3500, easing: "ease-out" })
                  .animate( [ { fill: '#e6e6e6' },
							  { fill: 'cyan' } 
							 
							 ], { duration: 3500, easing: "ease-out", complete: animateCloud });
   }

$(function() {
    animateCloud();
     
});




//
//let secondWaveAnimation = secondWave.animate([
//	{fill: 'cyan'},
//	{fill: '#e6e6e6'}
//	
//	],
//	{
//	duration: 1000
//})
//
//let thirdWaveAnimation = thirdWave.animate([
//	{fill: 'cyan'},
//	{fill: '#e6e6e6'}
//	
//	],
//	{
//	duration: 1000
//})
//
//let recursiveWave = (firstWave,secondWave,thirdWave) => {
//	firstWave.play()
//	secondWave.play()
//	thirdWave.play()
//	
//	recursiveWave(firstWaveAnimation,secondWaveAnimation,thirdWaveAnimation)
//}




//$(window).resize(function() {
//    clearTimeout(window.resizedFinished)
//    window.resizedFinished = setTimeout(function(){
//      console.log($(window).width())
//    }, 250);
//  });
      
