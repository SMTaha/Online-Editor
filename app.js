 (function () {

     //         Changing Editor in tab click

     var editor = document.getElementById("editor");

     var selectedTabName = "tab01";

     var selectedDOMElement = document.getElementById(selectedTabName);

     console.log(selectedTabName);

     var htmlEditor = document.getElementById("html-editor");
     var cssEditor = document.getElementById("css-editor");
     var jsEditor = document.getElementById("js-editor");

     function whatClicked(evt) {

         if(selectedTabName === "tab01"){
             selectedDOMElement.className = "tab";
             //htmlEditor.className = "";
             //cssEditor.className = "hidden"
         }
         else if(selectedTabName === "tab02" || selectedTabName === "tab03"){
             selectedDOMElement.className = "tab tab-other";
         }

         selectedTabName = evt.target.id;

         selectedDOMElement = document.getElementById(selectedTabName);

         console.log(selectedTabName, selectedDOMElement);

         if(selectedTabName === "tab01"){
             selectedDOMElement.className = "tab highlight";
             document.getElementById("tab02").className = "tab tab-other up";
             htmlEditor.className = "";
             cssEditor.className = "hidden";
             jsEditor.className = "hidden";
         }
         else if(selectedTabName === "tab02" || selectedTabName === "tab03"){
             selectedDOMElement.className = "tab tab-other highlight";
             if(selectedTabName === "tab02"){
                 cssEditor.className = "";
                 jsEditor.className = "hidden";
             }
             else {
                 cssEditor.className = "hidden";
                 jsEditor.className = "";
             }
             htmlEditor.className = "hidden";


         }
     }

     editor.addEventListener("click", whatClicked, false);

     //         Changing Editor on tab click

     //         Opening Menu on menu icon click

     var nav = document.getElementsByTagName("nav").item(0);
     var menu;
     function openMenu(evt){
        menu = evt.target.id;
        if(menu == "menu"){
            console.log(nav);
        }
     }

     nav.addEventListener("click", openMenu, false);
 })();


