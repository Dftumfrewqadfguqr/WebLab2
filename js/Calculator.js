
var first = document.getElementById("first");
var comboBox = document.getElementById("type");

function addOption(a, value)
{
    var first = document.getElementById("first");
    var option1 = document.createElement("option");
    option1.text = a;
    option1.value = value;
    first.add(option1);
}

function calculate()
{
  var resultBox = document.getElementById("resultBox");
  switch (comboBox.options[comboBox.selectedIndex].value)
  {
    case "1":
      resultBox.innerHTML = "Вклад 'Пополняемый'";
      switch(first.options[first.selectedIndex].value)
      {
        case "20":
          resultBox.innerHTML += " на срок '6 месяцев' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.1;
          break;
        case "22":
          resultBox.innerHTML += " на срок '1 год' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.22;
          break;
        case "15":
          resultBox.innerHTML += " на срок '1,5 года' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.225 ;
          break;
        case "10":
          resultBox.innerHTML += " на срок '2 года' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.2;
          break;
        default:
          alert("Case argument error.");
      }
      break;
    case "2":
      resultBox.innerHTML = "Вклад 'Срочный' ";
      switch(first.options[first.selectedIndex].value)
      {
        case "20":
          resultBox.innerHTML += " на срок '3 месяца' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.05;
          break;
        case "22":
          resultBox.innerHTML += " на срок '6 месяцев' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.11;
          break;
        case "23":
          resultBox.innerHTML += " на срок '9 месяцев' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.1725;
          break;
        case "24":
          resultBox.innerHTML += " на срок '1 год' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.24;
          break;
        case "18":
          resultBox.innerHTML += " на срок '1,5 года' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.27 ;
          break;
        case "15":
          resultBox.innerHTML += " на срок '2 года' на сумму " + amount.value + " руб. \n В конце срока вы получите " + amount.value * 1.3;
          break;
        default:
          alert("Case argument error.");
      }
      break;
    default:
      alert("Вы не выбрали тип вклада");
  }

}

function changeComboBox() {

  first.innerHTML = "";
  first.disabled = false;
  if(comboBox.options[comboBox.selectedIndex].value === "1")
  {
    addOption("6 месяцев - 20%", 20);
    addOption("1 год - 22%", 22);
    addOption("1,5 года - 15%", 15);
    addOption("2 года - 10%", 10);
  }
  else if(comboBox.options[comboBox.selectedIndex].value === "2")
  {
    addOption("3 месяца - 20%", 20);
    addOption("6 месяцев - 22%", 22);
    addOption("9 месяцев - 23%", 23);
    addOption("1 год - 24%", 24);
    addOption("1,5 года - 18%", 18);
    addOption("2 года - 15%", 15);
  }
  else
  {
    first.disabled = true;
  }
  comboBox.add(option2);
}
