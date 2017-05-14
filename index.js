$(document).ready(function() {
	var currentPage;
	showPage();
	$(window).on("hashchange",showPage);
	
	function showPage(page) {
		var page = window.location.hash || "#home";
		if (currentPage !== page) {
			$(currentPage).hide();
			$(page).show();
			currentPage = page;
		}
	}
});