// power of a number using for loop

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n,pow,num;
    cout<<"enter any number: ";
    cin>>n;
    cout<<"enter power: ";
    cin>>pow;
    num=n;
    for(int i=1;i<=pow;i++)
    {
        num=num*n;
    }
    cout<<n<<" ^ "<<pow<<" = "<<num<<endl;
};