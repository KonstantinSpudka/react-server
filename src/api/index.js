import axios from "axios";

// 1. 'https://ullhgy.sse.codesandbox.io/'
// 2. get 'https://ullhgy.sse.codesandbox.io/contacts'
//    post 'https://ullhgy.sse.codesandbox.io/contacts' {}
//    patch 'https://ullhgy.sse.codesandbox.io/contacts/10' {}
//    delete 'https://ullhgy.sse.codesandbox.io/contacts/20'


const httpClient = axios.create({
  baseURL: 'https://ullhgy.sse.codesandbox.io/'
})

httpClient
.get('/contacts')
.then(data=>console.log('data', data.data))
.catch(e=>console.log('e', e))

httpClient
.post('/contacts', {name:'Test00777'})
.then(data=>console.log('data', data.data))
.catch(e=>console.log('e', e))

httpClient
.patch('/contacts/45e2e6c3-5524-4f39-9211-3bf482b29c02', {name: 'NewNAME'})
.then(data=>console.log('data', data.data))
.catch(e=>console.log('e', e))

httpClient
.delete('/contacts/3070ac53-57a9-4a05-81bf-ac3601bb470d')
.then(data=>console.log('data', data.data))
.catch(e=>console.log('e', e))