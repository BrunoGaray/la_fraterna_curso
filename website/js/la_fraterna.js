var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
  }
};


$(document).ready(function(){

  var form = getUrlParameter('form');

  if (form == 'confirmed') {
    $('#div-consulta').removeClass('d-none');
  }
});

ScrollReveal().reveal('.headline', { delay: 600 });
ScrollReveal().reveal('.headline2', { delay: 700 });
