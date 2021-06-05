// var, let , const
// değişken kullanırken let keywoord'ünü kullanacaz. bunun nedeni ise şu
// javascript tip güvenli değil. bu yüzden let tanımlayacağız.


let sayi1=10;
sayi1 ="Engin Demiroğ"
let student={id:1, name:"Engin"}  // => // obje tanımı => object notation
// backend den datalar bu formatta gelecek (json formatı.)
console.log(student);

// single thread var. uygulama yukarıdan aşağı çalışır.

function save(puan=10,ogrenci) {

    console.log(ogrenci.name +  " : " + puan)
}

save(undefined,student);  //=> undefined gönderdiğinde; ben aslında yokum demek. yani puan 
// gönderilmemiş oluyor. kalan kısmı da devam ediyor.

let students =["Engin Demirog","Esra Sancak","Kübra Terzi","Fatih Kayan"]

console.log(students);

let students2 =[student,{id:2,name:"Esra"},"Ankara",{city:"İstanbul"}]

console.log(students2)



