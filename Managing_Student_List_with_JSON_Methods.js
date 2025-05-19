function manageStudents() {
    let students = ["Aarav", "Bhavna", "Chirag"];

    function addStudent(name, index) {
        if (index >= 0 && index <= students.length) {
            students.splice(index, 0, name);
        } else {
            console.log(`Invalid index ${index} for adding ${name}`);
        }
    }

    function isStudentPresent(name) {
        return students.includes(name);
    }

    function getStudentList() {
        return students.join(",");
    }

    // === Test Cases ===

    addStudent("Deepak", 1); // Add at middle
    addStudent("Esha", 0);   // Add at beginning
    addStudent("Farhan", students.length); // Add at end
    addStudent("Garima", 10); // Invalid index test

    console.log("Is Esha present?", isStudentPresent("Esha"));       // true
    console.log("Is Gauri present?", isStudentPresent("Gauri"));     // false
    console.log("Final student list:", getStudentList()); // Esha,Aarav,Deepak,Bhavna,Chirag,Farhan
}

manageStudents();
