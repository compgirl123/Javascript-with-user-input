

function output() 
        {
		    var xhtml = document.getElementById("xhtml").value;
			var alert_total  ="";
			
			if(xhtml==""||xhtml.search(/^\d+$/))
			{
				alert_total+="\n"+"Please enter a valid quantity for xhtml";
				var xhtml_total_cost =0;
				var xhtml_quantity = 0;
				document.getElementById("quan_xhtml").innerHTML = "Basic XHTML(Quantity= "+ xhtml_quantity+"): $"+xhtml_total_cost;
			}
			else
			{
				var xhtml_total_cost =
			xhtml*19.99;
			document.getElementById("quan_xhtml").innerHTML = "Basic XHTML(Quantity= "+ xhtml+"): $"+xhtml_total_cost;
				
			}
			
			var php = document.getElementById("php").value;
			
			if(php==""||php.search(/^\d+$/))
			{
				alert_total+="\n"+"Please enter a valid quantity for php";
				var php_total_cost =0;
				var php_quantity= 0;
				document.getElementById("quan_php").innerHTML = "Intro to PHP(Quantity= "+ php_quantity+"): $"+php_total_cost;	
			}
			else
			{
				var php_total_cost =
			php*86.00;
			
			document.getElementById("quan_php").innerHTML = "Intro to PHP(Quantity= "+ php+"): $"+php_total_cost;	
			}
			
		
			var jquery= document.getElementById("jquery").value;
			
			if(jquery==""||jquery.search(/^\d+$/))
			{
				alert_total+="\n"+"Please enter a valid quantity for jquery";
				var jquery_total_cost =0;
				var jquery_quantity =0;
				document.getElementById("quan_jquery").innerHTML = "Advanced JQuery(Quantity= "+jquery_quantity+"): $"+jquery_total_cost;
			}
			else
			{
				var jquery_total_cost = jquery*55.00;
			
			document.getElementById("quan_jquery").innerHTML = "Advanced JQuery(Quantity= "+jquery+"): $"+jquery_total_cost;
			}
			
			if(alert_total=="")
			{
				
			}
			else{
			alert(alert_total);
			}
			
			
		   var total_price = xhtml_total_cost+php_total_cost+jquery_total_cost;
			
			document.getElementById("total_cost").innerHTML = "Final Total: $" +total_price;
		
			
		}