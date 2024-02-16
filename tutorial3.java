// Uses-A relationship in Java

class Employee
{  
float salary=30000;  
}  
class Salary extends Employee
{
void disp()
{
float bonous=1000;
Employee obj=new Employee();
float Total=obj.salary+bonous;
System.out.println("Total Salary is:"+Total);  
}
}
class Developer
{ 
public static void main(String args[])
{
Salary s=new Salary();
s.disp();
}  
} 
