#include<iostream>
using namespace std;

int sum(int m, int n)    // Function declare
{
    int ans=m+n;         // Function define 
    return ans;
}

int mul(int m, int n)   // Function declare
{
    int ans=m*n;        // Function define 
    return ans;
}

void fun()
{
    cout<<"Hello Shubham\n";
}

int main()
{
    system("cls");
    int a,b;
    cout<<"Enter two number: ";
    cin>>a>>b;

    // FUnction call
    cout<<"Sum of a and b is: "<<sum(a,b)<<endl;
    cout<<"Product of a and b is: "<<mul(a,b)<<endl;

    fun();
};  