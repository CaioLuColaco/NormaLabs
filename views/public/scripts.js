$(document).ready(function() {
    // let containerA = document.getElementById("circleA");

    // let circleA = new ProgressBar.Circle(containerA, {

    //     color: '#F48C06',
    //     strokeWidth: 8,
    //     duration: 1400,
    //     from: { color: '#AAA' },
    //     to: { color: '#F48C06'},

    //     step: function(state, circle) {
    //         circle.path.setAttribute('stroke', state.color);

    //         let value = Math.round(circle.value() * 60);

    //         circle.setText(value);

    //     }

    // });

    // let containerB = document.getElementById("circleB");

    // let circleB = new ProgressBar.Circle(containerB, {

    //     color: '#F48C06',
    //     strokeWidth: 8,
    //     duration: 1800,
    //     from: { color: '#AAA' },
    //     to: { color: '#F48C06'},

    //     step: function(state, circle) {
    //         circle.path.setAttribute('stroke', state.color);

    //         let value = Math.round(circle.value() * 254);

    //         circle.setText(value);

    //     }

    // });

    // let containerC = document.getElementById("circleC");

    // let circleC = new ProgressBar.Circle(containerC, {

    //     color: '#F48C06',
    //     strokeWidth: 8,
    //     duration: 2200,
    //     from: { color: '#AAA' },
    //     to: { color: '#F48C06'},

    //     step: function(state, circle) {
    //         circle.path.setAttribute('stroke', state.color);

    //         let value = Math.round(circle.value() * 14);

    //         circle.setText(value);

    //     }

    // });

    // let containerD = document.getElementById("circleD");

    // let circleD = new ProgressBar.Circle(containerD, {

    //     color: '#F48C06',
    //     strokeWidth: 8,
    //     duration: 2400,
    //     from: { color: '#AAA' },
    //     to: { color: '#F48C06'},

    //     step: function(state, circle) {
    //         circle.path.setAttribute('stroke', state.color);

    //         let value = Math.round(circle.value() * 8142);

    //         circle.setText(value);

    //     }

    // });

    // // Iniciando quando chega no elemento
    // let dataAreaOffset = $('#data-area').offset();
    // let stop = 0;

    // $(window).scroll(function(e) {

    //     let scroll = $(window).scrollTop();

    //     if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
    //         circleA.animate(1.0);
    //         circleB.animate(1.0);
    //         circleC.animate(1.0);
    //         circleD.animate(1.0);

    //         stop = 1;
    //     }
    // })

    // Parallax
    setTimeout(function() {
        // $('#data-area').parallax({imageSrc : '/pics/paralax4.jpeg'})
        $('#apply-area').parallax({imageSrc : '/pics/fundoCircuito5.png'})
    }, 250);

    // Filter of Teams-area
    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id');
        let members = $('.team-box');

        $('.emptyDiv').remove();

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'prog-btn') {
            eachBoxes('prog', members);
        } else if(type == 'lid-btn') {
            eachBoxes('lid', members);
        } else if (type == 'anali-btn') {
            eachBoxes('anali', members)
        } else {
            eachBoxes('all', members)
        }
    });
    
    // Função para o filtro do Teams-area
    function eachBoxes(type, members) {
        if(type == 'all') {
            $(members).fadeIn();
        } else {
            $(members).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');

                } else {
                    $(this).fadeIn();
                }
                // setTimeout(()=> $('#team-area>.container>.row').append('<div class="emptyDiv" style="height: 270px; width: 240px"></div>') , 500);
            });
        }
    }


    // Scroll das seções:
    let navBtn = $('.nav-item');

    let beginSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let projectsSection = $('#services-area');
    let teamsSection = $('#team-area');
    let budgetSection = $('#news-area');
    let contactSection = $('#contact-area');
    let solicitationSection = $('#apply-area');
    
    let scrollTo = '';

    $(navBtn).click(function() {
        let btnId = $(this).attr('id');

        if(btnId == 'home-menu') {
            scrollTo = beginSection;
        } else if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = projectsSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamsSection;
        } else if(btnId == 'news-menu') {
            scrollTo = budgetSection;
        } else if(btnId == 'call-menu') {
            scrollTo = contactSection;
        } else if(btnId == 'solicitation-menu') {
            scrollTo = solicitationSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });

    let otherBtn = $('.other-btn');

    $(otherBtn).click(function() {
        let btnId = $(this).attr('id');

        if(btnId == 'about-carousel') {
            scrollTo = aboutSection;
        } else if(btnId == 'projects-carousel') {
            scrollTo = projectsSection;
        } else if(btnId == 'team-carousel') {
            scrollTo = teamsSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });

});