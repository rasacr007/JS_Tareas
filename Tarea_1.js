
 
/*******************************************************/

var Year= function (year)
{
return {

    isleap : function (){
      if (year%4==0 && year%100!=0){
          return true
      } else {
        if (year%4==0 && year%100==0 && year%400 ==0){
          return true;
        } else {
            return false;
        }
      }
    }
  };
}

 //var year= new Year(2016);
 //year.isleap();
 
 
/*******************************************************/
var Words  = function (){
  return  {
    count: function(word){
      var ocurrs=0;
      var strlen =0;
      var currentpos =0;
 
      strlen = word.length;
 
      if (strlen==0) {
             return 0; //No length
      } else {
        strlen-=1;
        word= word.trim();
        while (currentpos <= strlen ) {
          while (word.charAt(currentpos) !=  " "  && currentpos <= strlen){
               currentpos +=1;
          }
          ocurrs+=1;
          while (word.charAt(currentpos) ==  " " && currentpos <= strlen){
                 currentpos +=1;
          }
 
        }
        return ocurrs;
      }
    }
  };
}
 
 
/*******************************************************/
var hamming  = function (){
  return  {
    compute: function(word1,word2){
      var ocurrs=0;
      var strlen =0;
 
      strlen = word1.length;
 
      if (word2.length != strlen) {
             return -1; //Different length
      } else {
        strlen-=1;
        while (strlen >= 0) {
            while (word1.charAt(strlen) ==  word2.charAt(strlen) && strlen >=0){
                 strlen -=1;
            }
            while (word1.charAt(strlen) !=  word2.charAt(strlen) && strlen >=0){
                 strlen -=1;
                ocurrs+=1;
            }
        }
        return ocurrs;
      }
    }
  };
}
 
//var  result = new hamming("casa","casa");
//result.compute("casa","saca")
 