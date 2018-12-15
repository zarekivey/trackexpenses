// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             name: 'Zarek',
//             age: 19
//         });
//         // reject('something went wrong')
//     }, 5000)  
// });

// console.log('before')

// promise.then((data) => { 
//     console.log('1', data);

//     // you can return another promise, this will be the success case
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('another promise')
//             // reject('something went wrong')
//         }, 5000)  
//     });
// }).then(() => {
//     console.log('run')
// }).catch((error) => {
//     console.log('error: ', error) 
// });

// console.log('after') 