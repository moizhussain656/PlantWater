;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};





	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li');	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li');	
	  	});

    };

    
     function setTime () {
        var date = new Date();
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        document.getElementById("idTime").textContent = "Time Now : " + date.getDay() +"-"+months[date.getMonth()]+"-"+ date.getFullYear()+"  ~ "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds() ;

        

    };
    function ToJavaScriptDateTime(value) {
        var pattern = /Date\(([^)]+)\)/;
        var results = pattern.exec(value);
        var dt = new Date(parseFloat(results[1]));
        return ('0' + dt.getDate()).slice(-2) + "-" + ('0' + (dt.getMonth() + 1)).slice(-2) + "-" + dt.getFullYear() + " ~ " + dt.getHours() + "Hrs:" + dt.getMinutes() + "Mins" ;
    };
    function saveDataofPlant(idPlant) {
      
         

        $.ajax({
            url: 'WebService1.asmx/UpdateDataPlantByID',
            dataType: "json",
            method: 'post',
            //contentType: "application/json; charset=utf-8",
            data:{ id: idPlant },
            success: function (data) {
                   console.log(data);
               
                // document.getElementById("dataPlant1").textContent = data[0].
                $(data).each(function (index, key) {
                   
                    
                });
            },
            error: function (err) {
                //alert(err);
            }
        });

    };
    function setInitialData() {
        document.getElementById('imgPlant5').src = "images/needwater.jpg";
        document.getElementById('imgPlant4').src = "images/needwater.jpg";
        document.getElementById('imgPlant3').src = "images/needwater.jpg";
        document.getElementById('imgPlant2').src = "images/needwater.jpg";
        document.getElementById('imgPlant1').src = "images/needwater.jpg";
            $.ajax({
                url: 'WebService1.asmx/GetAllPlants',
                dataType: "json",
                method: 'post',
                success: function (data) {
                 //   console.log(data);
                 
                   // document.getElementById("dataPlant1").textContent = data[0].
                        $(data).each(function (index, key) {
                        //    console.log(key);
                            if (key.P_ID == 1) { document.getElementById("dataPlant1").textContent = ToJavaScriptDateTime(key.Start_Time); }
                            else if (key.P_ID == 2) { document.getElementById("dataPlant2").textContent = ToJavaScriptDateTime(key.Start_Time); }
                            else if (key.P_ID == 3) { document.getElementById("dataPlant3").textContent = ToJavaScriptDateTime(key.Start_Time); }
                            else if (key.P_ID == 4) { document.getElementById("dataPlant4").textContent = ToJavaScriptDateTime(key.Start_Time); }
                            else if (key.P_ID == 5) { document.getElementById("dataPlant5").textContent = ToJavaScriptDateTime(key.Start_Time); }
                            else { alert('Error: No information was fetched from database'); }

                            if (key.Active == 1 && key.P_ID == 1) { document.getElementById('imgPlant1').src = "images/fresh.jpg";}
                            if (key.Active == 1 && key.P_ID == 2) { document.getElementById('imgPlant2').src = "images/fresh.jpg"; }
                            if (key.Active == 1 && key.P_ID == 3) { document.getElementById('imgPlant3').src = "images/fresh.jpg"; }
                            if (key.Active == 1 && key.P_ID == 4) { document.getElementById('imgPlant4').src = "images/fresh.jpg"; }
                            if (key.Active == 1 && key.P_ID == 5) { document.getElementById('imgPlant5').src = "images/fresh.jpg"; }


                        });
                },
                error: function (err) {
                    alert(err);
                }
            });
        

    }
    

   
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		// fullHeight();
        var myVar = setInterval(setTime, 1000);
        setInitialData();
        document.getElementById("idBtnPlant1").addEventListener("click", function () {            
            saveDataofPlant(1);
            setInitialData();
        });
        document.getElementById("idBtnPlant2").addEventListener("click", function () {
            saveDataofPlant(2);
            setInitialData();
        });
        document.getElementById("idBtnPlant3").addEventListener("click", function () {
            saveDataofPlant(3);
            setInitialData();
        });
        document.getElementById("idBtnPlant4").addEventListener("click", function () {
            saveDataofPlant(4);
            setInitialData();
        });
        document.getElementById("idBtnPlant5").addEventListener("click", function () {
            saveDataofPlant(5);
            setInitialData();
        });
	});


}());