$(document).ready(function () {
  var no0fLetter = $("#letters li").length;
  var totalLetterWidth = 0;

  for (var i = 0; i < no0fLetter; i++) {
    var letterWidth = $("#letters li").eq(i).outerWidth(true);
    totalLetterWidth = totalLetterWidth + letterWidth;
  }

  $("#letters").css("width", totalLetterWidth + "%");

  var speed = 10;
  animateLetters();

  function animateLetters() {
    $("#letters li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "px",
        },
        1.5,
        function () {
          var animateLetterWidth = $(this).outerWidth(true);

          if (speed >= animateLetterWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetters();
          });
        }
      );
  }
});

// _____________________1번째

$(document).ready(function () {
  var no0fLetter = $("#letters_sec li").length;
  var totalLetterWidth = 0;

  for (var i = 0; i < no0fLetter; i++) {
    var letterWidth = $("#letters_sec li").eq(i).outerWidth(true);
    totalLetterWidth = totalLetterWidth + letterWidth;
  }

  $("#letters_sec").css("width", totalLetterWidth + "%");

  var speed = 10;
  animateLetters();

  function animateLetters() {
    $("#letters_sec li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "px",
        },
        1.5,
        function () {
          var animateLetterWidth = $(this).outerWidth(true);

          if (speed >= animateLetterWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetters();
          });
        }
      );
  }
});

// _____________________2번째

$(document).ready(function () {
  var no0fLetter = $("#letters-who li").length;
  var totalLetterWidth = 0;

  for (var i = 0; i < no0fLetter; i++) {
    var letterWidth = $("#letters-who li").eq(i).outerWidth(true);
    totalLetterWidth = totalLetterWidth + letterWidth;
  }

  $("#letters-who").css("width", totalLetterWidth + "%");

  var speed = 5;
  animateLetters();

  function animateLetters() {
    $("#letters-who li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "px",
        },
        1.5,
        function () {
          var animateLetterWidth = $(this).outerWidth(true);

          if (speed >= animateLetterWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetters();
          });
        }
      );
  }
});


// Section4 textMoving

$(document).ready(function () {
  var workMove = $("#work_move span").length;
  var totalWorkMove = 0;

  for (var i = 0; i < workMove; i++) {
    var totalWidth = $("#work_move span").eq(i).outerWidth(true);
    totalWorkMove = totalWorkMove + totalWidth;
  }
  
  $("#work_move").css("width", totalWorkMove + "%");

  var speed = "20";
  animatesspan();

  function animatesspan() {
    $("#work_move span")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "px",
        },
        1.5,
        function () {
          var anispanWidth = $(this).outerWidth(true);

          if (speed >= anispanWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animatesspan();
          });
        }
      );
  }
});

// Section5 portfolio_textMoving

$(document).ready(function () {
  var no0fLetter = $("#sec5_bac_text li").length;
  var totalLetterWidth = 0;

  for (var i = 0; i < no0fLetter; i++) {
    var letterWidth = $("#sec5_bac_text li").eq(i).outerWidth(true);
    totalLetterWidth = totalLetterWidth + letterWidth;
  }

  $("#sec5_bac_text").css("width", totalLetterWidth + "px");

  var speed = "0.08";
  animateLetters();

  function animateLetters() {
    $("#sec5_bac_text li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "%",
        },
        1.5,
        function () {
          var animateLetterWidth = $(this).outerWidth(true);

          if (speed >= animateLetterWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetters();
          });
        }
      );
  }
});


// sec5_bac_2


$(document).ready(function () {
  var no0fLetter = $("#sec5_bac_text_2 li").length;
  var totalLetterWidth = 0;

  for (var i = 0; i < no0fLetter; i++) {
    var letterWidth = $("#sec5_bac_text_2 li").eq(i).outerWidth(true);
    totalLetterWidth = totalLetterWidth + letterWidth;
  }

  $("#sec5_bac_text_2").css("width", totalLetterWidth + "px");

  var speed = "0.08";
  animateLetters();

  function animateLetters() {
    $("#sec5_bac_text_2 li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "%",
        },
        1.5,
        function () {
          var animateLetterWidth = $(this).outerWidth(true);

          if (speed >= animateLetterWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetters();
          });
        }
      );
  }
});



// sec5_bac_3


