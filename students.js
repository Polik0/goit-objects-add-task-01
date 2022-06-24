const students = [
  {
    name: "Леонардо",
    present: true,
  },
  {
    name: "Рафаель",
    present: false,
  },
  {
    name: "Мікеланджело",
    present: true,
  },
];

// console.table(students);

const checkPresence = function (name) {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student["name"] === name) {
      return student.present;
    }
  }
};

const isPresent = checkPresence("Леонардо");
if (isPresent === false) {
  console.log("Відсутній");
} else {
  console.log("Присутній");
}
