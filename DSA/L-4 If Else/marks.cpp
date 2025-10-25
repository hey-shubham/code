// Write a program to check whether a student has passed or failed based on their marks. 

#include<iostream>
using namespace std;

int main(){
    system("cls");
    int marks;
    cout<<"enter your marks: ";
    cin>>marks;
    if(marks>=33)
        cout<<"Pass";
    else
        cout<<"Fail";
};