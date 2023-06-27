frappe.query_reports["Non Sponsored Orphans"] = {
  filters: [
    {
      fieldname: "gender",
      label: __("Gender"),
      fieldtype: "Select",
      options: [
        { value: "Male", label: __("Male") },
        { value: "Female", label: __("Female") },
      ],
      default: "Male",
    },
    {
      fieldname: "date_on",
      label: __("On"),
      fieldtype: "Date",
      options: "",
      default: "Today",
    },
  ],
};
