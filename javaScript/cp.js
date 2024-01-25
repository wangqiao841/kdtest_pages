$(function() {
	$.fn.copy_init = function(copy_text_array){
		var pres = $("pre");
		var index = 0;
		// console.log(pres.length)
		if (pres.length) {
			pres.each(function() {
				var that = this;
				// var copy_text = $(that).find("code").text();
				var btn = $('<span class="copy" title="复制">复制</span>').attr(
					"data-clipboard-text",
					copy_text_array[index]
				);
				$(that).prepend(btn);
				// that.insertAdjacentHTML('afterbegin', btn)
				var c = new ClipboardJS(btn[0]);
				c.on("success", function() {
					btn.css("background-color", "#34bd3d");
					btn.text("已复制");
				});
				c.on("error", function() {
					btn.css("background-color", "#bd3638");
					btn.text("失败");
				});
				btn.mouseleave(function() {
					btn.css("background-color", "#adadad");
					btn.text("复制");
				});
				index += 1;
			});
		}
	}
	// $.fn.copy_init()  // 调用
});