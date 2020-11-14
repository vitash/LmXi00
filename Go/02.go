package main

import (
	"fmt"
	"time"
)

type Point3D struct{
	X int
	Y int
	Z int
}

func main() {
	defer1()
}

func select1(){
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 20; i++ {
			fmt.Println("<-c",<-c)
		}
		fmt.Println("quit <- 0")
		quit <- 0
	}()
	// go func(){
	// 	quit <- 0
	// }()

	fibonacci(c, quit)
	fmt.Println("gg")
}

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for i := 0; i < 8; i++ {
		fmt.Println("iiiiiiiiiiiii")
		time.Sleep(1000 * time.Millisecond)
		// select 当多个分支准备好时随机执行
		select {
		case c <- x:
			x, y = y, x+y
		case c <- 10000000 + x:
			x, y = y, x+y
		// case true:
		// 	fmt.Println("11111111111111111")
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}

func select2(){
	tick := time.Tick(500 * time.Millisecond)
	boom := time.After(1800 * time.Millisecond)
	for {
		select {
		case <-tick:
			fmt.Println("\ntick")
		case <-boom:
			fmt.Println("\nBOOM!")
			return
		default:
			fmt.Print(" .")
			time.Sleep(100 * time.Millisecond)
		}
	}	
}

func defer1(){
	p1 := Point3D{1, 2, 3}
	defer fmt.Println(p1)
	defer fmt.Println(&p1)
	p1.X = 111
}