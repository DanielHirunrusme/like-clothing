<?php

$useragent=$_SERVER['HTTP_USER_AGENT'];
$mobile = false;
if(preg_match('/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i',$useragent)||preg_match('/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i',substr($useragent,0,4)))

$mobile = true;

?>


<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="utf-8">
<title>LIKE</title>
<meta name="description" content="Like Clothing Season 2">
<meta name="author" content="Harry Gassal and Daniel Hirunrusme">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- CSS -->
<link rel="stylesheet" href="assets/css/main.min.css">

<!--[if lt IE 9]>
<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

</head>
<body data-module-init="body" class="<?php if($mobile) { echo 'mobile-device'; } else { echo 'desktop-device'; } ?>">


<button id="audio" class="<?php if(!$mobile): ?>active <?php endif; ?> button--audio" data-module-init="audio">
	<svg id="music_note_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.03 33"><defs><style>.cls-1{fill:#fff;}</style></defs><title>musicnote</title><path class="cls-1" d="M26,0L7.31,3V25.55A5.87,5.87,0,0,0,4,25.44C1.32,26.1-.42,28.29.09,30.32s3.07,3.15,5.73,2.48c2.33-.58,4-2.34,4-4.14h0v-18L23.56,8.51V22.43a5.94,5.94,0,0,0-3.4-.12c-2.68.67-4.44,2.88-3.92,4.94s3.1,3.18,5.79,2.51c2.44-.61,4.12-2.5,4-4.39V0Z" transform="translate(0)"/></svg>
	
	<svg version="1.1" id="music_note_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 27 34.1" style="enable-background:new 0 0 27 34.1;" xml:space="preserve">
	<style type="text/css">
		.st0{clip-path:url(#SVGID_2_);fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
	</style>
	<g>
		<defs>
			<rect id="SVGID_1_2" width="27" height="34.1"/>
		</defs>
		<clipPath id="SVGID_2_2">
			<use xlink:href="#SVGID_1_2"  style="overflow:visible;"/>
		</clipPath>
		<path class="st0" d="M26.5,0.6l-18.7,3l0,22.5c-1-0.3-2.2-0.4-3.3-0.1c-2.7,0.7-4.4,2.9-3.9,4.9c0.5,2,3.1,3.1,5.7,2.5
			c2.3-0.6,4-2.3,4-4.1l0,0v-18l13.8-2.2V23c-1-0.4-2.2-0.4-3.4-0.1c-2.7,0.7-4.4,2.9-3.9,4.9c0.5,2.1,3.1,3.2,5.8,2.5
			c2.4-0.6,4.1-2.5,4-4.4V0.6z"/>
	</g>
	</svg>
</button>

<?php if(!$mobile): ?>
<section id="video-container" data-module-init="videos">
	<div class="video-scroll">
		<div class="video-holder">
			<video id="video-1" class="active" src="assets/videos/1_3.mp4"  muted  autoplay loop playsinline></video>
			<video id="video-2" src="assets/videos/7_1.mp4"  muted  loop playsinline></video>
			<video id="video-3" src="assets/videos/4_1.mp4"  muted  loop playsinline></video>
			<video id="video-8" src="assets/videos/3_1.mp4"  muted  loop playsinline></video>
		</div>
		<div class="video-holder">
			<video id="video-4" class="active" src="assets/videos/8_1.mp4"  muted  autoplay loop playsinline></video>
			<video id="video-5" src="assets/videos/2_1.mp4"  muted  loop playsinline></video>
			<video id="video-6" src="assets/videos/9_3.mp4"  muted  loop playsinline></video>
			<video id="video-7" class="active" src="assets/videos/8_2.mp4"  muted  autoplay loop playsinline></video>
		</div>
		<div class="video-holder video-1-clone">
			<video id="video-11" class="active" src="assets/videos/4_1.mp4"  muted  autoplay loop playsinline></video>
			<video id="video-12" src="assets/videos/1_3.mp4"  muted  loop playsinline></video>
			<video id="video-8" src="assets/videos/3_1.mp4"  muted  loop playsinline></video>
			<video id="video-13" src="assets/videos/7_1.mp4"  muted  loop playsinline></video>
		</div>
		<div class="video-holder">
			<video id="video-14" class="active" src="assets/videos/2_1.mp4"  muted  autoplay loop playsinline></video>
			<video id="video-15" src="assets/videos/9_3.mp4"  muted  loop playsinline></video>
			<video id="video-16" src="assets/videos/8_1.mp4"  muted  loop playsinline></video>
			<video id="video-7" class="active" src="assets/videos/8_2.mp4"  muted  autoplay loop playsinline></video>
		</div>
	</div>
</section>
<?php else: ?>
<?php 
	$videos = array('1_3', '7_1', '4_1', '8_1', '2_1', '9_3', '8_2', '3_1', '4_1');
	$video  = array_rand($videos);
?>
<section id="video-container">
	<video id="video-1" src="assets/videos/<?php print $videos[$video];  ?>.mp4"  muted  autoplay loop playsinline></video>
</section>	
<?php endif; ?>



<div id="color-overlay"></div>

<div id="wrapper" class="wrapper" data-module-init="control-scroll desktop-scroll mobile-scroll"><div id="scroller">
<section class="top-section landing-section">

	<header>
		<h3>Like Clothing <span class="h3-sub">Presents</span></h3>
	</header>

	<h1>What are we<br class="mobile-portrait-hide"> doing tonight?</h1>
	
	<h3><span class="h3-sub">A</span> Fashion Sitcom</h3>
	
	<h2 class="collection-callout">A new collection and &#xFB01;lm<br>February, 2016</h2>
	
	<form class="newsletter" action="https://like-clothing.us14.list-manage.com/subscribe/post" method="post">
		<input type="hidden" name="u" value="b4d555837ccea3d4743b9cb58">
		    <input type="hidden" name="id" value="6b8169e9cb">
		<input data-audio="DoorKnock_CTV04_54_03.wav" data-module-init="audio-hover" type="email" class="top-input" placeholder="Email Address" name="MERGE0" id="MERGE0" />
		<button type="submit" class="button--submit" data-audio="LaughterCrowd_AR03_44.wav" data-module-init="audio-hover">Subscribe</button>
	</form>
</section>



<section class="bottom-section">
	<!--
	<div class="gradient-swipe-holder gradient-swipe-top">
		<div class="gradient-swipe"></div>
		<div class="gradient-solid"></div>
	</div>
	-->
	<div class="masonry-type">
		<h2 data-audio="ApplauseCheer_CTV01_92_01.wav" data-module-init="audio-hover">In collaboration <br class="mobile-portrait-hide">with Eric Mack</h2>
		<h2 data-audio="Applause_CTV01_87_01.wav" data-module-init="audio-hover">With an original<br>score by <br class="mobile-portrait-hide">Michael Beharie</h2>
	</div>
	
	<article class="credits">
		
		<ul>
			<li><h4>Lauren</h4><h5><a href="https://www.instagram.com/laurenperlman/?hl=en" title="Lauren Perlman" target="_blank">Lauren Perlman<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Ato</h4><h5>Ato Blankson-Wood</h5></li>
			<li><h4>Izzy the Cat</h4><h5><a href="https://www.instagram.com/fievelkatzkowitz/" title="Fievel Katzkowitz" target="_blank">Fievel Katzkowitz<span class="url-icon">URL</span></a></h5></li>
		</ul>
		
		<ul>
			<li><h4>Producer</h4><h5>Lucinda Trask</h5></li>
			<li><h4>With</h4><h5><a href="http://eric-mack.com/" title="Eric Mack" target="_blank">Eric Mack<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Creative Director</h4><h5><a href="http://harrygassel.info/" title="Harry Gassel" target="_blank">Harry Gassel<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Director</h4><h5><a href="http://pepiginsberg.com/" title="Pepi Ginsberg" target="_blank">Pepi Ginsberg<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Screenplay</h4><h5>Jacob Savage <span class="amp">&amp;</span> Harry Gassel</h5></li>
			<li><h4>Additional Jokes</h4><h5><a href="http://gabriellelamontagne.com/" title="Gabrielle Lamontagne" target="_blank">Gabrielle Lamontagne<span class="url-icon">URL</span></a></h5></li>
		</ul>
		
		<ul>
			<li><h4>Director of Photography</h4><h5><a href="http://www.ericyue.com/" title="Eric Yue" target="_blank">Eric Yue<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Editor</h4><h5><a href="http://www.no1like.us" title="Jeff Cristiani" target="_blank">Je&#64256; Cristiani<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Original Score</h4><h5><a href="http://michaelbeharie.com/" title="Michael Beharie" target="_blank">Michael Beharie<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Sound Mix</h4><h5><a href="https://vimeo.com/sashamandel" title="Sasha Mandel" target="_blank">Sasha Mandel<span class="url-icon">URL</span></a></h5></li>
			<li><h4>VFX</h4><h5>Jae Won Lee</h5></li>
			<li><h4>Hair &amp; Make-Up</h4><h5><a href="http://rachaelghorbani.com/" title="Raechel Gorbani" target="_blank">Raechel Gorbani<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Set Design</h4><h5>Ben Tear</h5></li>
			<li><h4>Main Title Typeface</h4><h5>Ann0 by <a href="http://rafrennie.com/" title="Raf Rennie" target="_blank">Raf Rennie<span class="url-icon">URL</span></a></h5></li>
		</ul>
		
		<ul>
			<li><h4>Photography</h4><h5><a href="http://matthewtammaro.com/" title="Matthew Tammaro" target="_blank">Matthew Tammaro<span class="url-icon">URL</span></a></h5></li>
			<li><h4>Website</h4><h5><a href="http://danielhirunrusme.com/" title="Daniel Hirunrusme" target="_blank">Daniel&nbsp;Hirunrusme<span class="url-icon">URL</span></a> <span class="amp">&amp;</span>&nbsp;Harry&nbsp;Gassel</h5></li>
		</ul>
		
	</article>
	
	
	
	
	<section class="information">
		<article>
			<p><b>Like Clothing</b> is launching a new collection and fashion &#xFB01;lm in collaboration with painter Eric Mack <a href="http://moranbondaroff.com/artists/eric-mack/" target="_blank">MORAN BONDAROFF</a> <a href="http://www.alminerech.com/artists/3600-eric-mack" target="_blank">ALMINE RECH</a> <a href="http://momaps1.org/exhibitions/view/403" target="_blank">MOMA PS1</a>. This Collection &ldquo;Paint Two,&rdquo; is their third collaboration including the previous collection, &ldquo;Paint&rdquo; and an editorial for Talk Magazine&nbsp;<a href="http://talk-is.cheap/" target="_blank">URL</a> with photographer David Brandon Geeting&nbsp;<a href="http://www.dbg.nyc/" target="_blank">URL</a>.</p>
		</article>
		
		<article class="kits">
			<a data-audio="DoorWood02.wav" data-module-init="audio-hover"  href="http://like-clothing.biz/pdf/LikeClothing-MediaKit.pdf" title="Media Kit Zip" target="_blank"><span class="icon icon-globe">
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 176.1 104.3" style="enable-background:new 0 0 176.1 104.3;" xml:space="preserve">
					<style type="text/css">
						.st0{clip-path:url(#SVGID_2_);fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
					</style>
					<g>
						<defs>
							<rect id="SVGID_1_" width="176.1" height="104.3"/>
						</defs>
						<clipPath id="SVGID_2_">
							<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
						</clipPath>
						<path class="st0" d="M109.2,98.2c13.6-2.2,25.3-6.2,35.5-12c-5.9-2.2-12.4-3.5-19-4.6C121.9,87.7,117,93.4,109.2,98.2z M31.5,86.1
							c2.2,1.6,10.5,5.4,16.4,7.4c5.3,1.8,16.8,4.6,19,4.6c-0.1,0-0.1-0.1-0.2-0.1c-3.8-2.3-7-4.9-9.6-7.7c-2.6-2.7-4.7-5.5-6.4-8.4
							c-0.1-0.2-0.2-0.4-0.7-0.3c-5.4,0.9-10.8,1.9-15.7,3.5C33.3,85.5,32.4,85.8,31.5,86.1z M109.2,6.2c7.8,4.7,12.7,10.5,16.5,16.6
							c6.7-1,13.2-2.3,19.2-4.5C134.7,12.4,122.9,8.4,109.2,6.2z M66.9,6.2c-13.7,2.2-25.5,6.2-35.7,12.1c6,2.2,12.5,3.5,19.2,4.5
							c1.9-3.1,4-6,6.7-8.8C59.9,11.1,63.1,8.5,66.9,6.2z M91.5,99.7c1.1-0.2,2.2-0.4,3.2-0.6c4.6-1,8.3-2.8,11.5-5
							c4.4-2.9,7.6-6.3,10.2-9.8c0.9-1.2,1.7-2.4,2.5-3.6c-3.5-0.7-25-2-27.4-1.6V99.7z M84.7,99.6V79c-9.2,0.1-18.3,0.6-27.4,1.7
							c2.5,4,5.6,7.9,9.8,11.3c2.9,2.3,6.2,4.4,10.4,6C79.7,98.8,82,99.4,84.7,99.6z M91.5,4.7v20.6c9.2-0.1,18.3-0.6,27.3-1.6
							c0-0.1,0-0.1,0-0.1c-2.6-4.1-5.8-8.1-10.3-11.6c-3-2.3-6.4-4.4-10.8-5.9C95.8,5.4,93.8,4.9,91.5,4.7z M57.3,23.7
							c9.1,1,18.2,1.5,27.4,1.6V4.7c-0.4,0.1-0.8,0.1-1.1,0.1c-4.2,0.6-7.7,2-10.9,3.7c-4.1,2.3-7.3,5-10,7.9
							C60.6,18.8,58.8,21.2,57.3,23.7z M91.5,29.3v20.8h35.3c-0.3-7.7-2.1-15.3-5.8-22.7C111.2,28.6,101.4,29.2,91.5,29.3z M84.7,50.1
							V29.3c-9.9-0.1-19.8-0.7-29.5-1.8c-3.7,7.4-5.4,15-5.7,22.7H84.7z M121.1,76.8c3.7-7.3,5.4-14.9,5.7-22.6H91.5V75
							c5,0.2,9.9,0.3,14.8,0.6C111.2,75.9,116.1,76.4,121.1,76.8z M55.1,76.9c9.8-1.2,19.6-1.7,29.5-1.8V54.2H49.4
							C49.7,61.9,51.4,69.5,55.1,76.9z M127.7,26.6c3.8,7.7,5.5,15.6,5.8,23.6h35.3c-1-10.9-7.4-20.5-19.3-28.9
							C142.8,23.8,135.4,25.3,127.7,26.6z M26.6,21.2c-11.9,8.4-18.4,18-19.3,28.9h35.3c0.3-8,2-15.9,5.8-23.6
							C40.7,25.4,33.3,23.8,26.6,21.2z M149.4,83.2c12-8.4,18.5-18.1,19.5-29h-35.3c-0.2,4-0.6,8-1.6,11.9c-0.9,3.9-2.3,7.8-4.2,11.7
							C135.4,79,142.7,80.5,149.4,83.2z M7.3,54.2c1,11,7.5,20.6,19.5,29c6.6-2.7,14-4.2,21.7-5.4c-3.8-7.7-5.5-15.6-5.8-23.6H7.3z
							 M84.7,0.5h7c1,0.1,2,0.1,3,0.1c7.7,0.3,15.2,1.2,22.4,2.8c17.3,3.7,31.4,9.9,42.2,18.7c9.6,7.8,14.9,16.6,16.2,26.2
							c0.1,0.6,0.2,1.2,0.2,1.8v4c0,0.2-0.1,0.3-0.1,0.5c-0.3,3.5-1.1,6.9-2.6,10.2c-4.5,10.3-13.5,19-27,26
							c-14.7,7.6-31.8,11.9-51.4,12.8c-1,0.1-2.1,0.1-3.1,0.1h-7c-1.6-0.1-3.1-0.1-4.7-0.2c-8.5-0.5-16.8-1.7-24.7-3.6
							c-13.8-3.4-25.4-8.4-34.8-15.2C8.7,76.4,2.2,66.8,0.7,56c-0.1-0.6-0.2-1.1-0.2-1.7v-4.1c0-0.2,0.1-0.3,0.1-0.5c0.2-3,0.9-5.9,2-8.8
							c4.1-10.6,13-19.6,26.6-26.8C44,6,61.5,1.6,81.5,0.6C82.6,0.6,83.6,0.5,84.7,0.5z"/>
					</g>
				</svg>	
				
				
				
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 176.1 104.3" style="enable-background:new 0 0 176.1 104.3;" xml:space="preserve">
				<style type="text/css">
					.st0_3{clip-path:url(#SVGID_2_);}
					.st1{fill:#FFFFFF;}
					.st2{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
				</style>
				<g>
					<defs>
						<rect id="SVGID_1_" width="176.1" height="104.3"/>
					</defs>
					<clipPath id="SVGID_2_">
						<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
					</clipPath>
					<g id="XMLID_1_" class="st0_3">
						<g>
							<path class="st1" d="M175.6,50.1v4c0,0.2-0.1,0.3-0.1,0.5c-0.3,3.5-1.1,6.9-2.6,10.2c-4.5,10.3-13.5,19-27,26
								c-14.7,7.6-31.9,11.9-51.4,12.8c-1,0.1-2.1,0.1-3.1,0.2h-7c-1.6-0.1-3.1-0.2-4.7-0.2c-8.6-0.5-16.8-1.6-24.7-3.6
								c-13.8-3.4-25.4-8.4-34.8-15.2C8.7,76.4,2.2,66.8,0.8,56c-0.1-0.6-0.2-1.2-0.2-1.7v-4.1c0-0.2,0.1-0.3,0.1-0.5
								c0.2-3,0.9-5.9,2-8.8c4.1-10.6,13-19.5,26.6-26.8C44,6,61.5,1.6,81.5,0.6c1-0.1,2.1-0.1,3.1-0.1h7c1,0.1,2,0.1,3,0.1
								c7.7,0.3,15.2,1.2,22.4,2.8c17.3,3.7,31.4,9.9,42.2,18.7c9.6,7.8,14.9,16.6,16.2,26.2C175.5,48.9,175.6,49.5,175.6,50.1z
								 M133.5,50.1h35.3c-0.9-10.9-7.4-20.5-19.3-28.9c-6.7,2.6-14.1,4.1-21.8,5.3C131.5,34.3,133.2,42.2,133.5,50.1z M168.8,54.2
								h-35.3c-0.1,4-0.6,8-1.6,11.9c-0.9,3.9-2.3,7.8-4.2,11.7c7.6,1.2,15,2.8,21.7,5.4C161.4,74.8,167.9,65.2,168.8,54.2z M125.7,22.8
								c6.7-1.1,13.2-2.3,19.2-4.5c-10.2-5.9-22-9.9-35.7-12.1C117,10.9,121.9,16.6,125.7,22.8z M144.7,86.2c-5.9-2.2-12.4-3.5-19-4.6
								c-3.8,6.1-8.7,11.8-16.5,16.6C122.8,96,134.6,92,144.7,86.2z M91.5,50.1h35.3c-0.3-7.7-2.1-15.3-5.8-22.7
								c-9.8,1.2-19.6,1.7-29.5,1.8V50.1z M126.8,54.2H91.5V75c5,0.2,9.9,0.3,14.8,0.6c4.9,0.3,9.8,0.8,14.8,1.2
								C124.7,69.5,126.4,61.9,126.8,54.2z M118.8,23.7c0-0.1,0-0.1,0-0.1c-2.6-4.1-5.8-8.1-10.3-11.6c-3-2.3-6.4-4.4-10.8-5.9
								c-2-0.6-4-1.1-6.3-1.4v20.6C100.7,25.2,109.8,24.7,118.8,23.7z M116.4,84.3c0.9-1.2,1.7-2.4,2.5-3.6c-3.5-0.7-25-2-27.4-1.6v20.6
								c1.1-0.2,2.2-0.4,3.2-0.6c4.6-1,8.3-2.8,11.5-5C110.5,91.2,113.7,87.8,116.4,84.3z M84.7,99.6V79c-9.2,0.1-18.3,0.6-27.4,1.6
								c2.5,4.1,5.6,7.9,9.8,11.3c2.9,2.3,6.2,4.4,10.4,5.9C79.7,98.8,82,99.4,84.7,99.6z M84.7,50.2V29.3c-9.9-0.1-19.8-0.7-29.5-1.8
								c-3.7,7.4-5.4,15-5.8,22.7H84.7z M84.7,25.3V4.7c-0.4,0.1-0.8,0.1-1.1,0.1c-4.2,0.7-7.7,2-10.9,3.7c-4.2,2.3-7.3,5-10,7.9
								c-2.1,2.3-3.9,4.7-5.4,7.2C66.3,24.7,75.4,25.2,84.7,25.3z M84.6,75V54.2H49.4c0.3,7.7,2.1,15.3,5.8,22.7
								C64.9,75.7,74.8,75.2,84.6,75z M47.9,93.5c5.3,1.8,16.8,4.6,19.1,4.6c-0.1,0-0.1-0.1-0.2-0.1c-3.8-2.3-6.9-4.9-9.6-7.7
								c-2.6-2.7-4.7-5.5-6.4-8.4c-0.1-0.2-0.2-0.4-0.7-0.3c-5.4,0.9-10.8,1.9-15.7,3.5c-0.9,0.3-1.8,0.6-2.8,1
								C33.7,87.8,42,91.5,47.9,93.5z M57.2,13.9c2.7-2.8,5.9-5.4,9.8-7.8c-13.7,2.2-25.5,6.2-35.7,12.1c6,2.2,12.5,3.5,19.2,4.5
								C52.3,19.7,54.5,16.7,57.2,13.9z M42.6,50.1c0.3-8,2-15.9,5.8-23.6c-7.7-1.2-15.1-2.7-21.8-5.3c-11.9,8.4-18.4,18-19.3,28.9H42.6
								z M48.4,77.8c-3.8-7.7-5.5-15.6-5.8-23.6H7.3c1,11,7.5,20.6,19.5,29C33.4,80.5,40.8,79,48.4,77.8z"/>
						</g>
						<g>
							<path class="st2" d="M109.2,98.2c13.6-2.2,25.3-6.2,35.5-12c-5.9-2.2-12.4-3.5-19-4.6C121.9,87.7,117,93.4,109.2,98.2z"/>
							<path class="st2" d="M31.5,86.1c2.2,1.6,10.5,5.4,16.4,7.4c5.3,1.8,16.8,4.6,19.1,4.6c-0.1,0-0.1-0.1-0.2-0.1
								c-3.8-2.3-6.9-4.9-9.6-7.7c-2.6-2.7-4.7-5.5-6.4-8.4c-0.1-0.2-0.2-0.4-0.7-0.3c-5.4,0.9-10.8,1.9-15.7,3.5
								C33.3,85.5,32.4,85.8,31.5,86.1z"/>
							<path class="st2" d="M109.2,6.2c7.8,4.7,12.7,10.5,16.5,16.6c6.7-1.1,13.2-2.3,19.2-4.5C134.7,12.4,122.8,8.4,109.2,6.2z"/>
							<path class="st2" d="M66.9,6.2c-13.7,2.2-25.5,6.2-35.7,12.1c6,2.2,12.5,3.5,19.2,4.5c1.8-3.1,4-6,6.7-8.8
								C59.9,11.1,63.1,8.5,66.9,6.2z"/>
							<path class="st2" d="M91.5,99.7c1.1-0.2,2.2-0.4,3.2-0.6c4.6-1,8.3-2.8,11.5-5c4.4-2.9,7.6-6.3,10.2-9.8c0.9-1.2,1.7-2.4,2.5-3.6
								c-3.5-0.7-25-2-27.4-1.6V99.7z"/>
							<path class="st2" d="M84.7,99.6V79c-9.2,0.1-18.3,0.6-27.4,1.6c2.5,4.1,5.6,7.9,9.8,11.3c2.9,2.3,6.2,4.4,10.4,5.9
								C79.7,98.8,82,99.4,84.7,99.6z"/>
							<path class="st2" d="M91.5,4.7v20.6c9.2-0.1,18.3-0.6,27.3-1.6c0-0.1,0-0.1,0-0.1c-2.6-4.1-5.8-8.1-10.3-11.6
								c-3-2.3-6.4-4.4-10.8-5.9C95.8,5.4,93.8,4.9,91.5,4.7z"/>
							<path class="st2" d="M57.3,23.7c9.1,1,18.2,1.5,27.4,1.6V4.7c-0.4,0.1-0.8,0.1-1.1,0.1c-4.2,0.7-7.7,2-10.9,3.7
								c-4.2,2.3-7.3,5-10,7.9C60.6,18.8,58.8,21.2,57.3,23.7z"/>
							<path class="st2" d="M91.5,29.3v20.8h35.3c-0.3-7.7-2.1-15.3-5.8-22.7C111.2,28.6,101.4,29.2,91.5,29.3z"/>
							<path class="st2" d="M84.7,50.2V29.3c-9.9-0.1-19.8-0.7-29.5-1.8c-3.7,7.4-5.4,15-5.8,22.7H84.7z"/>
							<path class="st2" d="M121.1,76.8c3.7-7.3,5.4-14.9,5.7-22.6H91.5V75c5,0.2,9.9,0.3,14.8,0.6C111.2,75.9,116.1,76.4,121.1,76.8z"
								/>
							<path class="st2" d="M55.1,76.9c9.8-1.2,19.6-1.7,29.5-1.8V54.2H49.4C49.7,61.9,51.4,69.5,55.1,76.9z"/>
							<path class="st2" d="M127.7,26.6c3.8,7.7,5.5,15.6,5.8,23.6h35.3c-0.9-10.9-7.4-20.5-19.3-28.9C142.8,23.8,135.4,25.4,127.7,26.6
								z"/>
							<path class="st2" d="M26.6,21.2c-11.9,8.4-18.4,18-19.3,28.9h35.3c0.3-8,2-15.9,5.8-23.6C40.7,25.4,33.3,23.8,26.6,21.2z"/>
							<path class="st2" d="M149.4,83.2c12-8.4,18.5-18.1,19.5-29h-35.3c-0.1,4-0.6,8-1.6,11.9c-0.9,3.9-2.3,7.8-4.2,11.7
								C135.4,79,142.7,80.5,149.4,83.2z"/>
							<path class="st2" d="M7.3,54.2c1,11,7.5,20.6,19.5,29c6.6-2.7,14-4.2,21.7-5.4c-3.8-7.7-5.5-15.6-5.8-23.6H7.3z"/>
							<path class="st2" d="M84.7,0.5h7c1,0.1,2,0.1,3,0.1c7.7,0.3,15.2,1.2,22.4,2.8c17.3,3.7,31.4,9.9,42.2,18.7
								c9.6,7.8,14.9,16.6,16.2,26.2c0.1,0.6,0.2,1.2,0.2,1.8v4c0,0.2-0.1,0.3-0.1,0.5c-0.3,3.5-1.1,6.9-2.6,10.2
								c-4.5,10.3-13.5,19-27,26c-14.7,7.6-31.9,11.9-51.4,12.8c-1,0.1-2.1,0.1-3.1,0.2h-7c-1.6-0.1-3.1-0.2-4.7-0.2
								c-8.6-0.5-16.8-1.6-24.7-3.6c-13.8-3.4-25.4-8.4-34.8-15.2C8.7,76.4,2.2,66.8,0.8,56c-0.1-0.6-0.2-1.2-0.2-1.7v-4.1
								c0-0.2,0.1-0.3,0.1-0.5c0.2-3,0.9-5.9,2-8.8c4.1-10.6,13-19.5,26.6-26.8C44,6,61.5,1.6,81.5,0.6C82.6,0.6,83.6,0.6,84.7,0.5z"/>
						</g>
					</g>
				</g>
				</svg>
				
			</span><span class="label">Media Kit (ZIP)</span></a>
			<a data-audio="DoorWood02.wav" data-module-init="audio-hover"  href="mailto:mailto:info@like-clothing.biz" title="Press and Sales">
				<span class="icon icon-globe">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 139.6 98.8" style="enable-background:new 0 0 139.6 98.8;" xml:space="preserve">
					<style type="text/css">
						.st0_9{clip-path:url(#SVGID_2_9);fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
					</style>
					<g>
						<defs>
							<rect id="SVGID_1_9" width="139.6" height="98.8"/>
						</defs>
						<clipPath id="SVGID_2_9">
							<use xlink:href="#SVGID_1_9"  style="overflow:visible;"/>
						</clipPath>
						<path class="st0_9" d="M92.4,49.4l39.8-37.2v74.5L92.4,49.4z M52.3,54.2l17.5,16.3l17.5-16.3L126.7,91H12.9L52.3,54.2z M47.1,49.4
							L7.3,86.6V12.1L47.1,49.4z M69.8,60.9L13,7.8h113.7L69.8,60.9z M0.5,98.3h138.6V0.5H0.5V98.3z"/>
					</g>
					</svg>
					
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 viewBox="0 0 139.6 98.8" style="enable-background:new 0 0 139.6 98.8;" xml:space="preserve">
					<style type="text/css">
						.st0_8{clip-path:url(#SVGID_2_8);}
						.st1{fill:#FFFFFF;}
					</style>
					<g>
						<defs>
							<rect id="SVGID_1_" width="139.6" height="98.8"/>
						</defs>
						<clipPath id="SVGID_2_8">
							<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
						</clipPath>
						<g id="XMLID_1_" class="st0_8">
							<g>
								<path class="st1" d="M139.1,0.5v97.8H0.5V0.5H139.1z M132.3,86.6V12.1L92.4,49.4L132.3,86.6z M12.9,91h113.8L87.3,54.2L69.8,70.5
									L52.3,54.2L12.9,91z M69.8,60.9l56.8-53.1H12.9L69.8,60.9z M7.3,86.6l39.8-37.2L7.3,12.1V86.6z"/>
							</g>
							<g>
							</g>
						</g>
					</g>
					</svg>
					
				</span>
				<span class="label">Press &amp; Sales</span></a>
		</article>
		
		
		
		<article>
			<p><b>&ldquo;What Are We Doing Tonight,&rdquo;,</b> is a 10-min fashion sitcom in &#xFB01;ve scenes conceived by art <span class="amp">&amp;</span> design director Harry Gassel <a href="http://talk-is.cheap/" title="Talk Magazine" target="_blank">TALK</a> <a href="http://www.documentjournal.com/" target="_blank">DOCUMENT</a> <a href="http://www.thefader.com/2013/11/22/what-were-reading-harry-gassel" target="_blank">THE FADER</a> produced in collaboration with Like Clothing. The &#xFB01;lm, directed by multimedia artist Pepi Ginsberg <a href="http://www.n-a-r-c.com/" target="_blank">N-A-R-C</a> <a href="https://vimeo.com/pepiginsberg" target="_blank">THE BLUE DOT</a> <a href="http://www.npr.org/templates/story/story.php?storyId=90449506"> THE WATERLINE</a> with &#xFB01;lmmaker Eric Yue <a href="https://vimeo.com/91617742" target="_blank">RATKING’S CANAL</a> <a href="https://vimeo.com/107283694" target="_blank">A.P.C.</a> as director of photography, includes an original score by composer <span class="amp">&amp;</span> guitarist Michael Beharie <a href="http://astronauti.co/michael-beharie-ray-like-morning-astr032/" target="_blank">ASTRO NAUTICO</a> <a href="http://www.thefader.com/2016/04/26/michael-beharie-long-time" target="_blank">THE FADER</a> <a href="https://thump.vice.com/en_us/track/michael-beharie-a-stone-stream" target="_blank">THUMP</a>. &ldquo;What Are We Doing Tonight&rdquo; stars actor <span class="amp">&amp;</span> singer Ato Blankson-Wood <a href="http://www.nytimes.com/2016/05/26/theater/review-in-the-total-bent-a-father-son-rift-and-a-sensational-score.html" target="_blank">THE TOTAL BENT</a> and model Lauren Perlman&nbsp;<a href="http://www.vogue.com/fashion-shows/spring-2017-ready-to-wear/rachel-comey/slideshow/collection#16" target="_blank">VOGUE</a>. The lookbook features photography by Matthew Tammaro <a href="http://www.newyorker.com/magazine/2016/06/20/mitski-miyawaki-and-chicago-rappers" target="_blank">NEW YORKER</a> <a href="http://www.thefader.com/2015/04/28/trans-identifying-persons-model-spring-fashion-and-talk-shopping" target="_blank">THE FADER</a> <a href="http://hellomrmag.com/popeye2016/" target="_blank">POPEYE</a> and hair and makeup by Rachael Ghorbani&nbsp;<a href="https://www.frankieandclo.com/rachaelghorbani/" target="_blank">FRANKIE + CLO</a>.
			</p>
		</article>
		
		<article>
			<p><b>Like</b> is Lucinda Trask’s clothing line. While working as a designer at Zac Posen and Isaac Mizrahi, she began to create customized garments for private clients. This practice became Like, a label and studio specializing in design, sourcing and patternmaking for  her friends in the industry and customizing her own designs for private clients. Like has expanded to ready-to-wear for stores like Sincerely Tommy&nbsp;<a href="https://sincerelytommy.com/" target="_blank">URL</a>. and custom designs for Stone Fox Bride&nbsp;<a href="http://us10.campaign-archive1.com/?u=da5207c47fe3ce6d07bc4f729&id=5931a76cd5" target="_blank">URL</a> Like has been featured in W, Talk, The Fader&nbsp;<a href="http://www.thefader.com/2014/05/07/interview-introducing-likes-almost-couture-cozy-gear" target="_blank">URL</a>, The Cut&nbsp;<a href="http://nymag.com/thecut/2015/08/meet-the-bed-stuy-shop-owner-with-chanel-roots.html" target="_blank">URL</a>, Racked&nbsp;<a href="http://ny.racked.com/2015/5/15/8610085/spring-outfit-ideas"target="_blank">URL</a> and Suited Magazine&nbsp;<a href="http://www.suitedmagazine.com/" target="_blank">URL</a>. The non-seasonal collections mix high-concept and reimagined, everyday basics.</p>
		</article>
		
		<article class="previous-collections">
			<h3><span class="h3-sub">Previous</span> Collections</h3>
			<div class="collection-titles">
				<a data-audio="AudienceLaughter CTV02_16_01.wav" data-module-init="audio-hover" href="http://like-clothing.biz/collection/02/LIKE02_Champion.pdf" target="_blank"><span class="collection-name">Champion</span><span class="collection-num">Collection 02 (PDF)</span></a>
				<a data-audio="AudienceLaughter CTV02_27_03.wav" data-module-init="audio-hover" href="http://like-clothing.biz/collection/03/" target="_blank"><span class="collection-name">Hounds</span><span class="collection-num">Collection 03 (URL)</span></a>
				<a data-audio="AudienceLaughter CTV02_38_03.wav" data-module-init="audio-hover" href="http://like-clothing.biz/collection/04/LIKE04_Paint.pdf" target="_blank"><span class="collection-name">Paint(One)</span><span class="collection-num">Collection 04 (PDF)</span></a>
			</div>
		</article>
		
		<article class="endmatter">
			<div class="social">
				
				<svg version="1.1" id="quotes" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 614 225" style="enable-background:new 0 0 614 225;" xml:space="preserve">
				<style type="text/css">
					.st0_quotes{fill:none;stroke:#FFFFFF;stroke-width:5.8;stroke-miterlimit:14.51;}
				</style>
				<title>Artboard 1</title>
				<g>
					<g>
						<path class="st0_quotes" d="M482.9,221.2h22.2c81.2,0,105.5-20,105.5-89.3V4.8H500.8v105h28.1c0.4,4.5,0.6,9,0.5,13.5
							c0,27.6-7.6,36.3-32.5,36.3h-14.1v61.6H482.9z M321.6,221.2h22.2c81.7,0,106.1-20,106.1-89.3V4.8H339.5v105h28.1
							c0.9,4.5,1.2,9,1.1,13.5c0,27.6-8.1,36.3-32.5,36.3h-14.6V221.2z M131.1,4.8h-22.2C27.7,4.8,2.8,24.8,2.8,94.1v127.2h110.4v-105
							H85.1c-0.4-4.5-0.6-9-0.5-13.5c0-27.6,7.6-36.3,31.9-36.3h14.6V4.8z M292.4,4.8h-22.7c-81.2,0-105.5,20-105.5,89.3v127.2H274v-105
							h-27.6c-0.9-4.5-1.2-9-1.1-13.5c0-27.6,8.1-36.3,32.5-36.3h14.6V4.8z"/>
					</g>
				</g>
				</svg>
				
				<a href="http://instagram.com/like.clothing/" target="_blank">Instagram: @like.clothing</a>
				
			</div>
			<div class="logo">
				<a data-audio="DoorWood02.wav" data-module-init="audio-hover" href="mailto:info@like-clothing.biz" title="Like"><img src="assets/images/like.png" alt="Like Clothing" /></a>
				<a href="mailto:info@like-clothing.biz">info@like-clothing.biz</a>
			</div>
		</article>
		
	</section>
	

	
	<footer>
		<article>
			<copy><h3><span class="h3-sub">COPYRIGHT ©MMXV BY LIKE CLOTHING <br class="mobile" />ALL RIGHTS RESERVED</span></h3></copy>
			<!--<h3><span class="h3-sub"><a href="mailto:info@like-clothing.biz">info@like-clothing.biz</a></span></h3>-->
		</article>
	</footer>

</section>




</div></div><!--wrapper--><!--scroller-->


<section class="top-section bottom-fixed">

	<header>
		<h3>Like Clothing <span class="h3-sub">Presents</span></h3>
	</header>

	<h1>What are we<br class="mobile-portrait-hide"> doing tonight?</h1>
	
	<h3><span class="h3-sub">A</span> Fashion Sitcom</h3>
	
	<h2 class="collection-callout">A new collection and &#xFB01;lm<br>February, 2016</h2>
	
	<form class="newsletter" action="#" data-module-init="form" action="https://like-clothing.us14.list-manage.com/subscribe/post" method="post">
		<input type="email" class="bottom-input" placeholder="Email Address" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="">
		<button type="submit" class="button--submit" data-audio="LaughterCrowd_AR03_44.wav" data-module-init="audio-hover">Subscribe</button>
	</form>
</section>


<!-- JS -->
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.4.1/velocity.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.2.0/iscroll-probe.js"></script>
<script src="assets/js/main.min.js"></script>
</body>
</html>