angular.module('app', [])
/**
 * @requires zepto
 */
.directive('commonToTop', function() {

  var _directive =  {
    restrict : 'A',
    scope    : true,
    link     : _link
  };

  function _link(scope, element, attrs) {
    element.on('click', function() {
      scroll();
    });

    function scroll() {
      //第一引数にスクロールする位置  第二引数は速度
      $('body').scrollTo(0, 400);
    }

    // zeptoへの拡張(๑•̀ㅂ•́)و✧
    $.fn.scrollTo = function(scrollHeight ,duration) {
      var $el = this;
      var el  = $el[0];
      var startPosition = el.scrollTop || document.documentElement.scrollTop;
      var delta = scrollHeight - startPosition;

      var startTime = Date.now();

      function scroll() {
        var fraction = Math.min(1, (Date.now() - startTime) / duration);

        el.scrollTop = delta * fraction + startPosition;
        // IE対策_:(´ཀ`」 ∠):_
        if(!el.scrollTop) {
          document.documentElement.scrollTop = delta * fraction + startPosition;
        }

        if(fraction < 1) {
          setTimeout(scroll, 10);
        }
      }
      scroll();
    };


  }
  return _directive;
});
