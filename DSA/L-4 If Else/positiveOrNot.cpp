#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n;
    cout<<"enter any number: ";
    cin>>n;
    if(n>0)
        {
        cout<<"it is a positive number."<<endl;
        }
    else if(n==0)
        {
        cout<<"zero."<<endl;
        }
    else
        {
        cout<<"it is a negative number."<<endl;
        }
};