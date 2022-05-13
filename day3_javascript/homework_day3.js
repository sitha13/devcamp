//1.1
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) 
    text += '*';
    console.log(text);
}

//1.2
function draw(n) {
    text='';
    for (let j=0; j<n; j++){
    for (let i=0; i<n; i++)
    text += '*';
    text += '\n';}    
    console.log(text);
}

//1.3
function draw(n) {
    text = '';
    for (let i=0; i<n; i++){
    for (let j=0; j<n; j++)
    text += j+1;
    text += '\n';}   
    console.log(text);
}

//1.4
function draw(n) {
    text = '';
    for (let i=1; i<=n; i++){
    for (let j=1; j<=n; j++)
    text += i.toString();  
    text +='\n'}   
    console.log(text);
}

//1.5
function draw(n) {
    text = '';
    for (let i=n-1; i>=0; i--){
    for (let j=n-1; j>=0; j--)
    text += i+1;
    text += '\n';}   
    console.log(text);
}

//1.6
function draw(n) {
    text = '';
    for (let i=1; i<=n+1; i+=2){
    for (let j=0; j<n; j++)
    text += i+j;
    text += '\n';}   
    console.log(text);
}

//1.7
function draw(n) {
    text = '';
    for (let i=n*n; i>0; i-=n){
    for (let j=0; j<n; j++)
    text += i-j;
    text += '\n';}   
    console.log(text);
}

//1.8
function draw(n) {
    text = '';
    for (let i=0; i<=n; i+=2){
    text += i;
    text += '\n';}   
    console.log(text);
}

//1.9
function draw(n) {
    text = '';
    for (let i=2; i<=n*2; i+=2){
    text += i;
    text += '\n';}   
    console.log(text);
}

//1.10
function draw(n) {
    text = '';
    for (let i=1; i<n+1; i++){
    for (let j=1; j<n+1; j++)
    text += i*j;
    text += '\n';}   
    console.log(text);
}

//1.11
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) 
        {let k = (i == j) ? '-' : '*' ;
        text += k;}
    text += "\n";}
    console.log(text);
}

//1.12
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) 
        {let k = (i+j==n-1) ? '-' : '*' ;
        text += k;}
    text += "\n";}
    console.log(text);
}

//2.1
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) 
        {let k = (i<j) ? '-' : '*' ;
        text += k;}
    text += "\n";}
    console.log(text);
}

//2.2
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) 
        {let k = (i+j>=n) ? '-' : '*' ;
        text += k;}
    text += "\n";}
    console.log(text);
}

//2.3
function draw(n) {
    text = '';       
    for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) 
        {let x = (j > i) ? '-' : '*' ;
            text += x;}                       
        text += '\n';}

    for (let a=n-1; a>=1; a--) {
    for (let b=1; b<=n; b++) 
        {let y = (a >= b) ? '*' : '-' ;
            text += y;}                       
        text += '\n';}
     console.log(text);
}

//2.4
function draw(n) {
    text = "";
    for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i >= j) {
          text += i;
        } else {
          text += "-";
        }
      }
      text += "\n";
    }
  
    for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n; j++) {
        if (i < j) {
          text += "-";
        } else {
          text += i;
        }
      }
      text += "\n";
    }
    console.log(text);
  }

  //2.5
  function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) 
        {let k = (i+j<n-1) ? '-' : '*' ;
        text += k;}
    text += "\n";}
    console.log(text);
}

//2.6
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) 
        {let k = (i>j) ? '-' : '*' ;
        text += k;}
    text += "\n";}
    console.log(text);
}

//2.7
function draw(n) {
    text = '';       
    for (let i=1; i<=n; i++) {
    for (let j=1; j<=n; j++) 
        {let x = (i+j <= n) ? '-' : '*' ;
            text += x;}                       
        text += '\n';}

    for (let a=0; a<n-1; a++) {
    for (let b=0; b<=n-1; b++) 
        {let y = (a >= b) ? '-' : '*' ;
            text += y;}                       
        text += '\n';}
     console.log(text);
}

