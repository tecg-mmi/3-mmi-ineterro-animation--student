# Des trucs qui bougent

> A JS exercise use at HEPL for MMI.

* * *

**request-animation-frame** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](https://hepl.be) from Liège, Belgium, is a French-speaking
school. From this point, the instruction will be in French. Sorry.

* * *

## Énoncé

1. Redimensionnez le canevas pour qu'il occupe toute la hauteur et la largeur de la fenêtre. Cette dimension doit être dynamique : en redimensionnant la fenêtre, le canevas doit s'ajuster automatiquement.
2. Créez une classe `FallingObstacle`, qui représente un cercle avec deux propriétés supplémentaires : `speed` et `canvas`.
3. À l'initialisation d'un `FallingObstacle`, seuls le canvas et le contexte sont renseignés. Des valeurs aléatoires sont générées pour la position, le rayon, la couleur et la vitesse.
4. Un `FallingObstacle` peut être animé grâce à sa méthode `animate` : il tombe à la verticale à une vitesse constante, définie par `speed`.
5. Initialisez un tableau contenant plusieurs `FallingObstacles`.
6. Animez ces objets pour qu'ils tombent du haut de l'écran.
7. Dans la boucle d'animation, quand un `FallingObstacles` (contenu dans le tableau) sort du canvas, alors il est remplacé par un nouveau qui aura donc des nouvelles valeurs aléatoires.

## Bonus

* Faites en sorte que tous les cercles utilisent la même teinte (Hue). Cette valeur est générée aléatoirement une seule fois pour tous les objets, tandis que la saturation et la luminosité varient pour chaque objet.
* Lorsqu'on clique sur un `FallingObstacle`, sa couleur devient rouge.

Pour vérifier si un point est à l'intérieur d'un cercle, utilisez cette fonction :
```ts
isPointInCircle(positionA: iPosition, positionB: iPosition, radius:number):bool {
return Math.sqrt(Math.pow(positionA.x - positionB.x, 2) + Math.pow(positionA.y - positionB.y, 2)) < radius;
}
```
Des explications supplémentaires seront données en classe.








