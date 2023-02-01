
var marks = [85, 66, 95, 56, 40];
if (marks[0] >= 80 || marks[1] >=80 || marks[2] >= 80 || marks[3] >=80 || marks[4] >=80)
{
    console.log(marks[1] && 'your grade is A');
    
    
}
else if(marks[0] >= 60 || marks[1] >=60 || marks[2] >= 60 || marks[3] >=60 || marks[4] >=60)
{
    console.log(marks[0] && 'your grade is B');
    
}
else if (marks[0] >= 50 || marks[1] >=50 || marks[2] >= 50 || marks[3] >=50 || marks[4] >=50)
{
    console.log(marks[0] && 'your grade is C');
    
}
else if (marks[0] >= 40 || marks[1] >= 40 || marks[2] >= 40 || marks[3] >=40 || marks[4] >=40)
{
    console.log(marks[0] && 'your grade is D');
}   
else 
{
    console.log('you have failed.');
}