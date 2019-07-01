 
 type Deck = NomarlCard[]
 type Color = '♥' | '♠'  | '♦' | '♣' 
 type NomarlCard = {
    color : Color,
    number : number
 }

 // 创建扑克牌
 function CreateDeck():Deck{
    let cardArray:Deck = []
    for(let i=1;i <= 13;i++){
        cardArray.push({
            color:'♠',
            number:i
        })
        cardArray.push({
            color:'♣',
            number:i
        })
        cardArray.push({
            color:'♥',
            number:i
        })
        cardArray.push({
            color:'♦',
            number:i
        })
    }
    return cardArray
 }

// 打印
 function PrintCard(arr:Deck){
     let result = '\n'
     arr.forEach((item,index)=>{
        let num = item.number,
            str = item.color;
        if(num == 1){
            str +='A'
        }  
        else if(num == 11){
            str +='J'
        }
        else if(num == 12){
            str +='Q'
        } 
        else if(num == 13){
            str +='K'
        }
        else{
            str += num
        }

        if(index %4 == 0){
            result += '\n'
        }

        result += str+'\t'
     })
     console.log(result)
 }


 let card = CreateDeck()
PrintCard(card)