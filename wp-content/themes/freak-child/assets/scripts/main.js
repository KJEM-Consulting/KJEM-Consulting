(function ($) {
  $(document).ready(function () {
    // Announcement banner stuff
    var banner = $('.banner');
    var headerTitle = $('#masthead.header-medium .site-branding');
    var adminBar = $('#wpadminbar');
    var extraHeight = (adminBar.length) ? + adminBar.height() + banner.height() : banner.height();

    // Move the header text down, consequently
    // pushing the rest of the content down
    headerTitle.css({
      'padding-top': parseInt(headerTitle.css('padding-top')) + extraHeight
    });

    banner.css({
      'top': adminBar.height()
    });
  });
})(jQuery);

/**
 * Google Analytics
 */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-61918329-2', 'auto');
ga('send', 'pageview');
