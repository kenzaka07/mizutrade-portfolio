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
	
	

	
	
	

  
 
	
	
	let googleUserName = "Tagli" //$("#lname").val();
	
//READ JSON data ON LOAD
  
	function read_value() {

		$("#re").css("visibility","hidden");
	   
		document.getElementById("loader").style.visibility = "visible";
		var url = script_url+"?action=read";
		
		

		$.getJSON(url, function (json) {
		
			let appUser = json.records.filter(filterName);
			
			function filterName(x){
			  return x.lastName == googleUserName
			}

			
			if (appUser[0].firstName != "") {
				document.getElementById("welcome-user-data").innerHTML = appUser[0].firstName;
			}else if (appUser[0].lastName != "") {
				document.getElementById("welcome-user-data").innerHTML = appUser[0].lastName;
			}else {
				document.write("Error: No User in the database");
			};

			
			
	
			//Account Name Template
		
			document.getElementById('main').innerHTML = `
		
				${appUser.map(function(user) {
					return `
						<div id="accounts${user.accountType}" class="accounts" data-name="${user.accountType}">
							<section class="account-balance" data-name="${user.accountType}">
								<h2 id="accountname" class="accountname" data-name="${user.accountType}">${user.accountType}</h2>
								<h1 data-name="${user.accountType}"><strong data-name="${user.accountType}">Account Name</strong></h1>
							</section>
							<span id="account-holdings-data" data-name="${user.accountType}">
								${new Intl.NumberFormat('en-CA', {style: 'currency' , currency: 'PHP', useGrouping: true}).format(user.accountHoldings)}

							</span>
							
						</div>
						


						
					`
					
					
				}).join('')}			
				
			`
			
	
				var accounts = document.querySelector(".main");

				accounts.addEventListener("click", function(e){

				let viewAccountType = e.target.dataset.name
				console.log(viewAccountType);
				
				//alert("Account Name: " + e.target.dataset.name);
				
				});
			
			
			


			
			//LOADER 	

			document.getElementById("loader").style.visibility = "hidden";
			$("#re").css("visibility","visible");
			
		});
		
	};
	
	
	window.addEventListener('load', read_value);
	

//REFRESH VALUES	
	
	
	function refresh_value() {

		//$("#re").css("visibility","hidden");
	   
		document.getElementById("loader").style.visibility = "visible";
		var url = script_url+"?action=read";
		
		

		$.getJSON(url, function (json) {
		
			let appUser = json.records.filter(filterName);
			
			function filterName(x){
			  return x.lastName == googleUserName
			}

			
			if (appUser[0].firstName != "") {
				document.getElementById("welcome-user-data").innerHTML = appUser[0].firstName;
			}else if (appUser[0].lastName != "") {
				document.getElementById("welcome-user-data").innerHTML = appUser[0].lastName;
			}else {
				document.write("Error: No User in the database");
			};

			
			
			
	
			//Account Name Template
		
			document.getElementById('main').innerHTML = `
		
				${appUser.map(function(user) {
					return `
						<div id="accounts${user.accountType}" class="accounts" data-name="${user.accountType}">
							<section class="account-balance" data-name="${user.accountType}">
								
								<h2 id="accountname" class="accountname" data-name="${user.accountType}">${user.accountType}</h2>
								<h1 data-name="${user.accountType}"><strong data-name="${user.accountType}">Account Name</strong></h1>
							</section>
							<span id="account-holdings-data" data-name="${user.accountType}">
								${new Intl.NumberFormat('en-CA', {style: 'currency' , currency: 'PHP', useGrouping: true}).format(user.accountHoldings)}
							</span>
						</div>
						


						
					`
					
					
				}).join('')}			
				
			`
			
	

			


			
			//LOADER 	
			
			document.getElementById("loader").style.visibility = "hidden";
			//$("#re").css("visibility","visible");
			
		});
		
	};
	