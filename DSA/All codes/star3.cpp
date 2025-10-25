#include<iostream>
using namespace std;
int main(){
    system("cls");
    int n=5;
    cin>>n;
    for(int i=n-1;i>=0;--i){
        cout<<n-i<<". ";
        for(int j=0;j<=i;j++)
            cout<<"  ";
        for(int j=0;j<n-i;j++)
            cout<<"* ";
        cout<<endl;
    }
}