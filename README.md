# Juego de Piedra, Papel o Tijeras 🥌 | 📰 | ✂

¡Bienvenido al Juego de Piedra, Papel o Tijeras en JavaScript! 🥌 | 📰 | ✂

Este es un juego clásico y divertido en el que tendrás que enfrentarte a la computadora para ver quién es el ganador.

---
## CODIGO JavaScript
Esta codigo define una función llamada random que toma dos parámetros (min y max) y devuelve un número aleatorio entre esos dos valores.
  ```javascript
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  ```
Este codigo define una función llamada choice que toma un parámetro llamado move y devuelve una cadena de texto que representa la elección del jugador en el juego de piedra, papel o tijera.
  ```javascript
function choice(move) {
    let result = ''
    if(move == 1) {
        result = 'ROCK 🥌'
    } else if(move == 2) {
        result = 'PAPER 📰'
    } else if(move == 3) {
        result = 'SCISSORS ✂'
    } else {
        result = 'BAD CHOSEN 😓'
    } 
    return result 
}
  ```
Este bloque declara variables para almacenar el puntaje del jugador (player), el puntaje de la computadora (pc), el número de victorias (wins) y el número de derrotas (loses).
  ```javascript
let player = 0
let pc = 0
let wins = 0
let loses = 0
```
Este bloque contiene un bucle while que se ejecuta mientras el número de victorias (wins) y el número de derrotas (loses) sean menores que 3. En cada iteración del bucle, se elige una opción aleatoria para la computadora (pc), se solicita al jugador que elija una opción, se muestra en pantalla la opción elegida por la computadora y el jugador, y luego se determina el resultado del juego y se muestra en pantalla.
  ```javascript
while (wins < 3 && loses < 3) {                
    pc = random(1,3)
    player = prompt('Choose: 1 for rock, 2 for paper, 3 for scissors')
    
    alert('PC chose: ' + choice(pc))
    alert('You chose: ' + choice(player))
    
    //COMBAT
    if(pc == player) {
        alert('TIE 😐')
    } else if(player == 1 && pc == 3) {
        alert('YOU WIN 🥳')
        wins = wins + 1
    } else if(player == 2 && pc == 1) {
        alert('YOU WIN 🥳')
        wins = wins + 1
    } else if(player == 3 && pc == 2) {
        alert('YOU WIN 🥳')
        wins = wins + 1
    } else {
        alert('YOU LOSE 😭')
        loses = loses + 1
    }
}
  ```
Este bloque muestra en pantalla el número de victorias (wins) y el número de derrotas (loses) del jugador después de que el bucle while ha terminado.
  ```javascript
alert('WINS: ' + wins + ' times. LOSES: ' + loses + ' times.')
  ```
---
> [!IMPORTANT]
> ## Cómo jugar
> 1. Abre el archivo index.html en tu navegador.
> 2. Selecciona tu movimiento:
  >   - Ingresa 1 para elegir *piedra* 🪨
  >   - Ingresa 2 para elegir *papel* 📄
  >   - Ingresa 3 para elegir *tijeras* ✂
> 3. Observa la elección de la computadora y tu elección.
> 4. El resultado del combate se mostrará en una ventana emergente:
  >   - Si hay un empate 😐, nadie gana.
  >   - Si ganas 🥳, acumularás una victoria.
  >   - Si pierdes 😭, sumarás una derrota.
> 5. El juego continúa hasta que uno de los jugadores alcance 3 victorias consecutivas o 3 derrotas consecutivas.

---

> [!TIP]
> ## Tips
> - Intenta anticipar el movimiento de la computadora para tomar ventaja.
> - Observa los patrones y estrategias de la computadora para mejorar tus posibilidades de ganar.
> - ¡Diviértete y disfruta del juego!

---

> [!NOTE]
> ## Comentarios
> - El código está escrito en JavaScript puro y utiliza la función Math.random() para generar movimientos aleatorios.
> - Se utilizan emojis para representar los movimientos: piedra 🪨, papel 📄 y tijeras ✂.
> - El código incluye comentarios que explican cada sección y función para facilitar su comprensión.



# ¡Que te diviertas jugando al Piedra, Papel o Tijeras! 
