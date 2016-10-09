function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error('Network error'));
    };

    req.send();
  });
}


// 1. using promise
get(url).then(function(response) {
  // success
}, function(err) {
  // error
});




// 2. to make things more readable, we make use of .catch() method
get(url).then(function(response) {
  // success
}).catch(function(err) {
  // error
});
/*
            -------------------------------
           |                              |
     initial task                   success task                     failure task
           |                                                               |
           -----------------------------------------------------------------
*/




// 3. chaining
get(url).then(function(response) {
  response = JSON.parse(response);
  var secondURL = response.data.url;
  return get(secondURL); // return another promise
}).then(function(response) {
  response = JSON.parse(response);
  var thirdURL = response.data.url;
  return get(thirdURL);
}).catch(function(err) {
  handleError(err);
});
/*
            ------------------------------------------------------------
           |                              |                             |
     initial task                   success task                 success task                     failure task
           |                               |                            |                                 |
           ---------------------------------------------------------------------------------------------
*/



// 4. executing promises in parallel
var arrayOfURLs = ['one.url', 'two.url', 'three.url', 'four.url'];
var arrOfPromises = arrayOfURLs.map(get);

Promise.all(arrOfPromises)
        .then(function(arrayOfResults) {
          // do something when all promises are resolved
        })
        .catch(function(err) {
          // handle error
        });

/*
          task 1 -----------------------------------------
                                                          |
          task 2 ------------------------------------- success task
                                                          |
          task 3 -----------------------------------------
*/





// 5. pass a value to next step
get(url).then(function(response) {
  response = JSON.parse(response);
  const secondURL = response.data.url;
  return Promise.resolve(secondURL);
}).then(function(secondURL) {
  return get(secondURL);
}).then(function(response) {
  // ...
}).catch(function(err) {
  // handle err
});






// promise reject
get(url)  
.then((response) => {
    if ( response.data.length < 10 /* Can be any manual check */ ) {
      return Promise.reject(new Error('Not enough data to continue'));
    }

    response = JSON.parse(response);
    const secondURL = response.data.url
    return get( secondURL );
})
.then((response) => {
    response = JSON.parse(response);
    const thirdURL = response.data.url
    return get( thirdURL ); 
})
.catch((err) => handleError(err) );







// promise race
const promise1 = new Promise(function(resolve, reject) {  
  setTimeout(resolve, 500, 'foo');
}); 
const promise2 = new Promise(function(resolve, reject) {  
  setTimeout(resolve, 100, 'bar');
}); 
const promise3 = new Promise(function(resolve, reject) {  
  setTimeout(resolve, 900, 'baz');
}); 

Promise.race([promise1, promise2, promise3]).then((response) => {  
  console.log(response);
  // bar
});
