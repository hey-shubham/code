#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n;
    cout<<"Enter any number:";
    cin>>n;
    for(int i=1;i<=n;i++)
        {
            if(n%i==0)
            {
                cout<<i<<" ";
            }
        }
    return 0;
}