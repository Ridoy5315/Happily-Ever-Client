//react select options
//select for biodata type
export const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

//select for height
export const heightFeetOptions = Array.from({ length: 8 }, (_, i) => ({
  value: `${i + 1} feet`,
  label: `${i + 1} feet`,
}));
export const heightInchesOptions = Array.from({ length: 12 }, (_, i) => ({
  value: `${i + 1} inches`,
  label: `${i + 1} inches`,
}));
//select for weight
export const weightOptions = Array.from({ length: 100 - 40 + 1 }, (_, i) => ({
  value: `${40 + i} kg`,
  label: `${40 + i} kg`,
}));

//select for biodata type
export const raceOptions = [
     { value: "black", label: "Black" },
     { value: "brown", label: "Brown" },
     { value: "white", label: "White" },
];
//select for permanent division name
export const permanentDivisionNameOptions = [
     { value: "dhaka", label: "Dhaka" },
     { value: "chattagram", label: "Chattagram" },
     { value: "rangpur", label: "Rangpur" },
     { value: "barisal", label: "Barisal" },
     { value: "khulna", label: "Khulna" },
     { value: "mymensingh", label: "Mymensingh" },
     { value: "sylhet", label: "Sylhet" },
];
//select for present division name
export const presentDivisionNameOptions = [
     { value: "dhaka", label: "Dhaka" },
     { value: "chattagram", label: "Chattagram" },
     { value: "rangpur", label: "Rangpur" },
     { value: "barisal", label: "Barisal" },
     { value: "khulna", label: "Khulna" },
     { value: "mymensingh", label: "Mymensingh" },
     { value: "sylhet", label: "Sylhet" },
];

//select for occupation
export const occupationOptions = [
  { value: "Student", label: "Student" },
  { value: "Software Engineer", label: "Software Engineer" },
  { value: "Web Developer", label: "Web Developer" },
  { value: "Machine Learning Engineer", label: "Machine Learning Engineer" },
  { value: "Doctor", label: "Doctor" },
  { value: "Nurse", label: "Nurse" },
  { value: "Psychologist", label: "Psychologist" },
  { value: "Marketing Manager", label: "Marketing Manager" },
  { value: "Business Analyst", label: "Business Analyst" },
  { value: "Photographer", label: "Photographer" },
  { value: "Teacher", label: "Teacher" },
  { value: "Tutor", label: "Tutor" },
  { value: "Painter", label: "Painter" },
  { value: "Physicist", label: "Physicist" },
  { value: "Lawyer", label: "Lawyer" },
  { value: "Police Officer", label: "Police Officer" },
  { value: "Journalist", label: "Journalist" },
  { value: "Content Creator", label: "Content Creator" },
  { value: "Pilot", label: "Pilot" },
  { value: "Social Worker", label: "Social Worker" },
  { value: "Fitness Trainer", label: "Fitness Trainer" },
  { value: "Architect", label: "Architect" },
  { value: "Lawyer", label: "Lawyer" },
];

// style for react select input
export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "white",
    border: state.isFocused ? "1px solid #F7E7CE" : "",
    padding: "1px",
    width: "100%",
    borderRadius: "6px",
    boxShadow: state.isFocused ? "none" : "none",

    "margin-top": "8px",
    "&:hover": {
      borderColor: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    zIndex: 9999,
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? "#F7E7CE" : isFocused ? "#d4bb6c" : "white",
    color: isSelected || isFocused ? "white" : "black",
    padding: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d4bb6c",
      color: "white",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};
