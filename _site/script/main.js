window.WeddingController = {
  hideCurrentPage: function(event) {
    if(WeddingController.$currentPage) {
      WeddingController.$currentPage.hide('drop', { direction: 'right'}, 200);
      WeddingController.$currentPage = undefined;
    }
  },
  showPage: function(pageName) {
    $('#main-bar-container').hide('fade',200);
    WeddingController.$currentPage = $(pageName);
    WeddingController.$currentPage.toggle('drop', { direction: 'right'}, 200);
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
    $('#nav').on('click', 'a', WeddingController.clickLink);
    $('body').click(WeddingController.home);
  }
}

$(function() {
  WeddingController.initialise();
});