$(document).ready(function () {
  var no0fLetter = $("#sec5_bac_text_3 li").length;
  var totalLetterWidth = 0;

  for (var i = 0; i < no0fLetter; i++) {
    var letterWidth = $("#sec5_bac_text_3 li").eq(i).outerWidth(true);
    totalLetterWidth = totalLetterWidth + letterWidth;
  }

  $("#sec5_bac_text_3").css("width", totalLetterWidth + "px");

  var speed = "0.08";
  animateLetters();

  function animateLetters() {
    $("#sec5_bac_text_3 li")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speed + "%",
        },
        1.5,
        function () {
          var animateLetterWidth = $(this).outerWidth(true);

          if (speed >= animateLetterWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetters();
          });
        }
      );
  }
});


//마지막 간지 텍스트

$(document).ready(function () {
  var sec8workMove = $("#sec8_work_move span").length;
  var sec8totalWorkMove = 0;

  for (var i = 0; i < sec8workMove; i++) {
    var sec8totalWidth = $("#sec8_work_move span").eq(i).outerWidth(true);
    sec8totalWorkMove = sec8totalWorkMove + sec8totalWidth;
  }
  
  $("#sec8_work_move").css("width", sec8totalWorkMove + "vw");

  var sec8speed = "8";
  sec8animatesspan();

  function sec8animatesspan() {
    $("#sec8_work_move span")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + sec8speed + "px",
        },
        1.5,
        function () {
          var sec8anispanWidth = $(this).outerWidth(true);

          if (sec8speed >= sec8anispanWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            sec8animatesspan();
          });
        }
      );
  }
});



//마지막 간지 텍스트2

$(document).ready(function () {
  var sec88workMove = $("#sec88_work_move span").length;
  var sec88totalWorkMove = 0;

  for (var i = 0; i < sec88workMove; i++) {
    var sec88totalWidth = $("#sec88_work_move span").eq(i).outerWidth(true);
    sec88totalWorkMove = sec88totalWorkMove + sec88totalWidth;
  }
  
  $("#sec88_work_move").css("width", sec88totalWorkMove + "vw");

  var sec88speed = "8";
  sec88animatesspan();

  function sec88animatesspan() {
    $("#sec88_work_move span")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + sec88speed + "px",
        },
        1.5,
        function () {
          var sec88anispanWidth = $(this).outerWidth(true);

          if (sec88speed >= sec88anispanWidth) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            sec88animatesspan();
          });
        }
      );
  }
});



// section8 text

$(document).ready(function () {
  var no0fLetterr = $(".sec8_work_w span").length;
  var totalLetterWidthh = 0;

  for (var i = 0; i < no0fLetterr; i++) {
    var letterWidthh = $(".sec8_work_w span").eq(i).outerWidth(true);
    totalLetterWidthh = totalLetterWidthh + letterWidthh;
  }

  $(".sec8_work_w").css("width", totalLetterWidthh + "vw");

  var speedd = 10.6;
  animateLetterss();

  function animateLetterss() {
    $(".sec8_work_w span")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speedd + "px",
        },
        1.5,
        function () {
          var animateLetterWidthh = $(this).outerWidth(true);

          if (speedd >= animateLetterWidthh) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLetterss();
          });
        }
      );
  }
});

// _____________________1번째

$(document).ready(function () {
  var no0fLetterrr = $(".sec8_work_ww span").length;
  var totalLetterWidthhh = 0;

  for (var i = 0; i < no0fLetterrr; i++) {
    var letterWidthhh = $(".sec8_work_ww span").eq(i).outerWidth(true);
    totalLetterWidthhh = totalLetterWidthhh + letterWidthhh;
  }

  $(".sec8_work_ww").css("width", totalLetterWidthhh + "vw");

  var speeddd = 11.6;
  animateLettersss();

  function animateLettersss() {
    $(".sec8_work_ww span")
      .eq(0)
      .animate(
        {
          marginLeft: "-=" + speeddd + "px",
        },
        1.5,
        function () {
          var animateLetterWidthhh = $(this).outerWidth(true);

          if (speeddd >= animateLetterWidthhh) {
            $(this).parent().append($(this));
            $(this).removeAttr("style");
          }
          animInterval = setTimeout(function () {
            animateLettersss();
          });
        }
      );
  }
});

// _____________________2번째