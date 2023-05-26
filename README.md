# Programos paleidimas

- Backend .env faile pridėti mysql prisijungimus
- Backend ir Frontend(administration-app) paleisti su - npm start
- Backend Schema ir Tables susikuria pačios, papildomai kurti duomenų bazėje nieko nereikia
- http://localhost:3000/

# Programos paiškinimas apibūdinimas

- Neregistruotam vartotojui prieinami tik šie routes - /Register ir /login kita nėra pasiekiama

- /Register:
  Tikrina ar nėra registruotas tokiu pačiu email adresu, jei yra išmeta klaidą
  Priregistruoja naują administratorių
  Naujai priregistruotą administratorių iš karto prijungia į aplikaciją
  Naudojama bcrypt

- /login:
  Tikrinamas slaptažodis
  Prijungia vartotoją jei db yra informacija

- Prisiregistravus/prisijungus pasiekiami mygtukai su pasirinkimais pridėti naują vartotoją arba peržiūrėti registruotų vartotojų lentelę.

- Prijungto vartotojo token key išsaugomas į localstorage

- /newuser
  Tikrina ar jau nėra pridėti vartotojo su tokiu el. paštu
  Sucess atveju atvaizduojamas toast, error (email jau agzistuoja) atvaizduojamas error

- /registeredusers
  Table elemente matomi visi priregistruoti reginių lankytojai su galimais mygtukais - edit ir delete.
- - Edit:
    Pasirinktai eilutei atsiranda input laukeliai kuriuose galima pakoreguoti vartotoją
    Mygtukai - patvirtinimas ir koregavimo atšaukimas
    Pakoregavus email adresą jau egzistuojančiu kitam vartotojui gaunamas toast error pranešimas
    Sėkmingu keitimu gaunamas success toast
- - Delete:
    Pasirinkus ištrinti vartotoją su confirmAlert paklausiama ar tikrai norite ištrinti, po sėkmingo ištrynimo gaunamas info toast žinutė

- navbar
  Atvaizduojami routes į logo(/(home)) /(home) /newuser /registeredusers ir Logout vartotojo atjungimui.
