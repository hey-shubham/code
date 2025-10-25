#include<iostream>
#include<math.h>
using namespace std;

int countdigit(int n)
{
    int count=0;
    while(n){
        count++;
        n/=10;
    }
    return count;
}

bool Armstrong(int num, int digit)
{
    int n=num, ans=0, rem;
    while(n)
    {
        rem=n%10;
        n/=10;
        ans= ans+(int)pow(rem,digit);
    }

    if(ans==num)
    return 1;
    else
    return 0;
}

int main()
{
    system("cls");
    int num;
    cout<<"Enter any number: ";
    cin>>num;

    // count digit
    int digit=countdigit(num);
    // Armstrong no.
    cout<<Armstrong(num,digit);
}