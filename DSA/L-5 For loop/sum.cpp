// sum of n natural numbers using for loop

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n,sum=0;
    cout<<"enter any number: ";
    cin>>n;
    for(int i=1;i<=n;i++)
    {
        sum=sum+i;
    }
    cout<<"sum of first "<<n<<" natural numbers is "<<sum<<endl;
};