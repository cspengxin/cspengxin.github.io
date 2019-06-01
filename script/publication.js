// 格式说明：
// data  -----------------	保存信息的数组，其中每个对象包含title和content属性，title表示哪一年，content保存该年的数据
// data[x].content  ------	保存所有的工作的数组，其中每个对象包含words和address，words表示描述，address保存服务器上该文章链接
// ps：所需的pdf要自行上传到服务器对应的文件夹下
//     两个数组的从前往后顺序就是页面从上到下的顺序

// 格式实例：
// var data = [
//	{'title':2016,
//	'content':[
//		{'words':'Bihuan Chen, Xin Peng, Yijun Yu, Bashar Nuseibeh, Wenyun Zhao. Self-adaptation through incremental generative model transformations at runtime. The 36th International Conference on Software Engineering (ICSE 2014).',
//		'address':'/paper/ourpapers/233.pdf'},
//		{'words':'Bihuan Chen, Xin Peng, Yijun Yu, Bashar Nuseibeh, Wenyun Zhao. Self-adaptation through incremental generative model transformations at runtime. The 36th International Conference on Software Engineering (ICSE 2014).',
//		'address':'/paper/ourpapers/233.pdf'},
//		{'words':'Bihuan Chen, Xin Peng, Yijun Yu, Bashar Nuseibeh, Wenyun Zhao. Self-adaptation through incremental generative model transformations at runtime. The 36th International Conference on Software Engineering (ICSE 2014).',
//		'address':'/paper/ourpapers/233.pdf'}
//	]},
//	{'title':2016,
//	'content':[
//		{'words':'Bihuan Chen, Xin Peng, Yijun Yu, Bashar Nuseibeh, Wenyun Zhao. Self-adaptation through incremental generative model transformations at runtime. The 36th International Conference on Software Engineering (ICSE 2014).',
//		'address':'/paper/ourpapers/233.pdf'},
//		{'words':'Bihuan Chen, Xin Peng, Yijun Yu, Bashar Nuseibeh, Wenyun Zhao. Self-adaptation through incremental generative model transformations at runtime. The 36th International Conference on Software Engineering (ICSE 2014).',
//		'address':'/paper/ourpapers/233.pdf'},
//		{'words':'Bihuan Chen, Xin Peng, Yijun Yu, Bashar Nuseibeh, Wenyun Zhao. Self-adaptation through incremental generative model transformations at runtime. The 36th International Conference on Software Engineering (ICSE 2014).',
//		'address':'/paper/ourpapers/233.pdf'}
//	]}
//];
var data = [];
var addStr = "";
$(document).ready(function() {
	addPublication();
});

function addPublication(){
	for(var i in data){
		addStr = addStr + "<div class=\"publication_each_year\"><div class=\"publication_year_title\">"+ data[i].title +"</div><ul>";
		var content = data[i].content;
		for(var j in content){
			addStr = addStr + "<li>" + content[j].words +"[<a href=\""+content[j].address+"\">PDF</a>]</li>";
		}
		addStr = addStr + "</ul></div>";
	}
	$('#addContent').html(addStr);
}