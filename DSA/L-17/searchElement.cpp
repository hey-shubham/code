#include<iostream>
using namespace std;
int main(){
    system("cls");

    int arr[6] = {10,20,40,30,60,50};
    int k=50;
    for(int i=0;i<6;i++){
        if(arr[i]==k){
            cout<<"Found at "<<i<<"th index";
            return 1;
        }
    }
    cout<<"Not Found";
    return 0;
}