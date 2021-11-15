function triangle(num, mode){
    if(num > 0 && mode === 'left'){
      for(let i = 1; i <= num; i++){
        let draw = '';
          for(let j = 1; j <= i; j++){
            draw += '#';
          }
        console.log(draw);
      }
    }
    
    if(num > 0 && mode === 'right'){
        let draw = '';
        for (let i = 1; i <= num; i++) {
            for (let j = 0; j < num - i; j++) {
                draw += ' ';
            }
            for (let k = 0; k < i; k++) {
                draw += '#';
            }
            draw += '\n';
        }
        console.log(draw);
    }

    if(num < 0 && mode === 'left'){
      for(let i = -1; i >= num; i--){
        let draw = '';
          for(let j = i; j >= num; j--){
            draw += '#';
          }
        console.log(draw);
        }
    }

    if(num < 0 && mode === 'right'){
      let draw = '';
      for (let i = -1; i >= num; i--) {
          for (let j = 0; j > num + i; j--) {
              draw += ' ';
          }
          for (let k = i; k >= num; k--) {
              draw += '#';
          }
          draw += '\n';
      }
      console.log(draw);
  }

  if(num > 0 && mode === 'isosceles'){
    let draw = '';
    for(let i = 1; i <= num; i++){
        for(let j = 0; j <= num - i; j++){
          draw += ' ';
        }
        for(let k = 0; k < 2 * i - 1; k++){
            draw += '#';
        }
        draw += '\n';
      }
      console.log(draw);
  }

  if(num < 0 && mode === 'isosceles'){
    let draw = '';
    for(let i = -1; i >= num; i--){
        for(let j = 0; j >= num + i; j--){
          draw += ' ';
        }
        for(let k = i; k >= 2 * num - i; k--){
            draw += '#';
        }
        draw += '\n';
      }
      console.log(draw);
    }
      
  }
  triangle(-3, 'isosceles');