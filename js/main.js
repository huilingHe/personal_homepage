
// $(function(){
//   $('#right-roll').fullpage({
//     slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
//     anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
//     menu: '#menu'
//   });
// });
window.onload = function () {
  $(document).ready(function () {
    $('#right-roll').fullpage({
      slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
      anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
      menu: '#menu',
      continuousVertical: true,
      afterLoad: function (anchorLink, index) {
        if (index == 3) {
          $('.professional-skills').find('h2').delay(300).animate({
            right: '0'
          }, 800, 'easeOutExpo');
          $('.professional-skills').find('.skills-list').delay(300).animate({
            left: '0'
          }, 800, 'easeOutExpo');
        }
        if (index == 4) {
          $('.work-experience').find('h2').delay(300).animate({
            left: '0'
          }, 800, 'easeOutExpo');
        }
      },
      onLeave: function (index, direction) {
        if (index == '3') {
          $('.professional-skills').find('h2').delay(300).animate({
            right: '-300%'
          }, 800, 'easeOutExpo');
          $('.professional-skills').find('.skills-list').delay(300).animate({
            left: '-260%'
          }, 800, 'easeOutExpo');
        }
        if (index == '4') {
          $('.work-experience').find('h2').delay(300).animate({
            left: '-380%'
          }, 800, 'easeOutExpo');
        }
      }
    });
  });
}