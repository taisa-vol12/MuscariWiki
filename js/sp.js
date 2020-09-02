$('.slider').slick({
    autoplay:true,
    dots:true,
});

$(document).ready( function () {
    $('#myTable').DataTable({
      lengthChange: false,
      info: false,
      paging: false,
      scrollY: true
    });
} );