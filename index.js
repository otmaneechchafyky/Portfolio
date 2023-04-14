const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");

const function1 = document.getElementById("function1");
const function2 = document.getElementById("function2");
const function3 = document.getElementById("function3");
const function4 = document.getElementById("function4");

function showFunction1() {
  info2.style.display = "none";
  info3.style.display = "none";
  info4.style.display = "none";
  info1.style.display = "block";

  function1.style.backgroundColor = "#3b4455";
  function2.style.backgroundColor = "transparent";
  function3.style.backgroundColor = "transparent";
  function4.style.backgroundColor = "transparent";

  function1.style.color = "#0099dd";
  function2.style.color = "#fff";
  function3.style.color = "#fff";
  function4.style.color = "#fff";

  function1.style.borderLeft = "2px solid #0099dd";
  function2.style.borderLeft = "0";
  function3.style.borderLeft = "0";
  function4.style.borderLeft = "0";
}

function showFunction2() {
    info1.style.display = "none";
    info3.style.display = "none";
    info4.style.display = "none";
    info2.style.display = "block";

    function2.style.backgroundColor = "#3b4455";
    function1.style.backgroundColor = "transparent";
    function3.style.backgroundColor = "transparent";
    function4.style.backgroundColor = "transparent";

    function2.style.color = "#0099dd";
    function1.style.color = "#fff";
    function3.style.color = "#fff";
    function4.style.color = "#fff";

    function2.style.borderLeft = "2px solid #0099dd";
    function1.style.borderLeft = "0";
    function3.style.borderLeft = "0";
    function4.style.borderLeft = "0";
  }

  function showFunction3() {
    info2.style.display = "none";
    info1.style.display = "none";
    info4.style.display = "none";
    info3.style.display = "block";

    function3.style.backgroundColor = "#3b4455";
    function2.style.backgroundColor = "transparent";
    function1.style.backgroundColor = "transparent";
    function4.style.backgroundColor = "transparent";

    function3.style.color = "#0099dd";
    function2.style.color = "#fff";
    function1.style.color = "#fff";
    function4.style.color = "#fff";

    function3.style.borderLeft = "2px solid #0099dd";
    function2.style.borderLeft = "0";
    function1.style.borderLeft = "0";
    function4.style.borderLeft = "0";
  }

  function showFunction4() {
    info2.style.display = "none";
    info3.style.display = "none";
    info1.style.display = "none";
    info4.style.display = "block";

    function4.style.backgroundColor = "#3b4455";
    function2.style.backgroundColor = "transparent";
    function3.style.backgroundColor = "transparent";
    function1.style.backgroundColor = "transparent";

    function4.style.color = "#0099dd";
    function2.style.color = "#fff";
    function3.style.color = "#fff";
    function1.style.color = "#fff";

    function4.style.borderLeft = "2px solid #0099dd";
    function2.style.borderLeft = "0";
    function3.style.borderLeft = "0";
    function1.style.borderLeft = "0";
  }

// function show1() {
//     info2.classList.remove("displayBlock");
//     info3.classList.remove("displayBlock");
//     info4.classList.remove("displayBlock");

//     function2.classList.remove("clickStyle");
//     function3.classList.remove("clickStyle");
//     function4.classList.remove("clickStyle");

//     info1.classList.add("displayBlock");
//     info2.classList.add("displayNone");
//     info3.classList.add("displayNone");
//     info4.classList.add("displayNone");

//     function1.classList.add("clickStyle");
//     function2.classList.add("unclickStyle");
//     function3.classList.add("unclickStyle");
//     function4.classList.add("unclickStyle");
// }

// function show2() {
//     info1.classList.remove("displayBlock");
//     info3.classList.remove("displayBlock");
//     info4.classList.remove("displayBlock");

//     function1.classList.remove("clickStyle");
//     function3.classList.remove("clickStyle");
//     function4.classList.remove("clickStyle");

//     info2.classList.add("displayBlock");
//     info1.classList.add("displayNone");
//     info3.classList.add("displayNone");
//     info4.classList.add("displayNone");

//     function2.classList.add("clickStyle");
//     function1.classList.add("unclickStyle");
//     function3.classList.add("unclickStyle");
//     function4.classList.add("unclickStyle");
// }

// function show3() {
//     info2.classList.remove("displayBlock");
//     info1.classList.remove("displayBlock");
//     info4.classList.remove("displayBlock");

//     function2.classList.remove("clickStyle");
//     function1.classList.remove("clickStyle");
//     function4.classList.remove("clickStyle");

//     info3.classList.add("displayBlock");
//     info2.classList.add("displayNone");
//     info1.classList.add("displayNone");
//     info4.classList.add("displayNone");

//     function3.classList.add("clickStyle");
//     function2.classList.add("unclickStyle");
//     function1.classList.add("unclickStyle");
//     function4.classList.add("unclickStyle");
// }

// function show4() {
//     info2.classList.remove("displayBlock");
//     info3.classList.remove("displayBlock");
//     info1.classList.remove("displayBlock");

//     function2.classList.remove("clickStyle");
//     function3.classList.remove("clickStyle");
//     function1.classList.remove("clickStyle");

//     info4.classList.add("displayBlock");
//     info2.classList.add("displayNone");
//     info3.classList.add("displayNone");
//     info1.classList.add("displayNone");

//     function4.classList.add("clickStyle");
//     function2.classList.add("unclickStyle");
//     function3.classList.add("unclickStyle");
//     function1.classList.add("unclickStyle");
// }

