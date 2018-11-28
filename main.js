// ￼Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti


var greenElement = $('.quadrato');

greenElement.click(function(){
  $(this).css('background-color','green');
});

var redElement = $('.rosso');

redElement.click(function(){
  $(this).css('background-color','red');

});

var punteggio = 0;
var count = 0;
greenElement.click(function() {
  punteggio++;
  $("#contatore_verde").html("Hai cliccato " + punteggio + ' quadrati verdi');
});

redElement.click(function() {
  count++;
  $("#contatore_rosso").html("Hai cliccato " + count + ' quadrati rossi');
});
