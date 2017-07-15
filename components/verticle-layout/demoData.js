"use strict";

module.exports = [{
    code: "fn",
    label: "first name",
    type: "text",
    validation: /^[a-zA-Z]*$/,
    errorText: "First Name is not valid",
    weight: "1"
}, {
    code: "ln",
    label: "last name",
    type: "text",
    validation: /^[a-zA-Z]*$/,
    errorText: "Last Name is not valid",
    weight: "1"
}, {
    code: "e",
    label: "email",
    type: "text",
    validation: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    errorText: "Email is not valid",
    weight: "1"
}, {
    code: "dob",
    label: "Date of Birth",
    type: "date",
    validation: "",
    weight: "1"
}, {
    code: "gen",
    label: "Gender",
    type: "checkbox",
    options: ['male', 'female'],
    validation: "",
    weight: "1"
}, {
    code: "cn",
    label: "Contact Number",
    type: "number",
    validation: "/^\d+$/",
    weight: "1"
}, {
    code: "loc",
    label: "Location",
    id: "1",
    type: "dropdown",
    options: ["VIC", "NSW", "WA", "TAS", "SA"],
    validation: "",
    weight: "1"
}, {
    code: "From",
    label: "Location",
    id: "2",
    type: "dropdown",
    options: ["International", "Permanent Resident", "Citizen"],
    validation: "",
    weight: "1"
}, {
    code: "au",
    label: "Write Something About You",
    type: "textarea",
    validation: "",
    weight: "1"
}, {
    code: "mt",
    label: "Meeting Time",
    type: "time",
    validation: "",
    weight: "1"
}];