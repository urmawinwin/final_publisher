//multi_tab
//multi_tab
//multi_tab
window.addEventListener("load", function () {
    // store tabs variable
    var theTabs = document.querySelectorAll("ul.multi_tabs > li");
  
    function theTabClicks(tabClickEvent) {
      var clickedTab = tabClickEvent.currentTarget;
      var tabParent =
        tabClickEvent.currentTarget.parentNode.parentNode.parentNode.parentNode;
      var theTabs = tabParent.querySelectorAll("ul.multi_tabs > li");
      for (var i = 0; i < theTabs.length; i++) {
        theTabs[i].classList.remove("active");
      }
  
      clickedTab.classList.add("active");
      tabClickEvent.preventDefault();
      var contentPanes = tabParent.querySelectorAll(".tab_pane");
      for (i = 0; i < contentPanes.length; i++) {
        contentPanes[i].classList.remove("active");
      }
      var anchorReference = tabClickEvent.target;
      var activePaneId = anchorReference.getAttribute("href");
      var activePane = tabParent.querySelector(activePaneId);
      activePane.classList.add("active");
    }

    //for문으로 함수 theTabClicks 다 먹게 만들기
    for (i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theTabClicks);
    }

      // step-slide
      // step-slide
      // step-slide
      const slidePage = document.querySelector(".slidepage");
      const firstNextBtn = document.querySelector(".nextBtn");
      const preBtnSec = document.querySelector(".prev-1");
      const NextBtnSec = document.querySelector(".next-1");
      const preBtnThird = document.querySelector(".prev-2");
      const NextBtnThird = document.querySelector(".next-2");
      const preBtnFourth = document.querySelector(".prev-3");
      const submitBtn = document.querySelector(".submit");
      const progressText = document.querySelectorAll(".step p");
      const progressCheck = document.querySelectorAll(".step .check");
      const bullet = document.querySelectorAll(".step .bullet");
      let max = 4;
      let current = 1;


      //nextBtn
      firstNextBtn.addEventListener("click",function(e){
          e.preventDefault();
          slidePage.style.marginLeft = "-25%";
          bullet[current - 1].classList.add("active");
          progressText[current - 1].classList.add("active");
          progressCheck[current - 1].classList.add("active");
          current += 1;
      });

      NextBtnSec.addEventListener("click",function(e){
          e.preventDefault();
          slidePage.style.marginLeft = "-50%";
          bullet[current - 1].classList.add("active");
          progressText[current - 1].classList.add("active");
          progressCheck[current - 1].classList.add("active");
          current += 1;
      });

      NextBtnThird.addEventListener("click",function(e){
        e.preventDefault();
        slidePage.style.marginLeft = "-75%";
        bullet[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        current += 1;
      });

      submitBtn.addEventListener("click",function(e){
          e.preventDefault();
          // slidePage.style.marginLeft = "-75%";
          bullet[current - 1].classList.add("active");
          progressText[current - 1].classList.add("active");
          progressCheck[current - 1].classList.add("active");
          current += 1;
          setTimeout(function(){
            alert("통했군요! 010-9914-3696 연락 주세요!");
            // location.reload();
          },800);
          return false;
      });



      //preBtn
      preBtnSec.addEventListener("click",function(e){
          e.preventDefault();
          slidePage.style.marginLeft = "0";
          bullet[current - 2].classList.remove("active");
          progressText[current - 2].classList.remove("active");
          progressCheck[current - 2].classList.remove("active");
          current -= 1;
      });

      preBtnThird.addEventListener("click",function(e){
          e.preventDefault();
          slidePage.style.marginLeft = "-25%";
          bullet[current - 2].classList.remove("active");
          progressText[current - 2].classList.remove("active");
          progressCheck[current - 2].classList.remove("active");
          current -= 1;
      });

      preBtnFourth.addEventListener("click",function(e){
          e.preventDefault();
          slidePage.style.marginLeft = "-50%";
          bullet[current - 2].classList.remove("active");
          progressText[current - 2].classList.remove("active");
          progressCheck[current - 2].classList.remove("active");
          current -= 1;
      });

      // submitBtn.addEventListener("click",function(e){
      //     e.preventDefault();
      //     slidePage.style.marginLeft = "0%";
      //     bullet[current - 2].classList.remove("active");
      //     progressText[current - 2].classList.remove("active");
      //     progressCheck[current - 2].classList.remove("active");
      //     current -= 1;
      // });
  // 오리지날 함수 load 끝
      
  });


  
  // window.addEventListener('scroll', reveal);

  //   function reveal() {
  //     var reveals = document.getElementsByClassName("reveal");
  //     for(var i=0; i <= reveals.length; i++){
    
  //         var windowheight = window.innerHeight;
  //         var revealtop = reveals[i].getBoundingClientRect().top;
  //         var revealpoint = 150;
    
  //         if(revealtop < windowheight - revealpoint){
  //             reveals[i].classList.add('active');
  //         }
  //         else{
  //             reveals[i].classList.remove('active');  
  //         }
  //       }
  //   }

  window.addEventListener('scroll', function reveal () {
    var reveals = document.getElementsByClassName("reveal");
    for(var i=0; i <= reveals.length; i++){
  
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
  
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');  
        }
      }
  });
  // reveal script




  
  window.addEventListener('scroll', function () {

    var blocks = document.getElementsByClassName("coupone");
    for(var i=0; i<blocks.length; i++){
    var one_block = blocks[i];
    // one_block.textContent = one_block.offsetTop;
    }
    
    var printer_div = document.getElementById("printer");    
    // printer_div.textContent = document.documentElement.scrollTop;
    console.log(printer_div.textContent);

    var sec5 = document.getElementById("section5"); 
    // var sec6 = document.getElementById("section6"); 

    var range = 3100;
    // var range = 
    // 범위값 지정 = 특정 범위 내에서만 움직이고픔
    // sec5.textContent = document.documentElement.scrollTop;
    var screen_center = document.documentElement.scrollTop + screen.height/6 ;

    for(var i=0; i<blocks.length; i++){
      var one_block = blocks[i];
      //bolck이 최상단을 넘었나 안넘었나 (넘는다면)
      if(sec5.offsetTop <= screen_center+range && sec5.offsetTop >= screen_center-range){
        one_block.classList.add("popup");
      } else {
        one_block.classList.remove("popup");
      } 
    }

});
  // reveal coupone



  
