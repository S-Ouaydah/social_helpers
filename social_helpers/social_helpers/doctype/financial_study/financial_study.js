frappe.ui.form.on("Financial Study", {
  validate: function (frm) {
    let medics = frm.doc.medications_table;

    let total_med = 0;
    for (let i in medics) {
      let row = medics[i];
      let med = row.box_number_monthly * row.price;
      total_med += med;
    }
    frm.set_value("medication_price_sum", total_med);
    frm.set_value("monthly_expenses_sum", calculate_total_expenses(frm));

    refresh_field("medication_price_sum");
    refresh_field("monthly_expenses_sum");
  },
});

frappe.ui.form.on("Income with in the family", {
  amount_given_to_family: function (frm) {
    calculate_total_income(frm);
  },
});

frappe.ui.form.on("External Income source", {
  amount: function (frm) {
    calculate_total_income(frm);
  },
});

function calculate_total_income(frm) {
  let total = 0;
  frm.doc.sources_within_the_family.forEach(function (d) {
    total += d.amount_given_to_family;
  });
  frm.doc.other_sources.forEach(function (d) {
    total += d.amount;
  });
  frm.set_value("income_sum", total);
  refresh_field("income_sum");
}
function calculate_total_expenses(frm) {
  let total = 0;
  total += frm.doc.food;
  total += frm.doc.cloth;
  total += frm.doc.transport;
  total += frm.doc.gas;
  total += frm.doc.electricity_bill;
  total += frm.doc.house_expenses;

  return total;
}
