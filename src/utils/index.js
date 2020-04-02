import queryString from 'query-string'
let rootUrl='https://www.fastmock.site/mock/d14731394cbf484fa9496b97b4ed2c35/api'

let myFetch={
    get(url,queryParams){
        url=rootUrl+url;
        if(queryParams){
            url+="?"+queryString.stringify(queryParams)
        }
        return fetch(url)
                .then(res=>res.json())
    },
    post(url,body){
       return fetch(rootUrl+url,{
                method:'POST',
                headers:{
                "Accept":'application/json',
                "content-type":'application/json'
                },      
                body:JSON.stringify(body)
             })
            .then(res=>res.json())
    }
}

export {myFetch};