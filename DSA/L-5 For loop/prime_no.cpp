// write a program to check whether a number is prime or not.

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n;
    cout<<"enter any number: ";
    cin>>n;
    if(n<2)
    {
        cout<<"not prime";
        return 0;
    }
    else
    {
        for(int i=2;i<n;i++)
        {
            if(n%i==0)
            {
                cout<<"not prime";
                return 0;
            }
        }
        cout<<"prime";
    }
};    