//TO DO: Corrigir slider para telas menores do que 1024px

var imgShow = 3;
var maxIndex = Math.ceil($('.box-single-projetos').length / 3) - 1;
var curIndex = 0;

initSlider();
navigateSlider();
function initSlider(){
    var amt = $('.box-single-projetos').length * 33.3;
    var elScroll = $('.wraper-slider');
    var elSingle = $('.box-single-projetos');
    elScroll.css('width',amt+'%');
    elSingle.css('width',29*(100/amt)+'%');   
}

function navigateSlider(){
    $('.arrow-right').click(function(){
        if(curIndex < maxIndex){
            curIndex++;
            var elOff = $('.box-single-projetos').eq(curIndex*3).offset().left - 
            $ ('.wraper-slider').offset().left;
            $('.box-projetos').animate({'scrollLeft':elOff+'px'});
        }else{
            //console.log("chegamos até o final");
        }
        $('.arrow-left').click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.box-single-projetos').eq(curIndex*3).offset().left - 
                $ ('.wraper-slider').offset().left;
                $('.box-projetos').animate({'scrollLeft':elOff+'px'});
            }else{
                
            }
        
            })
    })
}