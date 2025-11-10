// ===================== Student Data =====================
let students = [
  { id: 1, name: "Aleeza", age: 20, course: "Web Development" },
  { id: 2, name: "Myra", age: 19, course: "AI & ML" },
  { id: 3, name: "Hamza", age: 21, course: "Data Science" }
];

// ===================== Display Students =====================
const displayStudents = (list = students) => {
  const container = document.getElementById("student-container");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>No students found.</p>";
    return;
  }

  list.forEach(student => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>ID:</strong> ${student.id}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <p><strong>Course:</strong> ${student.course}</p>
      <div class="card-buttons">
        <button class="edit-btn" onclick="editStudent(${student.id})">Edit</button>
        <button class="delete-btn" onclick="deleteStudent(${student.id})">Delete</button>
      </div>
    `;
    container.appendChild(card);
  });
};

// ===================== Add Student =====================
const addStudent = () => {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const course = document.getElementById("course").value.trim();

  if (!name || !age || !course) {
    alert("Please fill all fields!");
    return;
  }

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    age: parseInt(age),
    course
  };

  students.push(newStudent);
  displayStudents();

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
};

// ===================== Edit Student =====================
const editStudent = id => {
  const student = students.find(s => s.id === id);
  if (!student) return;

  const name = prompt("Enter new name:", student.name);
  const age = prompt("Enter new age:", student.age);
  const course = prompt("Enter new course:", student.course);

  if (name && age && course) {
    student.name = name;
    student.age = parseInt(age);
    student.course = course;
    displayStudents();
  }
};

// ===================== Delete Student =====================
const deleteStudent = id => {
  students = students.filter(s => s.id !== id);
  displayStudents();
};

// ===================== Search Filter =====================
document.getElementById("search").addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  displayStudents(students.filter(s => s.name.toLowerCase().includes(term)));
});

// ===================== Theme Toggle =====================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const applyTheme = theme => {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);
  themeIcon.className = isDark ? "bi bi-sun" : "bi bi-moon";
};

// ===================== Initialize =====================
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("themeMode") || "light";
  applyTheme(savedTheme);
  displayStudents();

  // add button listener (if module type ho to bhi chale)
  document.querySelector("button[onclick='addStudent()']")?.addEventListener("click", addStudent);
});

themeToggle.addEventListener("click", () => {
  const current = localStorage.getItem("themeMode") || "light";
  const next = current === "light" ? "dark" : "light";
  localStorage.setItem("themeMode", next);
  applyTheme(next);
});
