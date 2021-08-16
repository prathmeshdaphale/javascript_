const calculation = () =>{
    let amt = document.getElementById('tot_bill').value;
    
    let parcente = document.getElementById('service').value;

    let people = document.getElementById('bill_share').value;

    let tip = amt * parcente /people ;
    tip = Math.round(tip*100)/100;
    document.getElementById('tip_out').innerHTML=tip;
}
    