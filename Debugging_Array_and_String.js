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

    addStudent("Deepak", 1);
    addStudent("Esha", 0);
    addStudent("Farhan", students.length);

    console.log("Is Esha present?", isStudentPresent("Esha"));
    console.log("Is Gauri present?", isStudentPresent("Gauri"));
    console.log("Final student list:", getStudentList());
}

manageStudents();

//Is Esha present? true
//Is Gauri present? false
//Final student list: Esha,Aarav,Deepak,Bhavna,Chirag,Farhan
