// finding largest no.

#include<iostream>
using namespace std;

int main(){
    system("cls");
    int ans= INT_MIN;
    int arr[5]={4,6,11,2,8};
    for(int i=0;i<5;i++)
    if(arr[i]>ans)
    ans=arr[i];
    cout<<ans;
}