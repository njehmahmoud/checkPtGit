  
function myFunction(){
    let lValues = document.getElementsByClassName("value");
    let lQte = document.getElementsByClassName("quantity"); 
    let s=0;
    liste = [];
    for(let i = 0 ; i < lValues.length ; i++){
        s=(lValues[i].innerHTML)*(lQte[i].value)
        this.liste.push(s);  
        }
        document.getElementById("pricing1").innerHTML = this.liste[0].toFixed(2);
        document.getElementById("pricing2").innerHTML = this.liste[1].toFixed(2);

         this.getPrixPanierHt= function()
        {
            let total = 0;
            for(let i = 0 ; i < this.liste.length ; i++)
                total += this.liste[i];
            return total.toFixed(2);
        }
         this.getPrixPanierTax =function()
        {
            let total = 0;
            for(let i = 0 ; i < this.liste.length ; i++)
                total += (this.liste[i]*0.2);
            return total.toFixed(0);
        }
  
    document.getElementById("sub-total").innerHTML = getPrixPanierHt();
    document.getElementById("tax-total").innerHTML = getPrixPanierTax();
    document.getElementById("grand-total").innerHTML = parseInt(getPrixPanierTax())+parseInt(getPrixPanierHt());
     return 0
}
function fonctionRemove(element){
   let elem = this.querySelector("div")
    elem.remove();
    myFunction()
}







