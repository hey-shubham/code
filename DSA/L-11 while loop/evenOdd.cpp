#include<iostream>
using namespace std;

int main(){
    system("cls");
    int n;
    cout<<"Enter any Number:";
    cin>>n;
    while(n%2==0)
        {
            cout<<"Even no";
            break;
        }
    while(n%2!=0)
        {
            cout<<"odd no.";
            break;
        }
    return 0;
}