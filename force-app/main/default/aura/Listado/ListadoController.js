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
    },
    clearList : function(component, event, helper) {
        component.set("v.leadList", []);
    },
    clearItem : function(component, event, helper) {
        var ctarget = event.currentTarget;
        var index = ctarget.dataset.value;
        console.log(index);
        if(index){
            var list = component.get("v.leadList");
            list.splice(index, 1);
            component.set("v.leadList", list);
        }
    }
    
})
