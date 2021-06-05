// rest <=> spread <=> destructure

// rest=> geriye kalan. rest parametres C# => params, Java=> varArgs
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}
console.log(typeof showProducts);


// rest de ...products şeklinde gönderdiğimiz değerler aslında bir array
// Js de rest parametreleri, bu şekilde gönderdiğimizde array olarak algılıyor.

showProducts(10,"Elma","Armut","Karpuz");



console.log(Math.max(1,2,3,4,50,4,60,14)) // bu değer bana array olarak geliyor olsaydı ?

// spread => ayırmak 
let points = [1,2,3,4,50,4,60,14]
console.log(...points)  // => spread etti arrayi ayırdı.
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")  // ne minnoşsun çen <3

// rest ile istediğimiz kadar parametre gönderiyoruz. o array olarak tutuluyor
// spread de elimizdeki bir arrayı ayrıştırıyoruz.


//  destructuring = elinizdeki array in değerlerini değişkenlere atama yöntemi

let populations = [1000,2000,3000,[4000,5000]]  // bunu parçalayacağız

let [small,medium,high,[veryHigh,maximum]] = populations // bu arrayi sığarısyla bu değerlere aktar demek

console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maximum);


// bana bir array gelecek ve arraydeki ilk değişkeni small1'e atıyacam demek.
function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)   // bu kısmı anlamadım.

// bir değişkenimiz var. bu state olsun. mesela sepette birkaç ürün olsun. (obje de olabilir bu)
// bu bu array' e fonksiyon da atayabilirim.

// objeyi destruct etmek için ne gerekiyor?

let category = {id:1,name:"içecek"}

console.log(category.id);
console.log(category["name"]) //=> kategorinin name alanı gibi.

// objenin istediğin elemanlarını değişkenlerine atama yöntemi

let {id,name} =category // objeleri destruc etme yöntemi

console.log(id);
console.log(name);   // bunları değişkenlere atadım artık.

// Redux mimarisi.
