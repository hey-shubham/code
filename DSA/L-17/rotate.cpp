#include<iostream>
using namespace std;
int main(){
    system("cls");
    int arr[6]={10,20,30,40,50,60};
    int arr2[6];

    arr2[0]=arr[5];
    for(int i=1;i<6;i++)
        arr2[i] = arr[i-1];
    
    arr = arr2;
    for(int i=0;i<6;i++)
        cout<<arr2[i]<<" ";


    
}