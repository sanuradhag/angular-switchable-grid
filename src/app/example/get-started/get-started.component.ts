import { Component } from '@angular/core';
//import 'codemirror/mode/go/go'

@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  public config: any;
  public content: string;

  constructor() {
    this.config = {lineNumbers: true, mode: 'text/x-go'};
    this.content = `// ... some code !
package main

import "fmt"

// Send the sequence 2, 3, 4, ... to channel 'ch'.
func generate(ch chan<- int) {
	for i := 2; ; i++ {
		ch <- i  // Send 'i' to channel 'ch'
	}
}`;
  }
}
