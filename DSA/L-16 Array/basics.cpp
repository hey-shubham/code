// print the values of given index

#include<iostream>
using namespace std;

int main(){
    system("cls");
   
    int val[10],i;
    cout<<"Enter any 10 no. : "<<endl;
   
    for(int i=0;i<10;i++)
    cin>>val[i];
    cout<<val[1];
}

// 1bit = 1 transistot
// 8bit = 1 byte
// 2^10byte = 1 Kb

// address  of int(index) = arr + index * size of data type
// address  of charactaer(index) = arr + index * size of data type