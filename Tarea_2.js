/*******************************************************/
var BeerSong =  function () {

  return {
    showSong: function(qtyBeers){

      if (typeof qtyBeers != 'number'){
        throw new Error('Debe ingresar un numero');
      };
      if (qtyBeers<=0) {
        throw new Error('Ingrese una cantidad mayor a cero(0)');
      }
      //song begins
      var entireSong='',
          originstr='';
      var qtyBeersSource=qtyBeers;

      do {
        if (qtyBeers>1) {
            originstr= ' bottles';
          } else {
            originstr= ' bottle';
          };

        entireSong += qtyBeers + originstr + ' of beer on the wall,'+qtyBeers + originstr+ ' of beer.'+'\n'+
                      'Take one down, pass it around,'
        switch (qtyBeers-1) {
          case 0:
            entireSong +='no more bottles of beer on the wall.';
            break;
          default:
            entireSong +=qtyBeers-1 +' ' + originstr + ' of beer on the wall.';
          };
        entireSong+='\n\n'

        qtyBeers-=1;
      } while (qtyBeers>0);


      if (qtyBeersSource>1) {
          originstr= ' bottles';
        } else {
          originstr= ' bottle';
        };
      entireSong+='No more bottles of beer on the wall, no more bottles of beer.'+ '\n'+
                  'Go to the store and buy some more,'+ qtyBeersSource + ' '+ originstr + ' of beer on the wall.';
      return entireSong;
    }
  };
};

//var song= new BeerSong();
//song.showSong(10);

/*******************************************************/


var Areas= function (){
  return {
    square: function (side1,side2){
      return side1*side2;
    },
    triangle: function (base, height){
      return (base*height)/2;
    },
    circle: function (radius) {
      return Math.PI*Math.pow(radius,2);
    }
  };
};
/*
var calculate = new Areas();
calculate.square(4,4); // 16
calculate.circle(5); // 78.53
calculate.triangle(4,4); // 8
*/