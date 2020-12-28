<template>
	<div id="main">
		<div id="banner">
			<img src="images/pic01.jpg" alt="" class="image-full" />
		</div>
		<div id="welcome">
			<div class="title">
				<h2>Fusce ultrices fringilla metus</h2>
				<span class="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue</span>
			</div>
			<p>This is <strong>Privy</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
			<ul class="actions">
				<li><a href="#" class="button">Etiam posuere</a></li>
			</ul>
		</div>
		<div id="featured">
			<div class="title">
				<h2>工作經歷</h2>
				<!-- <span class="byline">Integer sit amet aliquet pretium</span> -->
			</div>
			<ul class="style1">
				<li class="first"
					v-for="(work,index) in $root.works"
					:key="index"
				>
					<p class="date">
						<a href="#">
							{{work.job_start_date}}
							{{ (work.job_end_date!=null)?work.job_end_date:"在職" }}
						</a>
					</p>
					<h3>{{work.job_company}} - {{work.job_title}}</h3>
					<p>{{work.job_content}}</p>
				</li>
			</ul>
		</div>
		<div id="copyright">
			<span>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a></span>
			<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	
}
</script>
