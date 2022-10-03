//github worked? --no!
function bottleSong() {
  // Write your code here!
  let bottlesStr = 'bottles';

  let x =0;
  let y =0;
  let startBottleCount = 3;
  let CurrentBottleCountStrt = startBottleCount;
  let CurrentBottleCountEnd = startBottleCount -1;
  
  let repeatPhrase1 = 'of beer on the wall';
  let repeatPhrase2 = 'Take one down and pass it around';
  
  
  let endSongVerse = repeatPhrase2 +', no more bottles ' + repeatPhrase1 +'. No more bottles '+repeatPhrase1+ ', no more bottles of beer. Go to the store and buy some more, 99 bottles ' + repeatPhrase1 +'.';
  /* doesnt dynamically change the values with verse
  let mainSongVerse = CurrentBottleCount +' '+bottlesStr +' ' + repeatPhrase1+ ', ' + CurrentBottleCount + ' '+bottlesStr+' of beer. ' + repeatPhrase2+ ', '+ CurrentBottleCount +' ' + bottlesStr + ' ' +repeatPhrase1 + '.';
  */
  
  do {
      // dynamically works, what is suppose to change in each loop does
      
      let mainSongVerse = CurrentBottleCountStrt +' '+bottlesStr +' ' + repeatPhrase1+ ', ' + CurrentBottleCountStrt + ' '+bottlesStr+' of beer. ' + repeatPhrase2+ ', '+ CurrentBottleCountEnd +' ' + bottlesStr + ' ' +repeatPhrase1 + '.';
      console.log(mainSongVerse);
      CurrentBottleCountStrt --;
      CurrentBottleCountEnd = CurrentBottleCountStrt -1;
      //console.log(CurrentBottleCount); //used this to check to see why the mainVerse variable wasn't working as intented
      if (CurrentBottleCountEnd == 1){
          bottlesStr = 'bottle';
      }
  }
  while(CurrentBottleCountEnd>0)
  
    if (CurrentBottleCountEnd == 0){
      console.log(endSongVerse);
    }
  
  };
    
  bottleSong();