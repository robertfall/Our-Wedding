window.WeddingController = {
  hideCurrentPage: function(event) {
    $('.page').removeClass('visible');
  },
  showPage: function(pageName) {
    $('.page').removeClass('visible');
    $('#main-bar-container').hide('fade',200);
    WeddingController.$currentPage = $(pageName);
    WeddingController.$currentPage.addClass('visible');
  },
  clickLink: function(e) {
    e.stopPropagation();
    WeddingController.removeNavHilighting();
    $(this).addClass('current');
    WeddingController.hideCurrentPage();
    var pageName = $(this).data('page');
    WeddingController.showPage(pageName);
  },
  removeNavHilighting: function() {
    $(".current").removeClass('current');
  },
  home: function() {
    WeddingController.hideCurrentPage();
    WeddingController.removeNavHilighting();
    $('#main-bar-container').show('fade',200);
  },
  initialise: function() {
    $('.page a').click(function (ev) {
        ev.stopPropagation();
    });
    $('.page, body').click(WeddingController.home);
    $('#nav').on('click', 'a', WeddingController.clickLink);
  }
}

$(function() {
  WeddingController.initialise();
});
