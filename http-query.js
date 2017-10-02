
//generate http query from object
function objToQuery(obj)
{
    let str = []
    for(let p in obj)
    {
      if(obj.hasOwnProperty(p)) str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
    return str.join('&')
}

// generate object from http query
function queryToObj(str)
{
    let obj = {}
    str.split('&').map(n => { 
      n = n.split('=')
      obj[n[0]] = n[1]
    }) 
    return obj
}

// sample data
const query = 'name=riva&sex=female&city=boyolali';
const obj = {
    name: 'riva',
    sex: 'female',
    city: 'boyolali'
}

console.log('query : ', objToQuery(obj));
console.log('object : ', queryToObj(query));