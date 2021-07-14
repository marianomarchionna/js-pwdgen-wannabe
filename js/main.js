var nome;
nome = prompt('Inserisci il tuo nome: ');

var cognome;
cognome = prompt('Inserisci il tuo cognome:');

var colore;
colore = prompt('Inserisci il tuo colore preferito: ');

document.getElementById('my_password').innerHTML = "Password: " + nome + cognome + colore + "21";