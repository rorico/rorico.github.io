$(document).ready(function() {
	var currentPage;
	showPage();
	$(window).on("hashchange",showPage);
	
	function showPage(page) {
		var page = window.location.hash || "#home";
		if (currentPage !== page) {
			// i'll be honest, I don't like this way of doing it
			$(".header a").each(function() {
				var $this = $(this);
				if ($this.attr("href") === page) {
					$this.addClass("selected");
				} else {
					$this.removeClass("selected")
				}
			})
			currentPage = page;
		}
	}
});