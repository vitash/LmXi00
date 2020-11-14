#include<stdio.h>
void swap(int *a, int *b);
void printArr(int *arr, int len);
void reverseArr();
int arrn(int n, int arr[n][n], int i, int j);

int main() {
    short a = 0b11;
    printf("%d", a >> 1);
    printf("\n%d", !0);
}

int arrn(int n, int arr[n][n], int i, int j) {
    return arr[i][j];
}

void reverseArr() {
    int arr[5] = {1,2,3,4,5};
    for (int i1 = 0, i2 = 4; i1 < i2 ; i1++, i2--) {
        swap(&arr[i1], &arr[i2]);
    }
    printArr(arr, 5);
}

void printArr(int *arr, int len) {
    for (int i = 0; i < len; i++) {
        printf("%d, ", arr[i]);
    }
}

void swap(int *a, int *b) {
    *a = *a ^ *b;
    *b = *a ^ *b;
    *a = *a ^ *b;
}