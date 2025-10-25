#include<iostream>
using namespace std;

int main(){
    system("cls");
    int i=1,sum=0,n;
    cout<<"Enter anu Number:";
    cin>>n;
    do{
        sum = sum + i;
        i++;
    }
    while(i<=n);
    cout<<"Sum is: "<<sum;  // Print final sum outside the loop
}
