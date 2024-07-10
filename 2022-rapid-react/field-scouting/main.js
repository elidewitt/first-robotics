const target = document.getElementById("scoutingInterface");

for (let category in ScoutingSource) {
  let category_ = createElement("div", "category");
  category_.id = category;
  let header_ = category_.appendChild(createElement("div", "header", category));
  let content_ = category_.appendChild(createElement("div", "content"));
  
  for (let group in ScoutingSource[category]) {
  
    let group_ = content_.appendChild(createElement("div", "group"));
    
    for (let field in ScoutingSource[category][group]) {
      
      let field_ = group_.appendChild(createElement("div", "field"));
      let label_ = field_.appendChild(createElement("label", "", field));
      let input_, inc_, dec_;
      
      let type = ScoutingSource[category][group][field][0];
      switch(type) {
        case "text":
        case "number":
        case "checkbox":
          input_ = field_.appendChild(createElement("input", type));
          input_.type = type;
          if (type == "number") { input_.min = 0; input_.max = 200; }
          break;
          
        case "increment":
          input_ = field_.appendChild(createElement("input", type));
          
          input_.type = "number";
          input_.min = 0;
          input_.max = 100;
          input_.value = 0;
          
          inc_ = field_.appendChild(createElement("button", "incDecButton", "+"));
          inc_.onclick = function() {
            if (document.getElementById(category + "-" + field).value < Number(input_.max)) {
              document.getElementById(category + "-" + field).value ++;
            }
            return false;
          }
          
          dec_ = field_.appendChild(createElement("button", "incDecButton", "-"));
          dec_.onclick = function() {
            if (document.getElementById(category + "-" + field).value > Number(input_.min)) { 
              document.getElementById(category + "-" + field).value --;
            }
            return false;
          }
          break;
          
        case "textarea":
          input_ = field_.appendChild(createElement("textarea", type));
          break;
          
        case "options":
          input_ = field_.appendChild(createElement("select", type));
          
          let blank_ = input_.appendChild(createElement("option"));
          blank_.disabled = true;
          
          for (let option in ScoutingSource[category][group][field][1]) {
            let option_ = input_.appendChild(createElement("option", null, ScoutingSource[category][group][field][1][option]));
          }
          break;
        
        default:
          console.log("Unknown type of " + type);
          break;
      }

      input_.id = category + "-" + field;
      //entry.name = j.replace(/[ \?\(\)]/g, "");
    }
  }
}

function createElement(tag, classList, innerHTML) {
  elt = document.createElement(tag);
  if (classList) target.appendChild(elt).classList = classList;
  if (innerHTML) elt.appendChild(document.createTextNode(innerHTML));

  return target.appendChild(elt);
}