# Git-dokumentation – Musiklist-applikation

I den här filen dokumenterar jag hur jag har använt Git för att arbeta med grenar i detta projekt.

## Skapa nya grenar

För att organisera mitt arbete skapade jag två nya grenar: 
- development 
- features

Jag valde att göra `development` till huvudgren via GitHubs inställningar. 

## Kommandon:

#### Skapa en ny branch
```bash
git branch development
```
```bash
git branch features
```

#### Byta mellan grenar:
```bash
git checkout development
```
```bash
git checkout features
```

#### Slå samman grenar
Låt säga att jag vill merga min `features` gren till min `development` gren

1. Gå först till den gren du vill merga in i med kommandot: 
```bash
git checkout development
```
2. kör sedan merge-kommandot:
```bash
git merge features
```

## ⚔️ Hantering av Merge-konflikter i Git

När vi arbetar i olika grenar i Git och sedan försöker slå ihop (merga) dem, kan det uppstå **konflikter**. En konflikt uppstår när två eller flera grenar har ändrat samma rader i samma fil, och Git inte kan avgöra vilken version som ska behållas automatiskt.

#### 🛠 Exempel på konflikt

Anta att två grenar har redigerat samma kodrad i `index.html`. När vi kör:

```bash
git merge features
```

Git visar då ett felmeddelande om att det finns en konflikt.

Innehållet i filen kommer att se ut så ut ungefär så här:

```html
<<<<<<< development
<h1>Startsida</h1>
=======
<h1>Om oss</h1>
>>>>>>> features
```

Detta visar att `development` (nuvarande gren) har texten `Startsida`, medan den andra grenen har `Om oss`.

---

#### ✅ Så här hanterar vi konflikten:

1. **Öppna filen** med konflikten.
2. **Läs igenom båda versionerna**.
3. **Välj den kod som ska behållas**, eller kombinera båda.
4. **Radera konfliktmarkeringarna** (`<<<<<<<`, `=======`, `>>>>>>>`).
5. **Spara filen** efter ändring.
6. **Lägg till filen igen**:

   ```bash
   git add index.html
   ```

7. **Skapa en merge commit**:

   ```bash
   git commit "Ditt commit-meddelande här"
   ```