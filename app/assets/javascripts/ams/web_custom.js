// $(function () {
//     $('.day-name').on('click', function () {
//       var el_clicked = $(this);
//       var el_zIndex = parseInt($(this).closest('.day').css('z-index'));
//       console.log(el_zIndex);
//       var el_dayName = $(this).find('.day-name').text();
//       var uid = el_zIndex + el_dayName;
//       var z_left = [];
//       var z_top = [];
//       console.log(typeof el_zIndex);
//       $(this).closest('.day').siblings().each(function (index) {
//         z_left[index] = $(this).position().left;
//         z_top[index] = $(this).position().top;
//         console.log(z_top[index], z_left[index]);
//       });
//
//       $(this).closest('.day').siblings().each(function (index) {
//         console.log('For Each Loop Begins -->');
//         var text = $(this).find('.day-name').text();
//         // console.log('this text :: ', text);
//         if(el_zIndex !== 6 && parseInt($(this).css('z-index')) > el_zIndex){
//           console.log('Inside higher z-index part :: ', text);
//           $(this).animate({
//             opacity: '0'
//           });
//         }
//
//
//
//         if(el_zIndex !== 6 && parseInt($(this).css('z-index')) - el_zIndex === -1){
//           console.log('Inside curr :: ', text);
//           // $(this).css('z-index','1');
//           $(this).prev().animate({
//             top : z_top[0],
//             left : z_left[0]
//           });
//           $(this).prev().css('z-index', '6');
//         }
//
//
//         if(el_zIndex === 3 && $(this).css('z-index') === "6"){
//           $(this).animate({
//             top : el_clicked.closest('.day').position().top,
//             left : el_clicked.closest('.day').position().left,
//             zIndex : el_zIndex,
//             opacity : 1
//           })
//         }
//
//         if(el_zIndex === 3 && $(this).css('z-index') === "5"){
//           $(this).animate({
//             top : z_top[3],
//             left : z_left[3],
//             zIndex : el_zIndex - 1,
//             opacity : 1
//           })
//         }
//
//         if(el_zIndex === 3 && $(this).css('z-index') === "4"){
//           $(this).animate({
//             top : z_top[4],
//             left : z_left[4],
//             zIndex : el_zIndex - 2,
//             opacity : 1
//           })
//         }
//
//
//         if(el_zIndex === 2 && $(this).css('z-index') === "6"){
//           $(this).animate({
//             top : z_top[2],
//             left : z_left[2],
//             zIndex : 4,
//             opacity : 1
//           })
//         }
//
//         if(el_zIndex === 2 && $(this).css('z-index') === "5"){
//           $(this).animate({
//             top : z_top[3],
//             left : z_left[3],
//             zIndex : 3,
//             opacity : 1
//           })
//         }
//
//         if(el_zIndex === 2 && $(this).css('z-index') === "4"){
//           $(this).animate({
//             top : el_clicked.closest('.day').position().top,
//             left : el_clicked.closest('.day').position().left,
//             zIndex : 2,
//             opacity : 1
//           })
//         }
//
//         if(el_zIndex === 2 && $(this).css('z-index') === "3"){
//           $(this).animate({
//             top : el_clicked.closest('.day').next().position().top,
//             left : el_clicked.closest('.day').next().position().left,
//             zIndex : 1,
//             opacity : 1
//           })
//         }
//
//
//
//         // if(el_zIndex === 1 && $(this).css('z-index') === "6"){
//         //   $(this).animate({
//         //     top : z_top[2],
//         //     left : z_left[2],
//         //     zIndex : 4,
//         //     opacity : 1
//         //   })
//         // }
//         //
//         // if(el_zIndex ===  && $(this).css('z-index') === "5"){
//         //   $(this).animate({
//         //     top : z_top[3],
//         //     left : z_left[3],
//         //     zIndex : 3,
//         //     opacity : 1
//         //   })
//         // }
//         //
//         // if(el_zIndex === 2 && $(this).css('z-index') === "4"){
//         //   $(this).animate({
//         //     top : el_clicked.closest('.day').position().top,
//         //     left : el_clicked.closest('.day').position().left,
//         //     zIndex : 2,
//         //     opacity : 1
//         //   })
//         // }
//         //
//         // if(el_zIndex === 2 && $(this).css('z-index') === "3"){
//         //   $(this).animate({
//         //     top : el_clicked.closest('.day').next().position().top,
//         //     left : el_clicked.closest('.day').next().position().left,
//         //     zIndex : 1,
//         //     opacity : 1
//         //   })
//         // }
//         //
//         // if(el_zIndex === 2 && $(this).css('z-index') === "3"){
//         //   $(this).animate({
//         //     top : el_clicked.closest('.day').next().position().top,
//         //     left : el_clicked.closest('.day').next().position().left,
//         //     zIndex : 1,
//         //     opacity : 1
//         //   })
//         // }
//
//
//         //handling click on element with z-index 1(the element on the last)
//         else if(el_zIndex === 1 && parseInt(el_clicked.closest('.day').prev().css('z-index')) === 2){
//           console.log(el_clicked.closest('.day'));
//           el_clicked.closest('.day').animate({
//             top : z_top[0],
//             left : z_left[0]
//           });
//           $(this).css('z-index', '1')
//         }
//
//
//
//         if(el_zIndex !== 6 && el_zIndex > parseInt($(this).css('z-index'))){
//           console.log('Inside lower z-index part :: ', text);
//           if(el_zIndex === 5 && parseInt($(this).css('z-index')) === 4){
//             console.log(el_clicked.closest('.day'));
//             $(this).animate({
//               top : el_clicked.closest('.day').position().top,
//               left : el_clicked.closest('.day').position().left
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//           else if(el_zIndex === 5 && parseInt($(this).css('z-index')) === 3){
//             console.log(el_clicked.closest('.day'));
//             $(this).animate({
//               top : z_top[el_zIndex - parseInt($(this).css('z-index')) - 1],
//               left : z_left[el_zIndex - parseInt($(this).css('z-index')) - 1]
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//           else if(el_zIndex === 5 && parseInt($(this).css('z-index')) === 2){
//             console.log(el_clicked.closest('.day'));
//             $(this).animate({
//               top : z_top[el_zIndex - parseInt($(this).css('z-index')) - 1],
//               left : z_left[el_zIndex - parseInt($(this).css('z-index')) - 1]
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//           else if(el_zIndex === 5 && parseInt($(this).css('z-index')) === 1){
//             console.log(el_clicked.closest('.day'));
//             $(this).animate({
//               top : z_top[el_zIndex - parseInt($(this).css('z-index')) - 1],
//               left : z_left[el_zIndex - parseInt($(this).css('z-index')) - 1]
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//
//
//           else if(el_zIndex === 4 && parseInt($(this).css('z-index')) === 2){
//             console.log(el_clicked.closest('.day'));
//             $(this).animate({
//               top : el_clicked.closest('.day').position().top,
//               left : el_clicked.closest('.day').position().left
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//           else if(el_zIndex === 4 && parseInt($(this).css('z-index')) === 1){
//             console.log(el_clicked.closest('.day'));
//             $(this).animate({
//               top : z_top[el_zIndex - parseInt($(this).css('z-index')) - 1],
//               left : z_left[el_zIndex - parseInt($(this).css('z-index')) - 1]
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//
//
//
//           else{
//             $(this).animate({
//               // top : z_top[el_zIndex - parseInt($(this).css('z-index'))],
//               // left : z_left[el_zIndex - parseInt($(this).css('z-index'))]
//               top : z_top[el_zIndex - parseInt($(this).css('z-index'))],
//               left : z_left[el_zIndex - parseInt($(this).css('z-index'))]
//             });
//             $(this).css('z-index', ''+ 6 - (el_zIndex - parseInt($(this).css('z-index'))) +'')
//           }
//         }
//       })
//
//    })
// })


