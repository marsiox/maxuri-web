var $ = jQuery.noConflict();

(function() {
    var app = {
        init: function(){
            this.hamburger();
            this.header();
            this.parallaxShapes();
            this.wow();
            this.form();
            this.scroll();
        },

        hamburger: function(){
            var button = $('body').find('.hamburger');
            var menu = $('body').find('.rwd-menu');
            var shadow = $('body').find('.rwd-menu-shadow');

            button.on('click', function() {
                button.toggleClass('is-active');
                menu.toggleClass('active');
                shadow.toggleClass('active');
                $('body').toggleClass('menu-show');
            });
        },

        header: function(){
            let start = $(window).scrollTop();
            var header = $('body').find('header');

            $(window).scroll(function() {
                let position = $(this).scrollTop();
                if( position > '55'){
                    header.addClass('out');
                } else {
                    header.removeClass('out');
                }
                start = position;
            });
        },

        parallaxShapes: function(){

            var winWidth = $(window).width();

                var timeout;
                $('main').mousemove(function(e){
                    if(timeout) clearTimeout(timeout);
                    setTimeout(callParallax.bind(null, e), 200);

                });

                function callParallax(e){
                    parallaxIt(e, '.parallax1', -50);
                    parallaxIt(e, '.parallax2', 50);
                    parallaxIt(e, '.parallax3', 30);
                }

            if(winWidth >= 768){
                function parallaxIt(e, target, movement){
                    var $this = $('main');
                    var relX = e.pageX - $this.offset().left;
                    var relY = e.pageY - $this.offset().top;

                    TweenMax.to(target, 1, {
                        x: (relX - $this.width()/2) / $this.width() * movement * 2,
                        y: (relY - $this.height()/2) / $this.height() * movement,
                        ease: Power2.easeOut
                    })
                }
            }

        },


        wow: function(){
            new WOW().init();
        },

        form: function(){
            var input = $('body').find('.form-control');

            input.on('focus', function(){
                $(this).siblings().addClass('active');
            });


            input.on('blur', function(){
                if($(this).val() == ''){
                    $(this).siblings().removeClass('active');
                }
            });
        },

        scroll: function(){
            var item = $('body').find('.menu a');
            var itemFooter = $('body').find('.footer-menu-2 a');


            var button = $('body').find('.hamburger');
            var menu = $('body').find('.rwd-menu');
            var shadow = $('body').find('.rwd-menu-shadow');

            item.click(function(e) {

                button.removeClass('is-active');
                menu.removeClass('active');
                shadow.removeClass('active');
                $('body').removeClass('menu-show');

                e.preventDefault();
                var aid = $(this).attr("href");
                $('html,body').animate({scrollTop: $(aid).offset().top - 150},'slow');
            });

            itemFooter.click(function(e) {
                e.preventDefault();
                var aid = $(this).attr("href");
                $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
            });

        }
    }
    $(document).ready(function(){
        app.init();
    });
}());