({
    myAction : function(component, event, helper) {

    },
    createLead : function(component, event, helper) {
        // recuperamos el evento saveLead
        
        var action = $A.get("e.c:saveLead")
        // recuperamos los valores de los campos del formulario
        var name  = component.find("name").getElement().value;
        // asignamos los valores a los parámetros del evento
        action.setParams({
            "lead": name
        });
        //disparamos el evento
        action.fire();
        
    }
})
