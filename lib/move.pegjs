// S공 옮기기 의사코드
// ==========================


Statement
  = move:Move _ others:Statement { return [ move, ...others ] } 
  / move:Move _ { return [ move ] }
  
Move
  = "move" _ "(" _ left:Expression _ "," _ right:Expression _ ")" { return [ left, right ] }

Expression
  = "BASKET_RED"
  / "BASKET_GREEN"
  / "BASKET_BLUE"

// optional whitespace
_  = [ \t\r\n]*