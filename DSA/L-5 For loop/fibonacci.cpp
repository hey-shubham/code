// fibonacci series using for loop

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n;
    cout<<"Enter the number of terms: ";
    cin>>n;
    int a=0, b=1, c;
    cout<<"Fibonacci Series: "<<endl;
    for(int i=1;i<=n;i++)
    {
        cout<<a<<endl;
        c=a+b;
        a=b;
        b=c;
    }
    return 0;
}