({
    myAction : function(component, event, helper) {

    },
    showLead : function(component, event, helper) {
        var leadName = event.getParam("leadName");
        var leadSurname = event.getParam("leadSurname");
        component.set("v.leadName", leadName);
        var list = component.get("v.leadList")
        list.push({Name : leadName, Surname: leadSurname});
        component.set("v.leadList", list );
    }
})
