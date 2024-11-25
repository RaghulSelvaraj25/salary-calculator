document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    var hourlyWage = parseFloat(document.getElementById('hourlyWage').value);
    var hourlyWork = parseFloat(document.getElementById('hoursWorked').value);

    
    if (isNaN(hourlyWage) || isNaN(hourlyWork) || hourlyWage <= 0 || hourlyWork <= 0) {
        alert("Please enter valid hourly wage and hours worked.");
        return;
    }

    var weeklySalary = hourlyWage * hourlyWork;
    var monthlySalary = weeklySalary *4;
    var yearlySalary =monthlySalary *12;


    
    document.getElementById('result').innerHTML = `<div class ="alert alert-success">
    <strong>Salary Breakdown:<strong><br>
    <strong>Weekly Salary:</strong> ${weeklySalary}<br>
    <strong>Monthly Salary:</strong> ${monthlySalary}<br>
    <strong>Yearly Salary:</strong> ${yearlySalary}
    </div>`;

});

