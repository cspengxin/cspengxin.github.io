<%@ page contentType="text/html; charset=utf-8" %>
<html>
<!-- Run the plugin -->
<link href="css/style.css" type="text/css" rel="stylesheet" charset="utf-8"/>
<link href="orbit/orbit-1.2.3.css" type="text/css" rel="stylesheet" charset="utf-8">
<script type="text/javascript" src="orbit/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="orbit/jquery.orbit-1.2.3.min.js"></script> 
<script type="text/javascript">
$(window).load(function() {
  $('#featured').orbit();
});
  
function nav(item){
  parent.nav(item);
}
</script>
<body>
	<!-- 轮播 -->
	<div class="show_box">
	  <div id="featured"  class="show_content_img_div">
		<img class="show_content_img" src="img/research/tool1.png" alt="" data-caption="#caption1" />
		<img class="show_content_img" src="img/research/tool2.png" alt="" data-caption="#caption2" />
		<img class="show_content_img" src="img/research/tool3.png" alt="" data-caption="#caption3" />
	  </div>
	  <div class="show_content_text">
		<p id="caption1">Screenshot for MFIE, click <a href="research.jsp" target="main_wrapper" onclick="nav('research');">here</a> to view more.</p>
		<p id="caption2">Screenshot for MCIDiff, click <a href="research.jsp" target="main_wrapper" onclick="nav('research');">here</a> to view more.</p>
		<p id="caption3">Screenshot for Clonepedia, click <a href="research.jsp" target="main_wrapper" onclick="nav('research');">here</a> to view more.</p>
	  </div>
	</div>
	<!-- 新闻 -->
	<div class="news_box box">
	  <div class="box_title">News</div>
	  <ul class="news_list">
		<li><span class="news_date">[2015-09-29]</span> attend <a href="http://www.icsme.uni-bremen.de" target="_blank">ICSME 2015</a> in Bremen, Germany </li>
		<li><span class="news_date">[2015-09-16]</span> be invited to be a PC member of <a href="http://splc2016.net" target="_blank">SPLC 2016</a></li>
		<li><span class="news_date">[2015-08-30]</span> attend <a href="http://esec-fse15.dei.polimi.it" target="_blank">ESEC/FSE 2015</a> in Bergamo, Italy (with my student Linyun)</li>
		<li><span class="news_date">[2015-08-26]</span> be invited to be a Workshop Co-Chair of <a href="http://splc2016.net" target="_blank">SPLC 2016</a> </li>
		<li><span class="news_date">[2015-07-28]</span> be invited to be the Social Media Chair of <a href="http://re16.org" target="_blank">RE 2016</a></li>
		<li><span class="news_date">[2015-06-28]</span> organize a workshop on Requirements Engineering in Internet Age in Fudan University</li>
		<li><span class="news_date">[2015-06-10]</span> our paper on modification recommendation of pasted code accepted by <a href="http://esec-fse15.dei.polimi.it" target="_blank">ESEC/FSE 2015</a></li>
		<li><span class="news_date">[2015-04-25]</span> our paper on requirements-driven adaptation accepted by <a href="http://link.springer.com/journal/766" target="_blank">Requirements Engineering Journal</a> </li>
		<li><span class="news_date">[2014-12-04]</span> be invited to be a PC member of <a href="http://www.computer.org/portal/web/COMPSAC" target="_blank">COMPSAC 2015</a> </li>
		<li><span class="news_date">[2014-12-02]</span> be invited to be a member of the editorial board of <a href="http://www.jos.org.cn" target="_blank">Chinese Journal of Software</a> (2015-2018)</li>
	  </ul>
	  <p class="viewmore_link"><a href="news.jsp" target="main_wrapper"  onclick="nav('news');">View More...</a></p>
	</div>
	<!-- 研究方向 -->
	<div class="interest_box box">
	  <div class="box_title">Research Interests</div>
	  <div class="interest_content">
		My research focuses on software engineering and mobile cloud computing. Currently, I concentrate on the following three directions. I also worked on requirements engineering, software produce line, and self-adaptive systems before.
		<li><strong><em>Program Analysis: </em></strong>program differencing, test case generation, Android program analysis and debugging</li>
		<li><strong><em>Software Maintenance and Evolution: </em></strong>code search, code completion and code generation, code clone detection and management, development knowledge extraction and recommendation, evolution analysis, visualization of software evolution data, code smell and technical debt, refactoring</li>
		<li><strong><em>Mobile Cloud Computing: </em></strong>mobile crowdsourcing, mobile application supported collaboration, requirements-driven mashup of heterogeneous services and resources, self-adaptive software in cloud computing</li>	
	  </div>
	</div>
</body>
</html>
