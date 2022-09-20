--PREDUZECE PODACI

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES ( nextval('preduzece_seq'), 'Delta Agrar', 12123, 'Novi Sad', 'Kompanija Delta Agrar
		je jedan od lidera u svim aspektima agrarnih delatnosti.');

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Dunav Coop', 12124, 'Novi Sad', 'Kompanija Dunav Coop
		je jedan od lidera u svim aspektima gradjevinskih delatnosti.');

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Tiffany Production', 12125, 'Cacak', 'Tiffany Production bavi se proizvodnjom konfecijske
		garderobe');

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (nextval('preduzece_seq'), 'Swisslion', 12126, 'Takovo', 'Swisslion Takovo predstvalja jednu od vodećih multinacionalnih 
		kompanija u regionu sa poslovno-proizvodnim jedinicama');

INSERT INTO "preduzece"("id", "naziv", "pib", "sediste", "opis")
VALUES (-100, 'TestNaziv', 99999, 'TestSediste', 'TestOpis');




--SEKTOR PODACI

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Proizvodnja', 'PROIZ', 1);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Racunovodstvo', 'RAC', 1); 

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Marketing', 'MR', 1);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Nabavka', 'NB', 1);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Racunovodstvo', 'RAC', 2);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Marketing', 'MR', 2);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Nabavka', 'NB', 2);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Proizvodnja', 'PROIZ', 3);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Racunovodstvo', 'RAC', 3); 

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Marketing', 'MR', 3);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Nabavka', 'NB', 3);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Proizvodnja', 'PROIZ', 4);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Racunovodstvo', 'RAC', 4); 

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Marketing', 'MR', 4);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (nextval('sektor_seq'), 'Nabavka', 'NB', 4);

INSERT INTO "sektor"("id", "naziv", "oznaka", "preduzece")
VALUES (-100, 'TestNaziv', 'TestOznaka', 4);


-- OBRAZOVANJE PODACI

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'Diplomirani masinski inzenjer', 'sesti', 'Diplomirani masinksi inzenjer na Fakultetu tehnickih nauka u Novom Sadu');

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'Master inzenjer racunovodstva', 'sedmi', 'Master inzenjer racunovodstva na Fakultetu 
	tehnickih nauka u Novom Sadu');
	
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'Master inzenjer ekonomije', 'sedmi', 'Master inzenjer ekonomije na Poljopivrednom 
	fakultetu u Novom Sadu');
	
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'Master inzenjer marketinga', 'sedmi', 'Master inzenjer marketinga na Fakultetu 
	tehnickih nauka u Novom Sadu');
	
INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'Diplomirani pravnik', 'sedmi', 'Diplomirani pravnik na Pravnom 
	fakultetu u Novom Sadu');

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (nextval('obrazovanje_seq'), 'Master inzenjer mehatronike', 'sedmi', 'Master inzenjer mehatronike na Fakultetu 
	tehnickih nauka u Novom Sadu');

INSERT INTO "obrazovanje"("id", "naziv", "stepen_strucne_spreme", "opis")
VALUES (-100, 'TestNaziv', 'TestSS', 'TestOpis');



-- RADNIK PODACI

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Marija', 'Levic', 111111111, 1, 1);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Stefan', 'Jeftic', 222222222, 5, 4);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Danijela', 'Bojanic', 333333333, 3, 2);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Dejan', 'Simeonovic', 333333345, 4, 3);

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Filip', 'Zivkovic', 444444444 , 2, 5);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Sandra', 'Tomasevic', 555555555, 3, 6);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Goran', 'Savic', 666666666, 2, 7);

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Hana', 'Simovic', 777777777, 6, 8);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Jana', 'Dakic', 888888888, 2, 9);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Senka', 'Minic', 800888888, 4, 10);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Stefan', 'Savic', 100888888, 3, 11);

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Rastko', 'Filipovic', 101010101, 1, 12);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Bojan', 'Katic', 121212121, 2, 13);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Katarina', 'Velickovic', 131313131, 4, 14);
INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (nextval('radnik_seq'), 'Jelena', 'Markovic', 199313131, 5 , 15);

INSERT INTO "radnik"("id", "ime", "prezime", "broj_lk", "obrazovanje", "sektor")
VALUES (-100, 'TestIme', 'TestPrezime', 199999999, 3, 3);


