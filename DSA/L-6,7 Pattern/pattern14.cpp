#include<iostream>
using namespace std;

int main(){
    system("cls");
    char name='a';
    for(int i=1;i<=5;i++)
        {
            for(int j=1;j<=i;j++)
            cout<<name<<" ";
            name+=1;
            cout<<endl;
        }
    return 0;
} 