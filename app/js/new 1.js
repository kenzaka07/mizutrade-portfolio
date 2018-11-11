			//FOR Script
			for (var i = 0; i < appUser2.length; i++) {
			
				tr = table.insertRow(-1);
					var tabCell = tr.insertCell(-1);
					tabCell.innerHTML = json.records[i].ID;
					tabCell = tr.insertCell(-1);
					tabCell.innerHTML = json.records[i].firstNAME;
					tabCell = tr.insertCell(-1);
					tabCell.innerHTML = json.records[i].lastNAME;
					tabCell = tr.insertCell(-1);
					tabCell.innerHTML = json.records[i].SEX;
				}
			
			var divNew2 = document.createElement('div')
			
			var divContainer = document.getElementById('main');
			divContainer.innerHTML = new Intl.NumberFormat('en-CA', {style: 'currency' , currency: 'PHP', useGrouping: true}).format(appUser[0].HOLDINGS);
			divContainer.appendChild(divNew2);
					
			
			
			//END of FOR Script
			
			//$(function() {
			//  $(appUser2).each(function(i, item){
			//	$("#account-holdings-data").append(item.HOLDINGS);
			//  });
			//});
			
			
			
			
	//		function _renderPosts (posts) {
	//			posts.forEach(function (post) {
	//				const article = document.createElement('article');
	//				article.innerHTML = `
	//					<h2>${post.title}</h2>
	//					<div class="article-details">
	//						<div>By ${post.author} on ${_formatDate(post.timestamp)}</div>
	//					<div>Posted in ${post.category}</div>
	//					</div>
	//					${_formatContent(post.content)}
	//				`;
	//				page.container.appendChild(article);
	//			});
	//		}
	
	
	
	
	
	
				
			
			let divNew = document.createElement('div').innerHTML = `
					<div id="accounts" class="holdings">
						<section class="account-balance">
							<h1 id="accountname">Lightchain Capital</h1>
						</section>
						<span id="account-holdings-data">`+ new Intl.NumberFormat('en-CA', {style: 'currency' , currency: 'PHP', useGrouping: true}).format(appUser[0].HOLDINGS) +`</span>
					</div>
				`;
			div.appendChild(divNew);
			
			
			
			
							var accountid = document.getElementsByClassName("accounts");
								console.log(accountid)
								
								Object.entries(accountid).map((object) => { console.log(object) 
									
								});
								
								
								
								 
								
								/* Add event listeners to all elements by hand */
								accountid[0].addEventListener("click", function() {
									console.log("Hello (" + this.innerHTML + ") from event listener [0]");
									/* Here, "this" refers to 1st div */
								});
								accountid[1].addEventListener("click", function() {
									console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [1]");
									/* Here, "this" refers to 2nd div */
								});
								accountid[2].addEventListener("click", function() {
									console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [2]");
									/* Here, "this" refers to 3rd div */
								
								
								
								

								//accountnameclass.addEventListener("click", function(e){
								//alert("Available name: " + e.target.dataset.accountname);
							});	

							
							
							
							
							
							
							
							
							
								<script>
							 $('#accountname').click(function(){
								 console.log("appUser.accountType")
							})
						
						
						
							var accountname = document.querySelector(".accountname");
								console.log(accountname)

								accountname.addEventListener("click", function(e){
								alert("Available name: " + e.target.dataset.accountname);
							});		
						</script>