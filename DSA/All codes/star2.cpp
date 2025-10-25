#include<iostream>
using namespace std;
int main(){
    system("Cls");
    int m=4,n=6;
    for(int i=0;i<n;i++)
    {
    
        for(int j=0;j<=i;j++)
            cout<<"* ";
        cout<<endl;
    }
    for(int i=n-2;i>=0;i--)
    {
    
        for(int j=0;j<=i;j++)
            cout<<"* ";
        cout<<endl;
    }
}