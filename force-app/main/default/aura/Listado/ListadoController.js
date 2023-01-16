({
    myAction : function(component, event, helper) {

    },
    showLead : function(component, event, helper) {
        var lead = event.getParam("lead");
        component.set("v.leadName", lead);
    }
})
