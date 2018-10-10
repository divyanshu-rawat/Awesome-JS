function updateRecords(id, prop, value) {
  
      var target = collection[id];
  
  // if any prop value is empty delete that property
  
      if(value === "") {
          delete target[prop];
          return collection;
      }
  
  // if prop doesn't equal tracks and value isn't empty
  
      if(prop !== 'tracks' && value !== ''){
          target[prop] = value;
          return collection;
      }
  
  // if prop is tracks
  
      if(prop === 'tracks'){
  
      // no current tracks property
          if(!target.hasOwnProperty(prop)){
              target[prop]= [value];
              return collection;
          }
  
      // tracks property array is not empty
          if(value !== '') {
              console.log(target[prop]);
              target[prop].push(value);
              return collection;
          }
  
      }
  
  }
  
  // Alter values below to test your code
  // console.log(updateRecords(5439, "artist", "ABBA")); // pass
  // console.log(updateRecords(5439, "tracks", "Take a Chance on Me")); // pass
  // console.log(updateRecords(1245, "tracks", "Addicted to Love")); // pass
  // console.log(updateRecords(2548, "artist", "")); // pass
  // console.log(updateRecords(2548, "tracks", "")); // pass