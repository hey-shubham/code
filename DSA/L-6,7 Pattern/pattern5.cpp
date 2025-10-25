#include<iostream>
using namespace std;

int main(){
    system("cls");
    char name = 'a';

    for(int row = 1; row <=5; row++){
        for(int i = 1; i <= 5; i++){
            cout<<name<<" ";
        }
        cout<<endl;
        name++;
    }
    return 0;
}