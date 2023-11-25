// var accs = document.getElementsByClassName("qus");
// let appPanels = document.querySelectorAll('.asw');

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.add("active");
//     var panel = this.nextElementSibling;

//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//       act[i].classList.remove("active");
//      // panel.classList.remove()
//     } else {
//         let acts = document.querySelectorAll('.qus.active')
//         for(act of acts){
//             var panels = act.nextElementSibling;
//             panels.style.maxHeight = null;
//            }
//     } 
//     panel.style.maxHeight = panel.scrollHeight + "px";
//     // panel.classList.add()
//   });
// }
//scrollHeight > 클릭을 하면 늘어날 높이값을 지정하라

// const tapNames = document.querySelector('#tab_name');
// const qusWraps = document.querySelectorAll('.qus_wrap');
// const qnaTabs = document.querySelectorAll('.qna_tab');

// qnaTabs.forEach(function(qnaTab){
// qnaTab.addEventListener('click', function(){  
//     let id = qnaTab.dataset.id;
//     qusWraps.forEach(function(qusWrap){
//         qusWrap.classList.remove('active');         
//     });
//     if(id){
//         let secId = document.getElementById(id);
//         secId.classList.add('active');
//     }
// })
// })
var accs = document.querySelectorAll(".qus");
let appPanels = document.querySelectorAll('.asw');

accs.forEach(function(acc){
    acc.addEventListener("click", function(){
        var panel = this.nextElementSibling;
        let accsAc = document.querySelector(".qus.active");
    for(appPanel of appPanels){
        if(appPanel.style.maxHeight){
        appPanel.style.maxHeight = null;
        accsAc.classList.remove('active');
        }
    }
    if(this == accsAc){
        this.classList.remove("active");
        panel.style.maxHeight = null;
    }else if(this == acc){
        this.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px"
    }
    })
})