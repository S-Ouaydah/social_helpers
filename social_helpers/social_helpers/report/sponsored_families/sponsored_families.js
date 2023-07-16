frappe.query_reports["Sponsored Families"] = {
  filters: [
    {
      fieldname: "date_on",
      label: __("On"),
      fieldtype: "Date",
      options: "",
      default: "Today",
    },
  ],
};
