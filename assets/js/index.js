if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add("dark");
}
jQuery(document).ready(function($) {

  $('.skillbar').each(function() {
    $(this).find('.skillbar-bar').width(0);
  });

  $('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
  });
});
