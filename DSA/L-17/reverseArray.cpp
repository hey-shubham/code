#include<iostream>
using namespace std;

int main(){
    system("cls");

    int arr[]={1,2,3,4,5,6,7}, i=0, j=6;

    while(i<j){
        swap(arr[i],arr[j]);
        i++,j--;
    }
    
    for(int i=0;i<=6;i++)
    {
        cout<<arr[i]<<" ";
    }
}