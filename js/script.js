window.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function() {
        $(window).scroll(function() {
            let wScroll = $(this).scrollTop();

            if(wScroll > 20) {
                $('.header').addClass('active');
            } else {
                $('.header').removeClass('active');
            }
        })
    })
    const slideMenuSm = document.querySelector('.slide-menu-sm'),
          slideMenuXl = document.querySelector('.slide-menu-xl'),
          slideMenu = document.querySelector('.slide-menu'),
          header = document.querySelector('.header'),
          burger = document.querySelector('.header-burger');


          burger.addEventListener('click', () => {
              burger.classList.toggle('header-burger-active');
              slideMenuXl.classList.toggle('slide-menu-xl-active');
              slideMenuSm.classList.toggle('slide-menu-sm-active');
              slideMenu.classList.toggle('slide-menu-active');
              if (slideMenu.classList.contains('slide-menu-active')) {
                  document.body.style.overflow = 'hidden';
                  header.classList.remove('active');
                  header.style.backgroundColor = 'transparent';
              } else {
                document.body.style.overflow = '';
                header.classList.toggle('active');
                header.style.backgroundColor = '';
              }
          });

    $('a.ajax-link').live('click', function() {
        $this = $(this);
        var link = $this.attr('href');
        if (link != currentUrl && link != '#') {
            $.ajax({
                url:link,
                processData:true,
                dataType:'html',
                success:function(data){
                    document.title = $(data).filter('title').text();
                }
            })
        }
    })
});