# Melius Illuminare

A cinematic digital encyclopedia of **Catholic theology** — the Fathers as received by the Church, the Doctors, the Scholastics, and the great schools of Catholic spiritual formation.

Plain HTML/CSS/JS — **no build step, no npm, no server required.**  
Open `index.html` in a browser to run it.

## Structure

```
melius_illuminare/
├── index.html                 Landing page
├── figures.html               Figure directory (search + filter)
├── concepts.html              Theological concepts archive
├── spiritualities.html        Schools of Catholic formation
├── theological-tree.html      Doctrinal relationships
├── about.html                 Sourcing & editorial policy
├── figures/                   Profile, Central Answer, Opinion exhibits
├── texts/                     Bible, Summa, and work readers
├── js/                        Data and renderers
└── css/                       Styles
```

## Scope

Figures and spiritualities are included only when they belong to the Catholic Church’s living tradition or to the undivided Church of the first millennium as received by Catholicism. Protestant reformers and purely post-Schism Orthodox writers are omitted.

## Running locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```
