var students = [];
function saveRecord() {
    var name = document.getElementById('name').value;
    var math = document.getElementById('math').valueAsNumber;
    var english = document.getElementById('english').valueAsNumber;
    var urdu = document.getElementById('urdu').valueAsNumber;
    if (validate(name.trim(), math, english, urdu)) {
        addStudent(name.trim(), math, english, urdu);
        renderStudents();
        clearInputs();
    }
}
function validate(name, math, english, urdu) {
    var res = true;
    var name_msg = document.getElementById('name_msg');
    var math_msg = document.getElementById('math_msg');
    var english_msg = document.getElementById('english_msg');
    var urdu_msg = document.getElementById('urdu_msg');
    name_msg.innerText = '';
    math_msg.innerText = '';
    english_msg.innerText = '';
    urdu_msg.innerText = '';
    if (name.length == 0) {
        name_msg.innerText = 'Please Enter Name';
        res = false;
    }
    if (isNaN(math)) {
        math_msg.innerText = "Invalid number format";
        res = false;
    }
    else if (math < 0 || math > 100) {
        math_msg.innerText = "Marks should be entered between 0-100";
        res = false;
    }
    if (isNaN(english)) {
        english_msg.innerText = "Invalid number format";
        res = false;
    }
    else if (english < 0 || english > 100) {
        english_msg.innerText = "Marks should be entered between 0-100";
        res = false;
    }
    if (isNaN(urdu)) {
        urdu_msg.innerText = "Invalid number format";
        res = false;
    }
    else if (urdu < 0 || urdu > 100) {
        urdu_msg.innerText = "Marks should be entered between 0-100";
        res = false;
    }
    return res;
}
function addStudent(name, math, english, urdu) {
    var student = { name: name, math: math, english: english, urdu: urdu };
    students.push(student);
}
function renderStudents() {
    var studentsTable = document.getElementById('studentsTable');
    var html = '<table id="studentsTable" cellpadding="5" border="1">'
        + '<tr>'
        + '<th width="60px">S.No</th>'
        + '<th width="300px">Name</th>'
        + '<th width="100px">Math</th>'
        + '<th width="100px">English</th>'
        + '<th width="100px">Urdu</th>'
        + '<th width="100px">Total Marks</th>'
        + '<th width="100px">Percentage</th>'
        + '</tr>';
    for (var k = 0; k < students.length; k++) {
        var student = students[k];
        console.info(student.name + "," + student.math + "," + student.english + "," + student.urdu);
        html += '<tr>';
        html += '<td>' + (k + 1) + '</td>';
        html += '<td>' + student.name + '</td>';
        html += '<td>' + student.math + '</td>';
        html += '<td>' + student.english + '</td>';
        html += '<td>' + student.urdu + '</td>';
        html += '<td>' + (student.math + student.english + student.urdu) + '/300</td>';
        html += '<td>' + (((student.math + student.english + student.urdu) / 300) * 100).toFixed(2) + '%</td>';
        html += '</tr>';
    }
    html += '</table>';
    studentsTable.innerHTML = html;
}
function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('math').value = '';
    document.getElementById('english').value = '';
    document.getElementById('urdu').value = '';
}
