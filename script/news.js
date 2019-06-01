// 格式说明：
// data  ---------------------	保存信息的数组，其中每个对象包含title和content属性，title表示哪一年，content保存该年的数据
// data[x].content  ----------	保存所有的信息的数组，其中每个对象包含date和words，date表示日期，words表示描述
// data[x].content[y].words --	条目中的信息，对于需要加链接的地方自行包围，href中写入链接
//                              如：<a href=\"此处写链接\" target=\"_blank\">ICSME 2015</a>
// ps：两个数组的从前往后顺序就是页面从上到下的顺序

// 格式实例
//var data = [
//	{'title':2016,
//	'content':[
//		{'date':'2015-09-29',
//		'words':'attend <a href=\"http://www.icsme.uni-bremen.de\" target=\"_blank\">ICSME 2015</a> in Bremen, Germany '},
//		{'date':'2015-09-29',
//		'words':'attend <a href=\"http://www.icsme.uni-bremen.de\" target=\"_blank\">ICSME 2015</a> in Bremen, Germany '},
//		{'date':'2015-09-29',
//		'words':'attend <a href=\"http://www.icsme.uni-bremen.de\" target=\"_blank\">ICSME 2015</a> in Bremen, Germany '}
//	]},
//	{'title':2016,
//	'content':[
//		{'date':'2015-09-29',
//		'words':'attend <a href=\"http://www.icsme.uni-bremen.de\" target=\"_blank\">ICSME 2015</a> in Bremen, Germany '},
//		{'date':'2015-09-29',
//		'words':'attend <a href=\"http://www.icsme.uni-bremen.de\" target=\"_blank\">ICSME 2015</a> in Bremen, Germany '},
//		{'date':'2015-09-29',
//		'words':'attend <a href=\"http://www.icsme.uni-bremen.de\" target=\"_blank\">ICSME 2015</a> in Bremen, Germany '}
//	]}
//];
var data = [];
var addStr = "";
$(document).ready(function() {
	addNews();
});

function addNews(){
	for(var i in data){
		addStr = addStr + "<div class=\"news_year\">"+data[i].title+"</div><ul class=\"news_list\">";
		var content = data[i].content;
		for(var j in content){
			addStr = addStr + "<li><span class=\"news_date\">["+content[j].date+"]</span>"+content[j].words+"</li>";
		}
		addStr = addStr + "</ul>";
	}
	$('#addContent').html(addStr);
}