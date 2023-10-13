$(function() {
	$.fn.copy_init = function(){
		var pres = $("pre");
		// console.log(pres.length)
		if (pres.length) {
			pres.each(function() {
				var that = this;
				var t = $(that).find("code").text();
				var btn = $('<span class="copy el-icon-copy-document" title="复制"></span>').attr(
					"data-clipboard-text",
					t
				);
				$(that).prepend(btn);
				var c = new ClipboardJS(btn[0]);
				c.on("success", function() {
					btn.addClass("copyed").text("  复制成功");
				});
				c.on("error", function() {
					btn.text("  复制失败");
				});
				btn.mouseleave(function() {
					btn.text("").removeClass("copyed");
				});
			});
		}
	}
	// $.fn.copy_init()  // 调用
});