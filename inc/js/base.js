"use strict";

(function() {

	var Carousel = {
		props:{
			current_slide:1,
			total_slides:$('.slide-text').length
		},
		init:function(){
			//ADD INITIALIZER CODE HERE
      this.bindEvents();
      this.update();
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},
		next:function(){
			//ADD NEXT CODE HERE

		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
		},
		update:function(){
			//ADD UPDATE CODE HERE
      if(this.props.total_slides===0){
        this.props.total_slides=$('.slide-text').length
        this.update();
      }
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);
