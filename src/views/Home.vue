<template>
	<div id="main">
		<div id="welcome" v-html="$root.webs.home_page.page_content">
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
					<div class="left">
						<p class="date">
							<a href="#">
								{{work.job_start_date}}
								{{ (work.job_end_date!=null)?work.job_end_date:"" }}
							</a>
						</p>	
					</div>
					
					<div class="content">
						<h3>{{work.job_company}} - {{work.job_title}}</h3>
						<p v-html="work.job_content"></p>
					</div>
				</li>
			</ul>
		</div>
		<div id="copyright">
			<span>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a></span>
			<span>Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</span>
		</div>
	</div>
</template>
<style scoped>
	ul.style1 .date{
		float: unset;
		height: 100%;
	}
	.first{
		display: flex;
	}
</style>

<script>
// @ is an alias to /src

export default {
	
}
</script>