//2.8
function draw(n) {
    let text = '';
    let and = 1; 
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'Number') {
                and++;
            }
        }                       
        text += "\n";        
    }      
    for (let i=2; i<=n; i++) {
        for (let j=1; j<=n; j++) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'Number') {
                and++;
            }                                   
        }                       
        text += "\n";        
    }
    console.log(text);
}

//2.9
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=n-1; j>=0; j--) 
    {let k = (j > i) ? '-' : '*' ;
            text += k;}
    for (let j=1; j<n; j++) 
    {let k = (j > i) ? '-' : '*' ;
            text += k;}
            text += "\n"; 
        }
    console.log(text);
}

//2.10
function draw(n) {
    text = '';
    for (let i=n-1; i>=0; i--) {
    for (let j=0; j<n; j++) 
    {let k = (i+j >= n-1) ? '*' : '-' ;
            text += k;}
    for (let j=n-2; j>=0; j--) 
    {let k = (i+j >= n-1) ? '*' : '-' ;
            text += k;}
            text += "\n"; 
        }
    console.log(text);
}

//3.1
function draw(n) {
    text = '';
    for (let i=0; i<n; i++) {
    for (let j=n-1; j>=0; j--) 
    {let k = (i>=j) ? '*' : '-' ;
           text += k;}
    for (let j=1; j<n; j++) 
    {let k = (i>=j) ? '*' : '-' ;
           text += k;}                       
       text += "\n";        
   }       
    for (let i=0; i<n-1; i++) {        
    for (let j=n-1; j>=0; j--) 
    {let k = (i+j<=n-2) ? '*' : '-' ;
           text += k;}
    for (let j=(1); j<n; j++) 
    {let k = (i+j<=n-2) ? '*' : '-' ;
           text += k;}                       
       text += "\n";       
   }
   console.log(text);
}

//3.2
function draw(n) {
    let text = '';
    let and = 1;
    for (let i=n; i>=1; i--) {
        for (let j=1; j<=n; j++) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'number') {
                and++;
            }                        
        }
        for (let j=(n-1); j>=1; j--) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'number') {
                and++;
            }                       
        }                       
        text += "\n";       
    }       
    for (let i=2; i<=n; i++) {        
        for (let j=1; j<=n; j++) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'number') {
                and++;
            }                       
        }
        for (let j=(n-1); j>=1; j--) {
            let print = (j < i) ? '-' : Number(and) ;
            text += print;
            if (typeof print === 'number') {
                and++;
            }                       
        }                       
        text += "\n";         
    }
    console.log(text);
}

//3.3
function draw(n) {
    test =[];
    for (let i=0; i<n; i++) 
    {text=[];
    for (let j=0; j<n; j++) 
        {
        if (i>= j) 
        {text.push("*");} 
        else 
        {text.push("-");}
        }
      test.push(text);
    }
    console.log(test);
  }

//3.4
function draw(n) {
    text = [];
    for (let i=0; i<n; i++) 
    {kkk=[];
    for (let j=n-1; j>=0; j--) 
        {
        if (i>= j) 
        {kkk.push("*");} 
        else 
        {kkk.push("-");}
        }   
    for (let j=1; j<n; j++) 
        {
        if (i>= j) 
        {kkk.push("*");} 
        else 
        {kkk.push("-");}
        }
        text.push(kkk);       
    }
    
    for (let i=0; i<n-1; i++) 
    {ppp=[];        
    for (let j=n-1; j>=0; j--)
        {
        if (i<=n-2-j) 
        {ppp.push("*");} 
        else 
        {ppp.push("-");}
        }
    for (let j=(1); j<n; j++)
        {
        if (i<=n-2-j) 
        {ppp.push("*");} 
        else 
        {ppp.push("-");}
        }
        text.push(ppp);
    }
    console.log(text);                          
   }