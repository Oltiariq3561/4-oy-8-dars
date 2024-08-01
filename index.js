// let arr = [1,1,2,2,3,3,4,4,5,5,6,6];
// function test(arr) {
//     let res = [];
//     for (const iterator of arr) {
//         if (!res.includes(iterator)) {
//             res.push(iterator)
//         }
//     }
//     return res;
// }
// let res = test(arr);
// console.log(res);

// let arr = [1,2,3,4,5];
// let res = arr.map(function (value , index) {
//     return value * 2;
// })
// console.log(res);

// UYGA VAZIFA
// 1. **Massivdagi eng uzun so'zni topadigan funksiya yozing.**
// let arr = ['salom', 'alikkkk'];
// function test(arg) {
//     let max = arg[0];
//     for (const iterator of arg) {
//        if (iterator.length > max.length) {
//         max = iterator
//        } 
//     }
//     return max;
// }
// let res = test(arr);
// console.log(res);

// 2. **Massivdagi stringlarni birlashtirib bitta matn qiladigan funksiya yozing.**
// let arr = ['salom','alikkkk'];
// function test(arg) {
//     return arg.join(' ')
// }
// let res = test(arr);
// console.log(res);


// 3. **Massivdagi barcha elementlarni katta harflarga o'zgartiradigan funksiya yozing.**
// let arr = ['salom','alik','nmagap'];
// function test(arg) {
//     let res = [];
//     for (const iterator of arg) {
//        res.push(iterator.toUpperCase())
//     }
//     return res;
// }
// let res = test(arr);
// console.log(res);

// 4. **Massivdagi elementlarni ko'paytmasini hisoblaydigan funksiya yozing.**
// let arr = [1,2,3,4,5,6,7];
// function test(arg) {
//     let res = 1 ;
//     for(const i of arg) {
//         res*=i
//     };
//     return res
// }
// let res = test(arr);
// console.log(res);

// 5. **Massivdagi elementlarni o'zgartirmasdan ularni saralaydigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = arg.filter(function (v,i) {
//         return v
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// 6. **Massivdagi elementlarni teskariga aylantirib yangi massiv yaratadigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = [];
//     for (let i = arg.length -1; i >= 0; i--) {
//         res.push(arg[i]);
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// 7. **Massivdagi har bir elementning indeksini qaytaruvchi yangi massiv yaratadigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = [];
//     for (let i = 0; i < arg.length; i++) {
//         res.push(i);
//     }
//     return res
// }
// let res = test(arr);
// console.log(res);

// 8. **Berilgan sonning massivdagi indeksini topadigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// let son = 2;
// function test(arg,son) {
//     return arg.indexOf(son)
// }
// let res = test(arr,son);
// console.log(res);

// 9. **Massivdagi har bir elementga qiymat qo'shib yangi massiv yaratadigan funksiya yozing.**
// let arr = [1,2,3,4,5];
// function test(arg) {
//     let res = arg.map(function (v,i) {
//         return v+5
//     })
//     return res
// }
// let res = test(arr);
// console.log(res);

// 10. **Massivdagi qiymatlarni ikki massivga bo'lib chiqadigan: musbat va manfiy qilib ajratadigan funksiya yozing.**
// let arr = [1, -2, 3, -4, 0];
// function test(arg) {
//     let musbat = [];
//     let manfiy = [];
//     let nitral = [];
//     let res = []
//     for (const i of arg) {
//         if (i > 0) {
//             musbat.push(i);
//         } else if (i < 0) {
//             manfiy.push(i);
//         } else {
//             nitral.push(i)
//         }
//     }
//     return res.push( musbat + manfiy)
// }
// let res = test(arr);
// console.log(res);

// 11 Massivni n marta takrorlab yangi massiv yaratadigan funksiya yozing.**
// let arr = [1,2,3];
// let son = 3;
// function test(arr,son) {
//     let res = [];
//     for (let i = 0; i < son; i++) {
//        res = res.concat(arr)
        
//     }
//     return res
// }
// let res = test(arr,son);
// console.log(res);

// 12. **Massivdagi har bir elementni stringga aylantirib yangi massiv yaratadigan funksiya yozing.**
let arr = [1,2,3,4];
function test(arg) {
    
}