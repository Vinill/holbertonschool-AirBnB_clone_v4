$(document).ready(function() {
  $('class:amenity').change(
    function(){
      if ($(this:li:checkbox).is(':checked')) {
        alert('checked');
      }
    }
});
