let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

console.log("<ul>")
// ul'nin içindeki elamanları alt alta yazmam gerek.
products.map(product=>console.log(`<li>${product.name}</li>`))
// map benim için, array'i dönüyor. foreach gibi geziyor. her bir ürün için item=product

console.log("</ul>")

// üç tane fonksiyonum var. Map / Filter /Reduce

// elimde bir array var. 

// angular react vs. bunlardaki ama dom manipulation.

products.map(product=>{
    console.log(product)
    console.log(`<li>${product.name}</li>`)
})


// elimizdeki array'i filtrelemeye yarıyor. yepyeni bir array çıkıyor
// filter 0 eleman bile olsa, sonucu bizim için yeni bir array
// statemananagement. için ekranın data değişince tekrar değişmesi için
// tekrar render edilmesi gerekiyor. (referans tip olduğu içiin)
// referansı değiştiğiniz anda, ekran yeniden render ediliyor. o yüzden
// slice/splice yerine bunu kullanıyoruz. onlar referansi değiştimiyor çünkü

let filteredProducts = products.filter(product=>product.unitPrice>12000)
// eğer 12000 den bütükse, onu değiştir ve yazdır. yeni array oluştur diyor
console.log(filteredProducts)


// nispeten daha az kullanılan fonksiyon. akümünatör görevi görüyor. örneğin hepsi burada com da
// sepetin totalini göstermek istiyoruz. bunlar da sepete eklenen ürünler. acc de toplamı hesaplamak için kullanılan ifade (takma isimm)
// her bir pproduct için acc'ye fiyatı ekle. 0 ise başlangıç değeri
let cartTotal = products.reduce((acc, product)=>acc+ product.unitPrice, 0)

console.log(cartTotal)

// data apiden geldi. onu filtreledin. üzerine kdv ekledin ve map ile yeni bir objeler üretmek için de kullanıyorsun
// sonra bir map yaptı. retun ile listeyebilrsin.
// sonra unitprice'ı değiştirip reduce uyguladı (sepete ekledi)

let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)

console.log(cartTotal2)