/************** footer view change script ************/
$(function () {
  $('.trend-analysis-select').on('click', function () {
    if ($('.trend-analysis-container').hasClass('d-none')) {
      $('.schedule-container').addClass('d-none');
      $('.comparison').addClass('d-none');
      $('.events').addClass('d-none');
      $('.trend-analysis-container').removeClass('d-none');
      $('.news-social').addClass('d-none');
      $('.select-footer .trend-analysis-select i, .select-footer .trend-analysis-select span').css({
        'color': '#222'
      });
      $('.select-footer .schedule-select i, .select-footer .schedule-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .comparison-select i, .select-footer .comparison-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .events-select i, .select-footer .events-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .news-select i, .select-footer .news-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
    }
  });

  $('.schedule-select').on('click', function () {
    if ($('.schedule-container').hasClass('d-none')) {
      $('.schedule-container').removeClass('d-none');
      $('.trend-analysis-container').addClass('d-none');
      $('.comparison').addClass('d-none');
      $('.events').addClass('d-none');
      $('.news-social').addClass('d-none');
      $('.select-footer .schedule-select i, .select-footer .schedule-select span').css({
        'color': '#222'
      });
      $('.select-footer .trend-analysis-select i, .select-footer .trend-analysis-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .comparison-select i, .select-footer .comparison-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .events-select i, .select-footer .events-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .news-select i, .select-footer .news-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      var day_nav = $('.mon.col-2').width();
      $('.schedule-container .overlay-indicator').width(day_nav + 27);
    }
  });

  $('.comparison-select').on('click', function () {
    if ($('.comparison').hasClass('d-none')) {
      $('.comparison').removeClass('d-none');
      $('.trend-analysis-container').addClass('d-none');
      $('.schedule-container').addClass('d-none');
      $('.events').addClass('d-none');
      $('.news-social').addClass('d-none');
      $('.select-footer .comparison-select i, .select-footer .comparison-select span').css({
        'color': '#222'
      });
      $('.select-footer .trend-analysis-select i, .select-footer .trend-analysis-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .schedule-select i, .select-footer .schedule-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .events-select i, .select-footer .events-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .news-select i, .select-footer .news-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
    }
  });

  $('.events-select').on('click', function () {
    if ($('.events').hasClass('d-none')) {
      $('.events').removeClass('d-none');
      $('.trend-analysis-container').addClass('d-none');
      $('.schedule-container').addClass('d-none');
      $('.comparison').addClass('d-none');
      $('.news-social').addClass('d-none');
      $('.select-footer .events-select i, .select-footer .events-select span').css({
        'color': '#222'
      });
      $('.select-footer .trend-analysis-select i, .select-footer .trend-analysis-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .schedule-select i, .select-footer .schedule-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .comparison-select i, .select-footer .comparison-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .news-select i, .select-footer .news-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      var events_nav = $('.upcoming.col-6').width();
      $('.overlay-indicator').width(events_nav + 27);
    }
  });

  $('.news-select').on('click', function () {
    if ($('.news-social').hasClass('d-none')) {
      $('.news-social').removeClass('d-none');
      $('.trend-analysis-container').addClass('d-none');
      $('.schedule-container').addClass('d-none');
      $('.comparison').addClass('d-none');
      $('.events').addClass('d-none');
      $('.select-footer .news-select i, .select-footer .news-select span').css({
        'color': '#222'
      });
      $('.select-footer .trend-analysis-select i, .select-footer .trend-analysis-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .schedule-select i, .select-footer .schedule-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .comparison-select i, .select-footer .comparison-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      $('.select-footer .events-select i, .select-footer .events-select span').css({
        'color': 'rgba(0, 0, 0, 0.54)'
      });
      var news_nav = $('.news-show.col-6').width();
      $('.overlay-indicator').width(news_nav + 27);
    }
  });

});

/************** footer view change script ************/
// $(function () {
//   $('.trend-analysis-select').on('click', function () {
//     if ($('.trend-analysis-container').hasClass('d-none')) {
//       $('.schedule-container').addClass('d-none');
//       $('.trend-analysis-container').removeClass('d-none');
//
//     }
//     else {
//     }
//   });
//
//   $('.schedule-select').on('click', function () {
//     if ($('.schedule-container').hasClass('d-none')) {
//       $('.schedule-container').removeClass('d-none');
//       $('.trend-analysis-container').addClass('d-none');
//       var day_nav = $('.mon').width();
//       $('.overlay-indicator').width(day_nav);
//     }
//   })
// });

/************* trend analysis dropdown change script ***********/
{
  $(document).on('change', 'select.analysis-dropdown', function () {
    var self = $(this);
    if (self.val() == 'physical') {
      self.closest('div.main-container').find('.graph-container').find('#fitness_graph').removeClass('d-none');
      self.closest('div.main-container').find('.graph-container').find('#nutrition_graph').addClass('d-none');
      self.closest('div.main-container').find('.graph-container').find('#mental_graph').addClass('d-none');
    }
    if (self.val() == 'mental') {
      self.closest('div.main-container').find('.graph-container').find('#fitness_graph').addClass('d-none');
      self.closest('div.main-container').find('.graph-container').find('#nutrition_graph').addClass('d-none');
      self.closest('div.main-container').find('.graph-container').find('#mental_graph').removeClass('d-none');
    }
    if (self.val() == 'nutrition') {
      self.closest('div.main-container').find('.graph-container').find('#fitness_graph').addClass('d-none');
      self.closest('div.main-container').find('.graph-container').find('#nutrition_graph').removeClass('d-none');
      self.closest('div.main-container').find('.graph-container').find('#mental_graph').addClass('d-none');
    }
  });
}

/************* comparison analysis dropdown change script ***********/
{
  $(document).on('change', 'select.analysis-dropdown.comparison_analysis', function () {
    var self = $(this);
    var attribute_dropdown = self.closest('div.comparison-analysis').find('select.analysis-dropdown.attribute_select');
    if (self.val() == 'physical') {
      self.closest('div.comparison').find('div.comparison-graph-container').find('#physical_comparison_graph').removeClass('d-none');
      self.closest('div.comparison').find('div.comparison-graph-container').find('#tennis_comparison_graph').addClass('d-none');
    }
    if (self.val() == 'tennis') {
      self.closest('div.comparison').find('div.comparison-graph-container').find('#physical_comparison_graph').addClass('d-none');
      self.closest('div.comparison').find('div.comparison-graph-container').find('#tennis_comparison_graph').removeClass('d-none');
    }
  });
}


/*------------- Switch Days Schedule script ---------------*/

$(function () {

  if ($(window).width() <= 767) {
    var tab_height = $('#tab-1').height();
    $('.tab-content.user-tab-mobile').height(600);
  }

  if ($(window).width() > 767) {
    var graph_width = $('#fitness_graph').width();
    $('#mental_graph, #nutrition_graph, #tennis_comparison_graph').width(graph_width);
  }

  function get_curr_visible_day(curr) {
    var window_width = $(window).width();
    $('.tab-content').find('.today').each(function () {
      if ($(this).offset().left === 0) {
        $(this).animate({
          'left': window_width
        });
      }
    });

    $('.week-days li a').each(function () {
      if ($(this).text() !== curr.text() && $(this).css('font-weight') === "bold") {
        console.log(curr.text());
        $(this).css({
          'font-weight': 'unset'
        });
      }
    })
  }

  $('.mon').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-mon').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-mon').animate({
        'left': 0
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      $('.schedule-container .overlay-indicator').animate({
        left: 3
      });
      get_curr_visible_day($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  $('.tue').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-tue').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-tue').animate({
        'left': 0
      });
      $('.schedule-container .overlay-indicator').animate({
        left: $('.mon.col-2').width() + 30
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_day($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  $('.wed').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-wed').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-wed').animate({
        'left': 0
      });
      $('.schedule-container .overlay-indicator').animate({
        left: 2 * ($('.mon.col-2').width() + 30)
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_day($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  $('.thu').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-thu').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-thu').animate({
        'left': 0
      });
      $('.schedule-container .overlay-indicator').animate({
        left: 3 * ($('.mon.col-2').width() + 30)
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_day($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  $('.fri').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-fri').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-fri').animate({
        'left': 0
      });
      $('.schedule-container .overlay-indicator').animate({
        left: 4 * ($('.mon.col-2').width() + 30)
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_day($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  $('.sat').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);

    if ($('#tab-sat').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-sat').animate({
        'left': 0
      });
      $('.schedule-container .overlay-indicator').animate({
        left: 5 * ($('.mon.col-2').width() + 30)
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_day($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  })
});

/*********************** Switch Upcoming/Past Script ********************/

$(function () {
  function get_curr_visible_event(curr) {
    var window_width = $(window).width();
    $('.tab-content').find('.event-tab').each(function () {
      if ($(this).offset().left === 0) {
        $(this).animate({
          'left': window_width
        });
      }
    });

    $('.event-nav li a').each(function () {
      if ($(this).text() !== curr.text() && $(this).css('font-weight') === "bold") {
        console.log(curr.text());
        $(this).css({
          'font-weight': 'unset'
        });
      }
    })
  }

  $('.upcoming').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-upcoming').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-upcoming').animate({
        'left': 0
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      $('.events .overlay-indicator').animate({
        left: 3
      });
      get_curr_visible_event($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });


  $('.past').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-past').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      // $('html, body').css({'overflow':'hidden'});
      $('#tab-past').animate({
        'left': 0
      });
      $('.events .overlay-indicator').animate({
        left: $('.upcoming.col-6').width() + 30
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_event($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  /*********************** Switch News/Tweets Script ********************/


  function get_curr_visible_panel(curr) {
    var window_width = $(window).width();
    $('.tab-content').find('.news-tweets-tab').each(function () {
      if ($(this).offset().left === 0) {
        $(this).animate({
          'left': window_width
        });
      }
    });

    $('.news-tweets-nav li a').each(function () {
      if ($(this).text() !== curr.text() && $(this).css('font-weight') === "bold") {
        console.log(curr.text());
        $(this).css({
          'font-weight': 'unset'
        });
      }
    })
  }

  $('.news-show').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-news').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      $('#tab-news').animate({
        'left': 0
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      $('.news-social .overlay-indicator').animate({
        left: 3
      });
      get_curr_visible_panel($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

  $('.tweets-show').on('click', function () {
    var window_width = $(window).width();
    var self = $(this);
    if ($('#tab-tweets').offset().left === window_width) {
      $(this).siblings().each(function () {
        $(this).css('pointer-events', 'none');
      });
      $('#tab-tweets').animate({
        'left': 0
      });
      $('.news-social .overlay-indicator').animate({
        left: $('.tweets-show.col-6').width() + 30
      });
      $(this).find('a').css({
        'font-weight': 'bold'
      });
      get_curr_visible_panel($(this).find('a'));
      setTimeout(function () {
        self.siblings().each(function () {
          $(this).css('pointer-events', 'unset');
        });
      }, 400);
    }
  });

});

/******** login form radio button script ******/
{
  $(document).on('click', '.login_form_radio', function () {
    var self = $(this);
    var form = self.closest('form');
    form.find('input[type="radio"]').prop('checked', false);
    self.prop('checked', true);
  });
}





