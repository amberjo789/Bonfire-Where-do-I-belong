function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort(compareNumbers);
  var place;
  for(var i=0;i<arr.length;i++){
    if(arr[i]>=num){
      place = i;
      break;
    }
    else{
      place = arr.length;
    }
  }
  return place;
}