document.fgColor="red";
		
function Function() {
	alert("已輸入");
		
    var output = document.getElementById("output");
    var username = document.form1.username.value;
	var birthday = document.form1.birthday.value;
	var gd = document.form1.sex[0].checked;
	var sex;
    var i;
	var hobby = "";
	var note = document.form1.note.value;
    
	if(gd == true) { sex = "男";}else { sex = "女";}
	
	for(i = 0; i < document.form1.hobby.length; i++) { 
	  if(document.form1.hobby[i].checked == true) {
		if(document.form1.hobby[i].value == "movie") {
		  hobby += "電影 ";
		}else if(document.form1.hobby[i].value == "animax") {
		  hobby += "動漫 ";
		}else if(document.form1.hobby[i].value == "sport") {
		  hobby += "運動";
		}
	  }
	}
		  
		  
    output.innerHTML = "姓名:"+ username +"<br>";
	output.innerHTML += "性別:"+ sex +"<br>";
	output.innerHTML += "生日:"+ birthday+"<br>";
	output.innerHTML += "興趣:"+ hobby+"<br>";
	output.innerHTML += "自傳:"+ note;
	
	
	
	var output = document.getElementById("hds");
	var crtTable = document.createElement("table");
	var hide = document.createElement("button");
	var hide_b = document.getElementById("hide_b");
	hide.setAttribute("id","hide_b");
	var small = document.createElement("button");
	var small_b = document.getElementById("small_b");
    small.setAttribute("id","small_b");
	var large= document.createElement("button");
    large.setAttribute("id","large_b");
	var large_b = document.getElementById("large_b");
	
	var c1 = document.createElement("tr");
    var d1 = document.createElement("th");
    var d2 = document.createElement("th");
    var d3 = document.createElement("th");
    var d4 = document.createElement("th");
    var d5 = document.createElement("th");
    var e1 = document.createElement("tr");
    var f1 = document.createElement("th");
    var f2 = document.createElement("th");
    var f3 = document.createElement("th");
    var f4 = document.createElement("th");
    var f5 = document.createElement("th");
    var t1 = document.createTextNode("姓名");
    var t2 = document.createTextNode("性別");
    var t3 = document.createTextNode("生日");
    var t4 = document.createTextNode("興趣");
    var t5 = document.createTextNode("自傳");
    var t6 = document.createTextNode(username);
    var t7 = document.createTextNode(sex);
    var t8 = document.createTextNode(birthday);
    var t9 = document.createTextNode(hobby);
    var t10 = document.createTextNode(note);
	var yc = document.createTextNode("隱藏");
    var sx = document.createTextNode("縮小");
    var fd = document.createTextNode("放大");
	output.appendChild(crtTable);
    output.appendChild(small);
    output.appendChild(large);
    output.appendChild(hide);
    crtTable.appendChild(c1);
    crtTable.appendChild(e1);
    c1.appendChild(d1);
    c1.appendChild(d2);
    c1.appendChild(d3);
    c1.appendChild(d4);
    c1.appendChild(d5);
    d1.appendChild(t1);
    d2.appendChild(t2);
    d3.appendChild(t3);
    d4.appendChild(t4);
    d5.appendChild(t5);
    e1.appendChild(f1);
    e1.appendChild(f2);
    e1.appendChild(f3);
    e1.appendChild(f4);
    e1.appendChild(f5);
    f1.appendChild(t6);
    f2.appendChild(t7);
    f3.appendChild(t8);
    f4.appendChild(t9);
    f5.appendChild(t10);
	hide.appendChild(yc);
    small.appendChild(sx);
    large.appendChild(fd);
    
	
	
	hide_b.onclick = function(){
      var h = document.getElementById("hds");
      if (h.style.display == "none") {
		h.style.display = "";
	  }else { h.style.display = "none"; }
    }
	small_b.onclick = function(){
      var h = document.getElementById("hds");
      hds.style.fontSize = "10pt";
    }
	large_b.onclick = function(){
      var h = document.getElementById("hds");
      hds.style.fontSize = "18pt";
    }
}