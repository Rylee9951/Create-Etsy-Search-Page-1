var main = document.querySelector('.rightColumn')

htmlStr = ""

items.results.forEach(function(item){
		htmlStr += `
					<div class="pics">
        		<a href="${item.url}">
		        <div>
		        	<img src="${unescape(item.Images[0].url_170x135)}"  />
		        </div>
		        <p class="truncate">${item.title}</p>
		        <p class="shop">${item.Shop.shop_name}</p> 
		        <p class="pri">$${item.price}</p>
        		</a>
       		</div>


		`




})

main.innerHTML = htmlStr











