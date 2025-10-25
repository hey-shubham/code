// Write a program to print first 10 multiples of a number entered by user using for loop.

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n;
    cout<<"enter any number: ";
    cin>>n;
    for(int i=1;i<=10;i++)
    {
        cout<<n<<" * "<<i<<" = "<<n*i<<endl;
    }
}