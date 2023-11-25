
//메뉴탭
const tapName = document.querySelector('#tab_name');
const menuNavs = document.querySelector('.menu_nav');
const tabMenus = document.querySelectorAll('.tab_menu');
const contents = document.querySelectorAll('.menu_section');
const footer = document.querySelector('.footer_wrap')
tabMenus.forEach(function(tabMenu){ //클래스 각각을 호출 > tabMenu
    tabMenu.addEventListener('click', function(a){ //하나의 클래스를 클릭 //html의 data-txt값을 찾는 방법
        tapName.innerHTML = tabMenu.dataset.text;
        let id = tabMenu.dataset.id;
        contents.forEach(function(content){
            content.classList.remove('active');         
        });
        if(id){
            let secId = document.getElementById(id);
            secId.classList.add('active');
        }
        if(id == 'half'){
            footer.style.display='none'
        }else{
            footer.style.display='block'
        }
    })
})


//피자 선택
const leftPizza = document.querySelector('.left_pizza')
const rightPizza = document.querySelector('.right_pizza')
const firstPizza = document.querySelector('.selec1')
const secondPizza = document.querySelector('.selec2')

let array = [null, 'RPZ003B.png', 'RPZ003B.png', 'RPZ110.png', 'RPZ003.png', 'RPZ003Z.png', 'RPZ169B.png']
let arrayR = [null, 'rightRPZ109.png', 'rightRPZ110 (1).png', 'rightRPZ148.png', 'rightRPZ156 (1).png', 'rightRPZ170.png', 'rightRPZ224.png']

const selects = document.querySelectorAll('.select_type>select');

selects.forEach(function(selected){
    selected.addEventListener('change', function(){
        let num = selected.options.selectedIndex;
        if(selected == firstPizza ){
            leftPizza.innerHTML = '<img src="./img/'+array[num]+'" alt="">'    
        }else if(leftPizza.children.length == 0){        
        alert('첫번째 피자부터 선택하세요')
        }else if(selected == secondPizza){
        rightPizza.innerHTML = '<img src="./img/'+arrayR[num]+'" alt="">'
        }
    })
})
//피자 선택


// //사이즈컬러
const sizeWrap = document.querySelector('.size')
const sizeBtns = document.querySelectorAll('.size_btn')

sizeWrap.addEventListener('click', function(e){
    let btn = e.target;
    sizeBtns.forEach(function(sizeBtn){
        sizeBtn.classList.remove('active');

        if(btn === sizeBtn){
        btn.classList.add('active');
        }
    })
})
// //사이즈컬러


//증감함수
const minusBtns = document.querySelectorAll('.btn_minus, .tp_btn_minus')
const plusBtns = document.querySelectorAll('.btn_plus, .tp_btn_plus')
const btns = document.querySelectorAll('.quantity_box, .tp_quantity_box')


btns.forEach(function(btn, i){
    btn.addEventListener('click', function(e){
        console.log(e.target);
        let t = e.target;
        if(t == minusBtns[i]){ //btn자식중에 minus니?//
            minusFunC(t)
        }else if(t == plusBtns[i]){
            plusFunc(t)
        }
    })
});

function minusFunC(t){
    const next = t.nextElementSibling;
    if(next.value > 0){
        next.value --;
    }
}
function plusFunc(t){
    const prev = t.previousElementSibling;
    if(prev.value < 10){
        prev.value ++;
    }
}
//증감함수

//탭메뉴
function tabOpen(a){  
    let tabcont = document.getElementsByClassName('tabcont'); 
for(i=0; i<tabcont.length; i++){
    console.log(tabcont[i])
    tabcont[i].style.display = 'none'
}
tabcont[a].style.display = 'block'

let tabClick = document.getElementsByClassName('tabClick'); 
for(i=0; i<tabClick.length; i++){
   tabClick[i].style.backgroundColor = 'white';
   tabClick[i].style.color = '#888';
}
tabClick[a].style.backgroundColor = '#222';
tabClick[a].style.color = 'white';
}
//탭메뉴


//토핑내려오기
const toppingWrap = document.querySelector('.toppingAdd');
const toppingRow = document.querySelector('.row');

toppingRow.addEventListener('click', function(){
    toppingWrap.classList.toggle('active_topping')
    toppingRow.classList.toggle('active_rotate')

})
//토핑내려오기