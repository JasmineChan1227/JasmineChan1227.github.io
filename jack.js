            // var node = document.getElementsByClassName("jack")[0]
            // node.addEventListener("click",function(){
            //     var name = document.getElementsByClassName("sea")[0].value
            //     alert(name+"新年快乐")

            // })
    $(".jack").on("click",function(){
        alert($(".sea").val()+"和你一起出去玩")
    })
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        effect:'fade',
        
      //  如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          renderBullet: function (index, className) {
            switch(index){
              case 0:text='壹';break;
              case 1:text='贰';break;
              case 2:text='叁';break;
              case 3:text='肆';break;
              case 4:text='伍';break;
            }
            return '<span class="' + className + '">' + text + '</span>';
          },
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },

      })      