
function myFunction(){
    var input= document.getElementById("input").value;
    var output = document.getElementById("output");
    var remove_space =input.replace(/\s+/g,' ');
    var remove_line=remove_space.replace(/[\r\n]+/g, '\n');

    
        var text = '';
        var total=0;
        for (var i = 0; i < remove_line.length; i++) {
           
          if(remove_line[i]=="\n"){
            total=0;
            text +="\n";
          }
          else if(remove_line[i]==' '){
             total+=1;
             if (total==10) 
             {
                 text +="\n";
                 total=0;
                 continue;
             } 
             text += remove_line[i];
           }
           else{
             text += remove_line[i];
           }  
        }    
     output.innerHTML= text;
}
