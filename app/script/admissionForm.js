const studentName = document.getElementById('student-name');
const dob = document.getElementById('date-of-birth');
const gender = document.querySelector('input[type="radio"][name="1-gender"]');
const bloodGroup = document.getElementById('blood');
const religion = document.getElementById('religion');
const nationality = document.getElementById('nationality');
const otherInformation = document.getElementById('other-information');
const admissionFor = document.getElementById('admission-for');
const previousSchool = document.getElementById('previous-school');
const fatherName = document.getElementById('father-name');
const fatherContact = document.getElementById('father-contact');
const motherName = document.getElementById('mother-name');
const motherContact = document.getElementById('mother-contact');
const guardianName = document.getElementById('guardian-name');
const guardianContact = document.getElementById('guardian-contact');
const guardianRelation = document.getElementById('guardian-relation');


document.querySelector('button[type="submit"]').addEventListener('click', async (e)=>{
    e.preventDefault();
    console.log("hi")
    let selectedGender
    var ele = document.getElementsByName('1-gender');
 
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            selectedGender = ele[i].value;
}
    const studentData = {
        studentName: studentName.value,
        dob: dob.value,
        gender: selectedGender,
        bloodGroup: bloodGroup.value,
        religion: religion.value,
        nationality: nationality.value,
        otherInformation: otherInformation.value,
        admissionFor: admissionFor.value,
        previousSchool: previousSchool.value,
        fatherName: fatherName.value,
        fatherContact: fatherContact.value,
        motherName: motherName.value,
        motherContact: motherContact.value,
        guardianName: guardianName.value,
        guardianContact: guardianContact.value,
        guardianRelation: guardianRelation.value
    }
    console.log(studentData)

    try {
        const response = await fetch('http://localhost:3001/admissions', {
            method: 'POST',
            body: JSON.stringify(studentData),
            headers: {
                "Content-Type": "application/json",
              },
        });

        const data = await response.json();
        console.log(data); // Handle the server's response
    } catch (error) {
        console.error('Error:', error);
    }

});