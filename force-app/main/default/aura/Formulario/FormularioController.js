({
    myAction : function(component, event, helper) {

    },
    createLead : function(component, event, helper) {
        // recuperamos el evento saveLead
        
        var action = $A.get("e.c:saveLead")
        // recuperamos los valores de los campos del formulario
        var name  = component.find("name").getElement().value;
        var surname  = component.find("surname").getElement().value;
        // asignamos los valores a los parámetros del evento
        action.setParams({
            "leadName": name,
            "leadSurname": surname
        });
        //disparamos el evento
        action.fire();
        
    }
})
