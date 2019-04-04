let fields = document.querySelectorAll("#form-user-create [name]");
// Exemplo feito em aula.
fields.forEach((field, index)=>{
    if(field.name == "gender"){
        if(field.checked === true){
            console.log("Sim.", field.name, index);
        }else{
            console.log();
        };
       
    }else{
        console.log("Não.", field.name, index);
    };
});

//Exemplo feito em testes
/*
fields.forEach((field, index)=>{

    if (field.name == "gender"){
        if (field.checked === true){
            console.log("Sim", index, field.name, field.id);
        }else{

        }
    }else{

    }

    if (field.name !== "gender"){
    console.log("Não", index, field.name, field.id);
    }else{

    }    

});
*/