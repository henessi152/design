$(function(){
	
	
//	filter 
	
	let filter = $("[data-filter]");
	
	filter.on("click", function() {
		
		event.preventDefault();
		
		let cat = $(this).data('filter');
		
		if(cat == 'all'){
			$("[data-cat]").removeClass('hide');
		} else {
		
				$("[data-cat]").each(function(){

					let workCat = $(this).data('cat');

					if(workCat != cat){
						$(this).addClass('hide');
					} else {
						$(this).removeClass('hide');
					}
			});
		}
	});
	
//	modal
	
	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");
	
	modalCall.on("click", function(Event){
		Event.preventDefault();
		
		let $this = $(this);
		let modalId = $this.data('modal');
		
		$(modalId).addClass('show');
		$("body").addClass('no-scroll');
		//$("#worksSlider").slick('setPosition');
		
	});
	
	modalClose.on("click", function(Event){
		Event.preventDefault();
		
		let $this = $(this);
		let modalParent = $this.parents('.modal');
		
		modalParent.removeClass('show');
		$("body").removeClass('no-scroll');
	});
	
	$(".modal").on("click", function(Event){
		
		$(this).removeClass('show');
		$("body").removeClass('no-scroll');
	});
	
	$(".modal__dialog").on("click", function(Event){
		event.stopPropagation();
	});

	
//slider
	
	$('#worksSlider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true

	});
	
	$(".slickPrev").on("click", function(event){
		event.preventDefault();
		
		$('#worksSlider').slick("slickPrev");
		
	});
	$(".slickNext").on("click", function(event){
		event.preventDefault();
		
		$('#worksSlider').slick("slickNext");
		
	});
	
	
//nav	
	
	$("#navToggle").on('click', function(){
		event.preventDefault();
		
		$("#nav").toggleClass("show");
	});
	
});