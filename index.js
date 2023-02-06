// var navMenu=document.querySelectorAll('.text-centre a');

// for(var i=0;i<navMenu.length;i++){
//     navMenu[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetId=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetId);
//         var interval=setInterval(function(){
//             var coordinates=targetSection.getBoundingClientRect();
//             if(coordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
//             scrollBy(0,50);
//         },20);
//     });
// }
// var progressBars=document.getElementsByClassName('child-div');
// var skillscontainer=document.getElementsByClassName('skills-display');
// window.addEventListener('scroll',checkScroll);
// var animationDone=false;

// // initialBars();

// // function initialBars(){
// //     for(let bar of progressBars){
// //         bar.style.width=0+'%';
// //     }
// // }

// function fillBars(){
//     for(let bars of progressBars){
//         let targetwidth=bars.getAttribute('bar-width');
//         let currentwidth=0;
//         let interval=setInterval(function(){
//             if(currentwidth > targetwidth){
//                 clearInterval(interval);
//                 return;
//             }
//             currentwidth++;
//             bars.style.width=currentwidth+'%';
//         },5)
//     }
// }


// function checkScroll(){
//     var coordinates=skillscontainer[0].getBoundingClientRect();
//     if(!animationDone && coordinates.top<window.innerHeight){
//         animationDone=true;
//         // console.log("skills section visible");
//         fillBars();

//     }
//     else if(coordinates.top>window.innerHeight){
//         animationDone=false;
//         // initialBars();
//     }
// }

var progressBars = document.getElementsByClassName('child-div');
var skillscontainer = document.getElementsByClassName('skills-display');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

// initialBars();

// function initialBars(){
//     for(let bar of progressBars){
//         bar.style.width=0+'%';
//     }
// }

function fillBar(bar) {

    let targetwidth = bar.getAttribute('bar-width');
    let currentwidth = 0;
    let interval = setInterval(function () {
        if (currentwidth > targetwidth) {
            clearInterval(interval);
            return;
        }
        currentwidth++;
        bar.style.width = currentwidth + '%';
    }, 5)
}


function checkScroll() {
    for(let bar of progressBars){
        if(bar.getAttribute('data-visited')=="false" && bar.getBoundingClientRect().top<window.innerHeight){
            bar.setAttribute('data-visited',"true")
            fillBar(bar);
        }
        else if(bar.getBoundingClientRect().top>window.innerHeight){
            bar.setAttribute('data-visited',false);
        }
    }
}


