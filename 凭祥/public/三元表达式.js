var list=''
var a=1

//a==2为true时，list='我喜欢你',否则list='我不喜欢你'
list = a ==2 ? '我喜欢你':'我不喜欢你'
console.log(list)

//等同于这个
if(a==2){
    list=='我喜欢你'
}else{
    list=='我不喜欢你'
}