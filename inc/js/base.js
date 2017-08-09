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
      $(`article:nth-child(${this.props.current_slide})`).addClass('off').removeClass('active')
      this.props.current_slide += 1;
      if(this.props.current_slide > this.props.total_slides){
          this.props.current_slide=1;

          $('article:nth-child(1)').removeClass('off').show().addClass('active').siblings().removeClass('off')
      } else{
          $(`article:nth-child(${this.props.current_slide})`).addClass('active').siblings().removeClass('active');
      }
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
      this.props.current_slide-=1;
      $(`article:nth-child(${this.props.current_slide})`).addClass('prev').removeClass('off').removeClass('active')
      setTimeout(()=>{$(`article:nth-child(${this.props.current_slide})`).removeClass('prev')},1000)
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
