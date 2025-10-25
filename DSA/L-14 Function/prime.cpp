#include<iostream>
using namespace std;

bool prime(int   n)
{
    if(n<2)
    {
        cout<<"not prime no.";
    }
    for(int i=2;i<n;i++)
    {
        if(n%i==0)
        cout<<"not prime no.";
    }
   cout<<"Prime no.";
}

int main()
{
    system("cls");
    int a; 
    cout<<"Enter any number: ";
    cin>>a;

    // Function call
    cout<<prime(a);
};