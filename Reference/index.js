$(function() {
  var timer;
  $('.comic-pop-out-right').hover(
    function() {
      timer = setTimeout(function() {
        $('.comic-pop-out-right')
          .stop(true, true)
          .animate(
            {
              right: '5vw'
            },
            1000,
            function() {}
          );
        $('.comic-pop-out-right')
          .find('.hover-show')
          .stop(true, true)
          .animate(
            {
              opacity: '1'
            },
            1000,
            function() {}
          );
      }, 150);
    },
    function() {
      clearTimeout(timer);
      $('.comic-pop-out-right')
        .stop(true, true)
        .animate(
          {
            right: '-1vw'
          },
          1000,
          function() {}
        );
      $('.comic-pop-out-right')
        .find('.hover-show')
        .stop(true, true)
        .animate(
          {
            opacity: '0'
          },
          1000,
          function() {}
        );
    }
  );

  // $('.comic-pop-out-left').hover(
  //   function() {
  //     timer = setTimeout(function() {
  //       $('.bottom-left')
  //         .stop(true, true)
  //         .animate(
  //           {
  //             left: '1em'
  //           },
  //           1000,
  //           function() {}
  //         );
  //       $('.comic-pop-out-left')
  //         .find('.hover-show')
  //         .stop(true, true)
  //         .animate(
  //           {
  //             opacity: '1'
  //           },
  //           1000,
  //           function() {}
  //         );
  //     }, 150);
  //   },
  //   function() {
  //     clearTimeout(timer);
  //
  //     $('.bottom-left')
  //       .stop(true, true)
  //       .animate(
  //         {
  //           left: '-6em'
  //         },
  //         1000,
  //         function() {}
  //       );
  //     $('.comic-pop-out-left')
  //       .find('.hover-show')
  //       .stop(true, true)
  //       .animate(
  //         {
  //           opacity: '0'
  //         },
  //         1000,
  //         function() {}
  //       );
  //   }
  // );
});
