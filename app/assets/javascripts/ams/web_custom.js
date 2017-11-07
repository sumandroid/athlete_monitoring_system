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
    if($('.trend-analysis-container').hasClass('d-none')){
      $('.schedule-container').addClass('d-none');
      $('.trend-analysis-container').removeClass('d-none');
    }
    else{
    }
  });

  $('.schedule-select').on('click', function () {
    if($('.schedule-container').hasClass('d-none')){
      $('.schedule-container').removeClass('d-none');
      $('.trend-analysis-container').addClass('d-none');
    }
  })
});

/************* trend analysis dropdown change script ***********/
{
  $(document).on('change', 'select.analysis-dropdown', function () {
    var self = $(this);
    if(self.val() == 'physical'){
      self.closest('div.col-sm-6').find('.graph-container').find('#fitness_graph').removeClass('d-none');
      self.closest('div.col-sm-6').find('.graph-container').find('#nutrition_graph').addClass('d-none');
      self.closest('div.col-sm-6').find('.graph-container').find('#mental_graph').addClass('d-none');
    }
    if(self.val() == 'mental'){
      self.closest('div.col-sm-6').find('.graph-container').find('#fitness_graph').addClass('d-none');
      self.closest('div.col-sm-6').find('.graph-container').find('#nutrition_graph').addClass('d-none');
      self.closest('div.col-sm-6').find('.graph-container').find('#mental_graph').removeClass('d-none');
    }
    if(self.val() == 'nutrition'){
      self.closest('div.col-sm-6').find('.graph-container').find('#fitness_graph').addClass('d-none');
      self.closest('div.col-sm-6').find('.graph-container').find('#nutrition_graph').removeClass('d-none');
      self.closest('div.col-sm-6').find('.graph-container').find('#mental_graph').addClass('d-none');
    }
  });
}
