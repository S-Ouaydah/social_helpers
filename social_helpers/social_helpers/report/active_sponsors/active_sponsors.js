frappe.query_reports["Active Sponsors"] = {
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
