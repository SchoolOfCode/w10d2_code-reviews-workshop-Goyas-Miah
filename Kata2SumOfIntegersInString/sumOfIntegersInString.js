function sumOfIntegersInString(str) {
  // Code here
  const str = 'gdf5jhhj3hbj4hbj3jbb4bbjj3jb5bjjb5bj3';
  const sumStringNum = str => {
     const strArr = str.split("");
     let res = 0;
     for(let i = 0; i < strArr.length; i++){
        if(+strArr[i]){
           res += +strArr[i];
        };
     };
     return res;
  };

export default sumOfIntegersInString;
