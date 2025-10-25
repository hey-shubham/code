// Write a program to print first 10 multiples of 3 using for loop.

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n;
    cout<<"Enter a number: ";
    cin>>n;
    cout<<n*(n+1)/2<<endl;
    return 0;
}

// Another method

//  for(int i=1;i<=30;i+=3)
//     {
//         cout<<i<<endl;
//     }