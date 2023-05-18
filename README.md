# S6J-avascript-III
Se realiza ejercicio y bonus 1

nelso@LAPTOP-VAARF69E MINGW64 ~ (master)
$ cd OneDrive/Desktop/Ejercicios

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios (master)
$ ls
 Ciclos/          'Ejercicio 3'/      Ejercicio1/              S4_JS/             'git init.txt'
'Ejercicio 2s3'/  'Ejercicio 3.zip'  'GENERAR LLAVE SSH.txt'   ejer_Java_script/

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios (master)
$ cd S4_JS

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS (develop)
$ ls
 aspirantes-mir-javascript/  'solucion S4.txt'

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS (develop)
$ cd aspirantes-mir-javascript

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript (main)
$ ls
 README.md  'Sesion 6'/   js-1/   js-2/   js-3/

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript (main)
$ cd js-3

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ touch object1.js

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git add .

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git commit -m "Creacion de rama"
[master (root-commit) 93c4619] Creacion de rama
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 object1.js

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git branch develop

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git checkout develop
Switched to branch 'develop'

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ code .

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ node object1.js
30
nombre: Pedro Perez
edad: 30
hobbies: [ 'programar', 'squash', 'piano' ]
estatura: 1.8
hola, me llamo Pedro Perez

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ touch object2.js

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ node object2.js
nombre: Nelson Pulido
edad: 32
ciudad: Bogotá
profesion: Ingeniero
Nelson Pulido 32 Bogotá
Viajar,Comer,bailar

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ git add .

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ git commit -m "solucion a los ejercicios de js"
[develop bea064f] solucion a los ejercicios de js
 2 files changed, 67 insertions(+)
 create mode 100644 object2.js

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (develop)
$ git checkout master
Switched to branch 'master'

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git merge develop
Updating 93c4619..bea064f
Fast-forward
 object1.js | 36 ++++++++++++++++++++++++++++++++++++
 object2.js | 31 +++++++++++++++++++++++++++++++
 2 files changed, 67 insertions(+)
 create mode 100644 object2.js

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git branch -d develop
Deleted branch develop (was bea064f).

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ node object1.js
30
nombre: Pedro Perez
edad: 30
hobbies: [ 'programar', 'squash', 'piano' ]
estatura: 1.8
hola, me llamo Pedro Perez

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ node object2.js
nombre: Nelson Pulido
edad: 32
ciudad: Bogotá
profesion: Ingeniero
Nelson Pulido 32 Bogotá
Viajar,Comer,bailar

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git remote add origin git@github.com:NelsonPulido1991/S6J-avascript-III.git

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git push -f git@github.com:NelsonPulido1991/S6J-avascript-III.git
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (7/7), 1.20 KiB | 616.00 KiB/s, done.
Total 7 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/NelsonPulido1991/S6J-avascript-III/pull/new/master
remote:
To github.com:NelsonPulido1991/S6J-avascript-III.git
 * [new branch]      master -> master

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ ls
object1.js  object2.js

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git add .

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git commit -m "solucion a los ejercicios de js"
On branch master
nothing to commit, working tree clean

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git push -u origin master
Everything up-to-date
branch 'master' set up to track 'origin/master'.

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git push
Everything up-to-date

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ git push git@github.com:NelsonPulido1991/S6J-avascript-III.git
Everything up-to-date

nelso@LAPTOP-VAARF69E MINGW64 ~/OneDrive/Desktop/Ejercicios/S4_JS/aspirantes-mir-javascript/js-3 (master)
$ ls
object1.js  object2.js
