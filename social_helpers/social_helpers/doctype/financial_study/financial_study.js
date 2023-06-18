frappe.ui.form.on('Financial Study', {
	validate: function(frm){
		refresh_field("monthly_expenses_sum");

		let medics = frm.doc.medications_table

        let total_med = 0;
        for(let i in medics){
			let row = medics[i]
            let med = row.box_number_monthly * row.price;
    	    total_med += med;       
        } 
        frm.set_value('income_sum' , total_med);
    }
})

frappe.ui.form.on('Income with in the family', {
	amount_given_to_family: function(frm) {
        let fam_total = 0
        frm.doc.sources_with_in_the_family.forEach(function(d) {
            fam_total += d.amount_given_to_family
        });
        // frappe.msgprint('total:'+ fam_total)
		frm.set_value('income_sum' , fam_total);
		refresh_field("income_sum");
    }
})

frappe.ui.form.on('External Income source', {
	refresh: function(frm) {
        let external = frm.doc.external_income_source
        frappe.msgprint('Helo' + external);
        // frappe.msgprint('SUM: ' + frm.doc.medication_price_sum);
        let total = 0;
        // for(let i in external){
            // let d = external[i]
            // frappe.msgprint('d: '+d);
    	   // total += amount;       
        // } 
        frappe.msgprint('total:' + total);
        // frm.set_value('medication_price_sum' , total_med);
    }
})

frappe.ui.form.on('Medications', {
	refresh(frm) {
		// your code here
	}
})