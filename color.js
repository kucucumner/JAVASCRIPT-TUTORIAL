var Links = {
    Setcolor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
}
    }
}
var Body = {
Setcolor:function(color){
    document.querySelector('body').style.color = color;    
},
SetBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;    
}
}
function NightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
Body.SetBackgroundColor('black');
Body.Setcolor('white');
self.value = 'day';

Links.Setcolor('coral');


}else{
Body.SetBackgroundColor('white');
Body.Setcolor('black');
self.value = 'night';

Links.Setcolor('blue');
}
}