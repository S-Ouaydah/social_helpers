// Copyright (c) 2023, muslims IT and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Orphan Script Report"] = {
	"filters": [
		{
			"fieldname":"nationality_orphan",
			"label": __("Nationality"),
			"fieldtype": "Select",
			"options": [
				"",
				{
					label: __("Lebanese"),
					value: "Lebanese",
				},
				{
					label: __("Syrian"),
					value: "Syrian",
				},
				{
					label: __("Palestinian"),
					value: "Palestinian",
				},
			]
		},
		{
			"fieldname":"city",
			"label": __("City"),
			"fieldtype": "Data",
		},
		{
			"fieldname":"region",
			"label": __("Region"),
			"fieldtype": "Data",
		},
		{
			"fieldname":"date_of_birth_orphan",
			"label": __("Date of Birth"),
			"fieldtype": "Date",
		},
		{
			"fieldname":"gender",
			"label": __("Gender"),
			"fieldtype": "Select",
			"options": [
				"",
				{
					label: __("Male"),
					value: "Male",
				},
				{
					label: __("Female"),
					value: "Female",
				},
			]
		},
		{
			"fieldname": "show_opening_entries",
			"label": __("Show Opening Entries"),
			"fieldtype": "Check"
		},
	]
};
