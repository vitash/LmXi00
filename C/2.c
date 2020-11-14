#include<stdio.h>
void staticTest();
void FnStaticVar();

int main() {
    staticTest();
}

void staticTest() {
    FnStaticVar();
    FnStaticVar();
    FnStaticVar();
}

void FnStaticVar() {
    static int a = 0;
    a++;
    printf("-- %d\n", a);
}