// factor of n
#include<iostream>
using namespace std;

int main(){
    system("cls");
    int n,i=1;
    cout<<"Enter any number:";
    cin>>n;
    while(i<=n)
    {
        if(n%i==0)
        {
        cout<<i<<" ";
        }
        i++;
    }
    return 0;
}
