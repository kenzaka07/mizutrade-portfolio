var script_url = "https://script.google.com/macros/s/AKfycbwxzd2giabGF2s0vLhAsHf0RSLHo0fnSrw-GQEWzBh9qCi-GBu1/exec";
  
	// Make an AJAX call to Google Script
	function insert_value() {
		
		$("#re").css("visibility","hidden");
		 document.getElementById("loader").style.visibility = "visible";
		$('#mySpinner').addClass('spinner');

		var id1=	$("#id").val();
		var fname= $("#fname").val();
		var lname= $("#lname").val();
		var sex= $("#sex").val();
		var sex= $("#holdings").val();
		
		
		var url = script_url+"?callback=ctrlq&fname="+fname+"&lname="+lname+"&id="+id1+"&sex="+sex+"&action=insert";
	  

		var request = jQuery.ajax({
		  crossDomain: true,
		  url: url ,
		  method: "GET",
		  dataType: "jsonp"
		});

	}


  
  
 
  
  
	function update_value(){
		$("#re").css("visibility","hidden");
		 document.getElementById("loader").style.visibility = "visible";
		
		
		var id1=	$("#id").val();
		var fname= $("#fname").val();
		var lname= $("#lname").val();
		var sex= $("#sex").val();
		var sex= $("#holdings").val();
		
		
		var url = script_url+"?callback=ctrlq&fname="+fname+"&lname="+lname+"&id="+id1+"&sex="+sex+"&action=update";
	  

		var request = jQuery.ajax({
		  crossDomain: true,
		  url: url ,
		  method: "GET",
		  dataType: "jsonp"
		});
		
	}

  
 
  
  
	function delete_value(){
		$("#re").css("visibility","hidden");
		 document.getElementById("loader").style.visibility = "visible";
		$('#mySpinner').addClass('spinner');
		var id1=	$("#id").val();
		var fname= $("#fname").val();
		var lname= $("#lname").val();
		var sex= $("#sex").val();
		var sex= $("#holdings").val();
		
		
		
		var url = script_url+"?callback=ctrlq&fname="+fname+"&lname="+lname+"&id="+id1+"&sex="+sex+"&action=delete";
	  

		var request = jQuery.ajax({
		  crossDomain: true,
		  url: url ,
		  method: "GET",
		  dataType: "jsonp"
		});

	}


  
  
  // print the returned data
	function ctrlq(e) {
	  
		
		$("#re").html(e.result);
		$("#re").css("visibility","visible");
		read_value();
		
	}
	  
  
	//let googleUserName = $("#lname").val();
	
	
//READ JSON data
  
	function read_value() {

		$("#re").css("visibility","hidden");
	   
		document.getElementById("loader").style.visibility = "visible";
		var url = script_url+"?action=read";
		
		let googleUserName = "Tagli" //$("#lname").val();

		$.getJSON(url, function (json) {
		
			let appUser = json.records.filter(filterName)
			
			function filterName(x){
			  return x.lastNAME == googleUserName
			}

			//function onlyAccount(x){
			//  return x.ACCOUNT == "Mizutrade"
			//}
			
		
			document.getElementById("welcome-user-data").innerHTML = appUser[0].firstNAME;
			document.getElementById("holdings-data").innerHTML = new Intl.NumberFormat('en-CA', {style: 'currency' , currency: 'PHP', useGrouping: true}).format(appUser[0].HOLDINGS);

			
			console.log(json.records)
			console.log(appUser[0])
		
		
		
		
			//for (var i = 0; i < json.records.length; i++) {
		
			//var one = i
			//var jsondata = json.records[one];
		
			//console.log(jsondata);
		
			//		document.getElementById("demo").innerHTML = json.records[one].ID;
					//document.getElementById("demo1").innerHTML = json.records[one].NAME;
					//document.getElementById("demo2").innerHTML = json.records[one].SEX;
		
			//document.getElementById("demo").innerHTML = jsondata.NAME + ", " + jsondata.SEX;
			//}
		// Set the variables from the results array
	   
	   
	  

			// CREATE DYNAMIC TABLE.
			//var table = document.createElement("table");

			

			//var header = table.createTHead();
			//var row = header.insertRow(0);     
			//var cell1 = row.insertCell(0);
			//var cell2 = row.insertCell(1);
			//var cell3 = row.insertCell(2);
			//var cell4 = row.insertCell(3);
			//var cell4 = row.insertCell(4);
		
			//cell1.innerHTML = "<b>ID</b>";
			//cell2.innerHTML = "<b>FirstName</b>";
			//cell3.innerHTML = "<b>LastName</b>";
			//cell4.innerHTML = "<b>Sex</b>";
			//cell4.innerHTML = "<b>Holdings</b>";
			
			
			// ADD JSON DATA TO THE TABLE AS ROWS.
			//for (var i = 0; i < json.records.length; i++) {
			
				//tr = table.insertRow(-1);
					//var tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].ID;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].firstNAME;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].lastNAME;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].SEX;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = new Intl.NumberFormat('en-CA', {style: 'currency' , currency: 'PHP', useGrouping: true}).format(json.records[i].HOLDINGS);
				//}
				
				

			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			//var divContainer = document.getElementById("showData");
			//divContainer.innerHTML = "";
			//divContainer.appendChild(table);
			document.getElementById("loader").style.visibility = "hidden";
			$("#re").css("visibility","visible");
			
			
		});
		
		//$("#re").css("visibility","hidden");
	   
		//document.getElementById("loader").style.visibility = "visible";
		//var url = script_url+"?action=read";

		//$.getJSON(url, function (json) {

		// Set the variables from the results array
	   
	   
	  

			// CREATE DYNAMIC TABLE.
			//var table = document.createElement("table");

			

			//var header = table.createTHead();
			//var row = header.insertRow(0);     
			//var cell1 = row.insertCell(0);
			//var cell2 = row.insertCell(1);
			//var cell3 = row.insertCell(2);
			//var cell4 = row.insertCell(3);
		
			//cell1.innerHTML = "<b>ID</b>";
			//cell2.innerHTML = "<b>FirstName</b>";
			//cell3.innerHTML = "<b>LastName</b>";
			//cell4.innerHTML = "<b>Sex</b>";
			
			// ADD JSON DATA TO THE TABLE AS ROWS.
			//for (var i = 0; i < json.records.length; i++) {

				//tr = table.insertRow(-1);
					//var tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].ID;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].firstNAME;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].lastNAME;
					//tabCell = tr.insertCell(-1);
					//tabCell.innerHTML = json.records[i].SEX;
				//}
		  

			// FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
			//var divContainer = document.getElementById("showData1");
			//divContainer.innerHTML = "";
			//divContainer.appendChild(table);
			//document.getElementById("loader").style.visibility = "hidden";
			//$("#re").css("visibility","visible");
			
			
		
		//});
	}
	
	

window.addEventListener('load', read_value)
	
	
	
	
	
	