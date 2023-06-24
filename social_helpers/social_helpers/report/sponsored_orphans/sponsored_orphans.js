frappe.query_reports["Test 123"] = {
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
