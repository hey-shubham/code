#include<iostream>
using namespace std;

int main(){
    system("cls");
    
    int arr[5]={1,3,4,5,6};
    int sum=0;
    
    for(int i=0;i<5;i++)
        sum+=arr[i];
    
    // int n=sizeof(arr)/sizeof(arr[0])+1;
    // int n=5+1;
    int n=6;
    int total = n*(n+1)/2;
    cout<< total-sum ;

}